// window.onload = init; // метод, который будет вызываться при запуске игры 
// cобытие window.onload JavaScript запускается после полной загрузки страницы, включая стили, изображения и другие ресурсы.

var map; // переменная для карты map
var ctxMap; // переменная, через которую взаимодействуем с полотном игры

var statsCanvas;
var ctxStatsCanvas;

// var winCanvas;
// var ctxWinCanvas;

// var gameOverCanvas;
// var ctxGameOverCanvas;

// var drawButton; // переменная для кнопки draw
// var clearButton; // переменная для кнопки clear
var pauseButton;

var gameWidth = 1280;
var gameHeight = 720;
// Take the size of the viewport minus the top div with we show mouse coordinates (#gameName):
// var gameHeight = document.documentElement.clientHeight - 34;

var background1 = new Image(); // переменная, отвечающая за фон
background1.src = 'images/background.png'; // путь к этому изображению

var background2 = new Image(); // 
background2.src = 'images/background.png'; //

// var winImg = new Image();
// winImg.src = 'images/win.jpg';

// var gameOverImg = new Image();
// gameOverImg.src = 'images/gameover.jpeg';

var player;
var bear;
var ax;
// var win;
// var gameOver;

// var trees = []; // массив переменных tree
// window.trees = trees; // для доступа к деревьям из консоли для отладки
// var tree;
// var tree2;

var isPlaying; // переменная типа boolean (играем или нет?!)
// var timer = 5000; // переменная, отвечающая за время игры

// инициализация переменных движения фона по оси Х
var map1X = 0; // первый background должен появляться в левом верхнем углу (мы должны его видеть) 
var map2X = gameWidth; // второй background появится справа от канваса (не будет виден)
var speed = 5;

// переменные для создания объектов-врагов
var treeMaxCount = 10; // количество объектов, которое будет появляться, когда проходит определенное время
var treeCreateTime = 1000; // время, через которое вызывается функция startCreatingTrees() (задается в милисекундах, 1с = 1000мс)
var createInterval; // интервал создания объектов

// переменные для использования мыши
var mouseX;
var mouseY;
var mouseControl = false;
var keyboardControl = true;

var audio;

// поддержка браузеров - переменная отвечает за обновление игры (в ней находится основной цикл игры)
// window.requestAnimationFrame указывает браузеру на то, что вы хотите произвести анимацию, и просит его запланировать перерисовку на следующем кадре анимации.
// В качестве параметра метод получает функцию, которая будет вызвана перед перерисовкой.
var requestAnimationFrame = window.requestAnimationFrame || // unknown
                            window.webkitRequestAnimationFrame || // chrome, safari, yandex...
                            window.mozRequestAnimationFrame || // mozilla
                            window.oRequestAnimationFrame || // opera
                            window.msRequestAnimationFrame; // IE

// функция инициализации переменных / вызова функций
function init() {
    // console.log('init');
    // https://professorweb.ru/my/html/html5/level4/4_1.php - canvas
    map = document.getElementById('map'); // первым делом сценарий должен получить объект холста, для чего используется метод document.getElementById.
    ctxMap = map.getContext('2d'); // затем метод getContext() генерирует двумерный контекст рисования, который будет связан с указанным холстом.

    statsCanvas = document.getElementById('stats');
    ctxStatsCanvas = statsCanvas.getContext('2d');

    // winCanvas = document.getElementById('win');
    // ctxWinCanvas = winCanvas.getContext('2d');

    // gameOverCanvas = document.getElementById('gameOver');
    // ctxGameOverCanvas = gameOverCanvas.getContext('2d');

    map.width = gameWidth;
    map.height = gameHeight;
    statsCanvas.width = gameWidth;
    statsCanvas.height = gameHeight;
    // winCanvas.width = gameWidth;
    // winCanvas.height = gameHeight;
    // gameOverCanvas.width = gameWidth;
    // gameOverCanvas.height = gameHeight;
    
    ctxStatsCanvas.fillStyle = '#3d3d3d'; // задаем стиль для отображения надписей с помощью встроенной переменной fillStyle
    ctxStatsCanvas.font = 'bold 28px Norse Regular'; // задаем шрифт надписей с помощью встроенной переменной font

    // drawButton = document.getElementById('drawButton');
    // clearButton = document.getElementById('clearButton');

    // drawButton.addEventListener('click', drawRectangle, false); // методы addEventListener и removeEventListener являются современным способом назначить или удалить обработчик, 
    // и при этом позволяют использовать сколько угодно любых обработчиков.
    // event - имя события, например click
    // handler - ссылка на функцию, которую надо поставить обработчиком.
    // phase - необязательный аргумент, «фаза», на которой обработчик должен сработать. 
    // jQuery --> drawButton.click(drawRectangle)
    // drawRect.onclick = 
    // clearButton.addEventListener('click', clearRectangle, false);

    // Пауза в игре
    pauseButton = document.getElementById('stats');
    pauseButton.addEventListener('click', pauseGame, false);
    addEventListener("keydown", function(event) {
        if (event.keyCode == 32)
        pauseGame();
    });

    player = new Player(gameHeight, gameWidth);
    bear = new Bear(gameHeight, gameWidth, player);
    ax = new Ax(gameHeight, gameWidth);

    // Все деревья используют один канвас, поэтому инициализировать его нужно только один раз (не для каждого дерева в отдельности).
    Tree.initCanvas(gameHeight, gameWidth, treeMaxCount, treeCreateTime)

    // win = new Win();
    // gameOver = new GameOver();
    
    // tree = new Tree();
    // tree2 = new Tree();

    // drawBackground(); // статическая функция: загружается и не повторяется
    // drawPlayer();
    // draw();

    startLoop();
    // как правило, эвенты добавляются в самый конец, чтобы остальные переменные были уже инициализированы
    document.addEventListener("keydown", checkKeyDown, false);
    document.addEventListener("keyup", checkKeyUp, false);
    document.addEventListener("mousemove", mouseMove, false);
    document.addEventListener("click", mouseClick, false); // "mouseclick" уже работать не будет!

    // audio = document.getElementById('audio');
    audio = new Audio('track.mp3'); // cоздание объекта Audio в javascript
    audio.loop = true; // воспроизведение по циклу
    audio.play(); //воспроизведение звука
}

// функции управления мышью
function mouseMove(e) { // здесь передается объект event, который будет отвечать за движение мыши
    // !!! Сделать изменения координат игрока со временем (8:56)
    if(!mouseControl)
        return;
    mouseX = e.pageX - map.offsetLeft; // каждый раз обновляем координату Х, которая будет считавается по оси Х со всей вэб-страницы (канвас не имеет определенных координат), даже когда мышь за пределами канваса
    mouseY = e.pageY - map.offsetTop; // при этом необходимо компенсировать расстояние, на которое смещен канвас от левого верхнего угла вэб-страцницы
    // добавляем координаты мыши в название игры (изменяем последнее)
    document.getElementById('gameName').innerHTML = 'X: '+mouseX+' Y: '+mouseY;

    // при перемещении из function mouseClick(e) в данную функцию игрок постоянно "следит за курсором"
    player.drawX = mouseX - player.width/2;
    player.drawY = mouseY - player.height/2;
}

function mouseClick(e) { // здесь в параметрах передается объект event, который будет отвечать за клик мыши
    if(!mouseControl)
        return;
    // player.drawX = mouseX - player.width/2; // присваиваем значение координате игрока по Х
    // player.drawY = mouseY - player.height/2;
    // добавляем клик в название игры (изменяем последнее)
    document.getElementById('gameName').innerHTML = 'Clicked';
}

// вызывает себя рекурсивно, запрашивая браузер всякий раз, когда он готов к анимации (requestAnimationFrame)
function loop() {
    if(isPlaying) {
        draw();
        update();
        requestAnimationFrame(loop);
    }
}

function startLoop() {
    isPlaying = true;
    loop(); // запускаем цикл
    startCreatingTrees(); // вызываем функцию создания врагов (можно вызвать в init или в цикле игры)
}

function stopLoop() {
    isPlaying = false;
}

// draw() и update() взаимодлействуют с основным циклом игры и выполняются последовательно
function draw() {
    player.draw();
    bear.draw();
    ax.draw();
    Tree.clearCtx();
    for(var i = 0; i < Tree.trees.length; i++) { // .length передает вес массива, т.е. все переменные, которые содержатся в нем
        Tree.trees[i].draw(stopLoop, startLoop); // для каждого элемента массива trees[] создается новый объект Tree
    }
    // tree1.draw();
    // tree2.draw();
}

function update() {
    // console.log('loop');
    moveBackground();
    drawBackground();
    updateStats();
    player.update(ax, Tree.trees, audio);
    bear.update(player, Tree.trees);
    ax.update(Tree.trees);

    // по аналогии с draw():
    for(var i = 0; i < Tree.trees.length; i++) {
        Tree.trees[i].update();
    }
    // tree.update();

    if(player.health <= 0) {
        // player.drawX = bear.drawX; почему-то не рисует
        // player.drawY = bear.drawY;
        
        // player.health = 0;
        updateStats();
        stopLoop();
        stopCreatingTrees();
        // gameOver.draw();
        audio.pause();
        document.getElementById('gameName').innerHTML = 'GAME OVER. YOU LOSE!';
    }
    if (player.win) {
        stopLoop();
        stopCreatingTrees();
        ax.destroy();
    }
}

 function moveBackground() {
    //  var vel = 5; // переменнная, отвечающая за скорость движения фона
     map1X -= speed;
     map2X -= speed;
     if(map1X + gameWidth < 0) { // background при прохождении левой границы кансваса перемещается в правую часть канваса и снова движется влево (иначе фон уйдет с экрана влево за границы канваса (закончится))
        map1X = gameWidth - 5; // вычитаем 5px, чтобы не было видно полос при соединии бэкграундов
     }
     if(map2X + gameWidth < 0) { // аналогично первому фону
        map2X = gameWidth - 5;
     }
 }

// function Win() { 
//     this.srcX = 0; 
//     this.srcY = 0;
//     this.drawX = 0;
//     this.drawY = 0;
//     this.width = 500; 
//     this.height = 500;
// }

// function GameOver() { 
//     this.srcX = 0; 
//     this.srcY = 0;
//     this.drawX = 0;
//     this.drawY = 0;
//     this.width = 1000; 
//     this.height = 900;
// }

// Win.prototype.draw = function() {
//     ctxWinCanvas.drawImage(winImg, this.srcX, this.srcY, this.width, this.height,
//         this.drawX, this.drawY, this.width, this.height);
// }

// GameOver.prototype.draw = function() {
//     ctxGameOverCanvas.drawImage(gameOverImg, this.srcX, this.srcY, this.width, this.height,
//         this.drawX, this.drawY, this.width, this.height);
// }

// функция, отвечающая за нажатие клавиши клавиатуры
function checkKeyDown(e){ // переменная e отвечает за: какая клавиша была нажата
    var keyID = e.keyCode || e.which; // переменная поддержки старых браузеров
    var keyChar = String.fromCharCode(keyID); // преобразуем значение в стринг для облечения оперирования данными

    if (keyboardControl) {
        if(keyChar == "W") {
            player.isUp = true;
            e.preventDefault();// функция устанавливает значение нажатой клавиши в состояние, в котором она была до этого
        }
        if(keyChar == "S") {
            player.isDown = true;
            e.preventDefault();
        }
        if(keyChar == "D") {
            player.isRight = true;
            e.preventDefault();
        }
        if(keyChar == "A") {
            player.isLeft = true;
            e.preventDefault();
        }
    }
    else {

    }
}

// функция, отвечающая за отпускание клавиши клавиатуры
function checkKeyUp(e){
    var keyID = e.keyCode || e.which;
    var keyChar = String.fromCharCode(keyID);

    if (keyboardControl) {
        if(keyChar == "W") {
            player.isUp = false;
            e.preventDefault();
        }
        if(keyChar == "S") {
            player.isDown = false;
            e.preventDefault();
        }
        if(keyChar == "D") {
            player.isRight = false;
            e.preventDefault();
        }
        if(keyChar == "A") {
            player.isLeft = false;
            e.preventDefault();
        }
    }
    else {

    }
}

// ~ функция обновления информации
function updateStats() {
    ctxStatsCanvas.clearRect(0, 0, gameWidth, gameHeight);
    ctxStatsCanvas.fillText("Health: " + player.health + "%", 30, 40);
    ctxStatsCanvas.fillText("Time: " + ax.timer/1000 + "s", 180, 40);
}

function drawBackground() {
    ctxMap.clearRect(0, 0, gameWidth, gameHeight); // стираем предыдущий кадр, которым было прошлое изображение
    ctxMap.drawImage(background1, 0, 0, gameWidth, gameHeight, // размер именно картинки
        map1X, 0, gameWidth, gameHeight); // 0, 0, gameWidth, gameHeight - размер на экране
    ctxMap.drawImage(background2, 0, 0, gameWidth, gameHeight,
        map2X, 0, gameWidth, gameHeight); // map1X (map2X), 0, gameWidth, gameHeight - для того, чтобы была возможность перемещать по Х координате (по Y движение фона не нужно)

}

// function drawPlayer() {
//     ctxMap.drawImage(playerImg, 0, 0, 150, 175, // размер c ajust_size (mac)
//         0, 0, 150, 175);
// }

// function drawRectangle() {
//     ctxMap.fillStyle = '#3D3D3D';
//     ctxMap.fillRect(10, 10, 100, 100); // координаты, ширина и высота прямоугольника
// }

// function clearRectangle() {
//     ctxMap.clearRect(0, 0, gameWidth, gameHeight);
// }

var pause = false;
function pauseGame() {
    if (pause === false) {
        pause = true;
        stopLoop();
        audio.pause();
    }
    else {
        pause = false;
        startLoop();
        audio.play(); //воспроизведение звука
    }
};

// var pauseButton = document.getElementById('pauseButton');
// pauseButton.onclick = function() {
//     if (this.innerHTML == 'Pause') {
//         this.innerHTML = 'Go!';
//         startLoop();
//     }
//     else {
//         this.innerHTML = 'Pause';
//         stopLoop();
//     }
//     //предотвращаем переход по ссылке href
//     return false;
// };

// Функция stop для Audio:
// HTMLAudioElement.prototype.stop = function()
// {
// this.pause();
// this.currentTime = 0.0;
// }
// myaudio.stop(); // использование
