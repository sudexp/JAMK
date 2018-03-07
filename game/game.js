window.onload = init; // метод, который будет вызываться при запуске игры 
// cобытие window.onload JavaScript запускается после полной загрузки страницы, включая стили, изображения и другие ресурсы.

var map; // переменная для карты map
var ctxMap; // переменная, через которую взаимодействуем с полотном игры


var bearCanvas;
var ctxBearCanvas; // context Bear

var treeCanvas;
var ctxTreeCanvas; // context Tree

var statsCanvas;
var ctxStatsCanvas;

var axCanvas;
var ctxAxCanvas;

// var winCanvas;
// var ctxWinCanvas;

// var gameOverCanvas;
// var ctxGameOverCanvas;

var drawButton; // переменная для кнопки draw
var clearButton; // переменная для кнопки clear

var gameWidth = 1280;
var gameHeight = 720;
// Take the size of the viewport minus the top div with we show mouse coordinates (#gameName):
// var gameHeight = document.documentElement.clientHeight - 34;

var background1 = new Image(); // переменная, отвечающая за фон
background1.src = 'images/background.png'; // путь к этому изображению

var background2 = new Image(); // 
background2.src = 'images/background.png'; //

var bearImg1 = new Image();
bearImg1.src = 'images/bear1.png';

var bearImg2 = new Image();
bearImg2.src = 'images/bear2.png';

var treeImg = new Image();
treeImg.src = 'images/tree.png';

var axImg = new Image();
axImg.src = 'images/ax.png';

// var winImg = new Image();
// winImg.src = 'images/win.jpg';

// var gameOverImg = new Image();
// gameOverImg.src = 'images/gameover.jpeg';

var player;
var bear;
var ax;
// var win;
// var gameOver;

var trees = []; // массив переменных tree
window.trees = trees; // to access trees from console for debugging
// var tree;
// var tree2;

var isPlaying; // переменная типа boolean (играем или нет?!)
var health; // переменная, отвечающая за здоровье игрока
// var timer = 5000; // переменная, отвечающая за время игры
var collision = false; // переменная столкновений

// инициализация переменных движения фона по оси Х
var map1X = 0; // первый background должен появляться в левом верхнем углу (мы должны его видеть) 
var map2X = gameWidth; // второй background появится справа от канваса (не будет виден)

// переменные для создания объектов-врагов
var createInterval; // интервал создания объектов
var createTime = 1000; // время, через которое вызывается функция startCreatingTrees() (задается в милисекундах, 1с = 1000мс)
var createAmount = 8; // количество объектов, которое будет появляться, когда проходит определенное время

// переменные для использования мыши
var mouseX;
var mouseY;
var mouseControl = false;

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

    bearCanvas = document.getElementById('bear'); // переменная, отвечающая за канвас должна иметь в себе тег
    ctxBearCanvas = bearCanvas.getContext('2d');

    treeCanvas = document.getElementById('trees');
    ctxTreeCanvas = treeCanvas.getContext('2d');

    statsCanvas = document.getElementById('stats');
    ctxStatsCanvas = statsCanvas.getContext('2d');

    axCanvas = document.getElementById('ax');
    ctxAxCanvas = axCanvas.getContext('2d');

    // winCanvas = document.getElementById('win');
    // ctxWinCanvas = winCanvas.getContext('2d');

    // gameOverCanvas = document.getElementById('gameOver');
    // ctxGameOverCanvas = gameOverCanvas.getContext('2d');

    map.width = gameWidth;
    map.height = gameHeight;
    bearCanvas.width = gameWidth;
    bearCanvas.height = gameHeight;
    treeCanvas.width = gameWidth;
    treeCanvas.height = gameHeight;
    statsCanvas.width = gameWidth;
    statsCanvas.height = gameHeight;
    axCanvas.width = gameWidth;
    axCanvas.height = gameHeight;
    // winCanvas.width = gameWidth;
    // winCanvas.height = gameHeight;
    // gameOverCanvas.width = gameWidth;
    // gameOverCanvas.height = gameHeight;
    
    ctxStatsCanvas.fillStyle = '#3d3d3d'; // задаем стиль для отображения надписей с помощью встроенной переменной fillStyle
    ctxStatsCanvas.font = 'bold 24px Arial'; // задаем шрифт надписей с помощью встроенной переменной font

    drawButton = document.getElementById('drawButton');
    clearButton = document.getElementById('clearButton');

    drawButton.addEventListener('click', drawRectangle, false); // методы addEventListener и removeEventListener являются современным способом назначить или удалить обработчик, 
    // и при этом позволяют использовать сколько угодно любых обработчиков.
    // event - имя события, например click
    // handler - ссылка на функцию, которую надо поставить обработчиком.
    // phase - необязательный аргумент, «фаза», на которой обработчик должен сработать. 
    // jQuery --> drawButton.click(drawRectangle)
    // drawRect.onclick = 
    clearButton.addEventListener('click', clearRectangle, false);

    player = new Player(gameHeight, gameWidth);
    bear = new Bear();
    ax = new Ax();
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

// функция создания объектов tree (не инициализируется в init() - вызывается во время того, как цикл игры продолжается)
// объекты содержатся на канвасе Tree
function createTree(count) {
    // чтобы иметь количество объектов не более чем в "createAmount"
    var newCount = count - trees.length;
    for(var i = 0; i < newCount; i++) {
        // каждый раз, когда мы вызываем эту функцию, мы добавляем новые элементы в конец массива trees
        // (и сохраняем все существующие)
        var newTree = new Tree()
        trees.push(newTree); // для каждого элемента массива trees[] создается новый объект Tree
    }
}

function startCreatingTrees() {
    stopCreatingTrees(); // вызывается для того, чтобы удалить все предыдущие объекты со сцены каждые 1с (createTime) 
                            // иначе будет создано слишком много объектов --> сказывается на производительности
    createInterval = setInterval(function(){createTree(createAmount)}, createTime); // инициализация переменной createInterval с помощью встроенной функции js 
    // первый параметр (аргумент) setInterval - это функция, которая должна вызываться через определенный отрезок времени
    // createTree - это та самая функция, которую нужно вызвать, чтобы создать определенное количество объектов
    // второй парамент createAmount - время, через которое будет все это вызываться
}

function stopCreatingTrees() {
    clearInterval(createInterval); // очищаем интервал - с помощью этой функции удаляются все объекты на сцене 
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

    clearCtxTree();
    for(var i = 0; i < trees.length; i++) { // .length передает вес массива, т.е. все переменные, которые содержатся в нем
        trees[i].draw(); // для каждого элемента массива trees[] создается новый объект Tree
    }
    // tree.draw();
    // tree2.draw();
}

function update() {
    // console.log('loop');
    moveBackground();
    drawBackground();
    updateStats();
    player.update(ax, trees);
    bear.update();
    ax.update();

    // по аналогии с draw():
    for(var i = 0; i < trees.length; i++) {
        trees[i].update();
    }
    // tree.update();

    if(health <= 0) {
        // player.drawX = bear.drawX; почему-то не рисует
        // player.drawY = bear.drawY;
        stopLoop();
        stopCreatingTrees();
        // gameOver.draw();
        document.getElementById('gameName').innerHTML = 'GAME OVER';
    }
}

 function moveBackground() {
     var vel = 5; // переменнная, отвечающая за скорость движения фона
     map1X -= 5;
     map2X -= 5;
     if(map1X + gameWidth < 0) { // background при прохождении левой границы кансваса перемещается в правую часть канваса и снова движется влево (иначе фон уйдет с экрана влево за границы канваса (закончится))
        map1X = gameWidth - 5; // вычитаем 5px, чтобы не было видно полос при соединии бэкграундов
     }
     if(map2X + gameWidth < 0) { // аналогично первому фону
        map2X = gameWidth - 5;
     }
 }


function Bear() { 
    this.srcX = 0; 
    this.srcY = 0;
    this.drawX = 0;
    this.drawY = Math.floor(Math.random() * gameHeight);
    this.width = 105; 
    this.height = 83;
    this.speed = player.speed * 0.9;
}

function Ax() {
    this.startPosition = 1180;
    this.randomPosition = Math.floor(Math.random() * gameHeight);
    this.timerValue = 5000 // время появления топора - изменить

    this.srcX = 0;
    this.srcY = 0;
    this.drawX = this.startPosition;
    this.drawY = this.randomPosition;
    this.width = 100; 
    this.height = 100;
    this.speed = 5;
    // Когда переменная isActive равна false, то топор не двигается.
    this.isActive = false;
    this.timer = this.timerValue;

    // setinterval запускает функцию через 1000 мс постоянно
    setInterval(function(){
        if (ax.timer > 0) {
            ax.timer -= 1000;
        } else {
            ax.isActive = true;
        }
    }, 1000);
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

function Tree() {
    this.srcX = 0;
    this.srcY = 0;
    this.drawX = Math.floor(Math.random() * gameWidth / 2) + gameWidth; // появление объекта за правой частью канваса (ось X) на случайном расстоянии
    // this.drawX = gameWidth;
    // gameWidth=1280 - появление объекта по координате X
    // Math.random() = от 0 (включая) до 1 (не включая), Math.floor - округление
    this.drawY = Math.floor(Math.random() * gameHeight); // появление объекта по оси Y на случайной позиции
    this.width = 94;
    this.height = 148;

    // Коррекция положения, если появляется ниже экрана
    // двойная высота в случае, если друной враг перекрывается настоящим, так что оставляем пространство для него 
    if (this.drawY + this.height > gameHeight) {
        this.drawY = gameHeight - this.height;
    }
    // Коррекция положения, если появляется выше экрана
    if (this.drawY < 67) {
        this.drawY = 67;  // не уверен, что это 67px
    }

    checkOtherTrees(this)

    this.speed = 5;
    // сделать скорость слечайным образом (5 to 7)
    // this.speed = Math.floor(3 * Math.random()) + 5;

    // console.log(`New tree: ${this.drawY}`);
}

var bearImgNum = 1; // значение либо 1, либо 2
var countBear = 1;
Bear.prototype.draw = function() {
    clearCtxBear();
    var bearImgCurrent = (bearImgNum === 1 ? bearImg1 : bearImg2);
    ctxBearCanvas.drawImage(bearImgCurrent, this.srcX, this.srcY, this.width, this.height,
        this.drawX, this.drawY, this.width, this.height);
    if (countBear % 20 === 0) {
        bearImgNum = (bearImgNum === 1 ? 2 : 1);
    }
    countBear++;
}

Ax.prototype.draw = function() {
    clearCtxAx();
    if (this.isActive) {
        ctxAxCanvas.drawImage(axImg, this.srcX, this.srcY, this.width, this.height,
            this.drawX, this.drawY, this.width, this.height);
    }
}

// Win.prototype.draw = function() {
//     ctxWinCanvas.drawImage(winImg, this.srcX, this.srcY, this.width, this.height,
//         this.drawX, this.drawY, this.width, this.height);
// }

// GameOver.prototype.draw = function() {
//     ctxGameOverCanvas.drawImage(gameOverImg, this.srcX, this.srcY, this.width, this.height,
//         this.drawX, this.drawY, this.width, this.height);
// }


Bear.prototype.update = function() {
    // Сравнить координаты медведя и игрока и вычислить новые относительно игрока:
    // if (this.drawX < player.drawX) {
    //   this.drawX += 0.5 * this.speed;
    // } else {
    //   this.drawX -= 0.5 * this.speed;
    // }
    this.drawX = player.drawX - 0.6 * player.width - player.health;
    
    // this.speed = player.speed * 0.9;

    if (this.drawY < player.drawY) {
        this.drawY += 0.5 * this.speed;
    } else {
        this.drawY -= 0.5 * this.speed;
    }
    // this.drawY = player.drawY;
}

Ax.prototype.update = function () {
    if (this.isActive) {
        this.drawX -= this.speed;
        if (this.drawX + this.width < 0) {
            // this.destroy();
            this.isActive = false;
            this.timer = this.timerValue;
            this.drawX = this.startPosition;
            this.drawY = this.randomPosition;
            // ax.draw(); не работает?!
        }
    }
}

Tree.prototype.draw = function() {
    // clearCtxTree(); // удаление предыдущих кадров (изображений) при движении
    // ctxMap. - отрисовка объекта на карте
    // ctxMap.drawImage(playerImg, this.srcX, this.srcY, this.width, this.height, // размер c ajust_size (mac)
    //     this.drawX, this.drawY, this.width, this.height);
    // так как объект должен будет двигаться по сцене, его нужно отрисовать на другом канвасе
    if (collision === false) {
        ctxTreeCanvas.drawImage(treeImg, this.srcX, this.srcY, this.width, this.height,
        this.drawX, this.drawY, this.width, this.height);
    }
    else {
        ctxTreeCanvas.drawImage(bearImg2, this.srcX, this.srcY, this.width, this.height,
        this.drawX, this.drawY, this.width, this.height);
    }
}

Tree.prototype.update = function() {
    // this.drawX -= 5; // ~ скорость объекта ("-" справа-налево)
    this.drawX -= this.speed;
    if(this.drawX + this.width < 0) { // т.е. если объект вышел за рамки канваса с левой стороны (+ this.width - нужно прибавить ширину объекта, чтоб он полностью вышел за пределы канваса)
        // возвращаем его на начальную позицию со случайными координатами X и Y
        // this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth; 
        // this.drawY = Math.floor(Math.random() * gameHeight);
        // сейчас функция, которая не удаляет сам объект, а скорее переносит его в определенную точку на канвасе (не удаляет с массива!)
        this.destroy(); // вместо верхних строк - теперь функция удаляется объекты из массива
    }
}

// функция, которая будет удалять объект с массива
Tree.prototype.destroy = function() {
    // console.log(`- destroying ${trees.indexOf(this)} of ${trees.length}`)
    trees.splice(trees.indexOf(this),1);// splice - встроенный в js метод (функция), который позволяет удалять любую переменную из массива
    // первый параметр splice - это та позиция, с которой начинается удаление
    // второй параметр - количество элементов, которое нужно удалить из массива
    // конструкция с indexOf(this) позволяет удалять именно тот объект, который уходит со сцены
}
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// замена объекта tree
// Tree.prototype.change = function() {
//     trees.splice(trees.indexOf(this),1[player.draw]);
// }

Ax.prototype.destroy = function() {
    axCanvas.remove();
}

// функция, отвечающая за нажатие клавиши клавиатуры
function checkKeyDown(e){ // переменная e отвечает за: какая клавиша была нажата
    var keyID = e.keyCode || e.which; // переменная поддержки старых браузеров
    var keyChar = String.fromCharCode(keyID); // преобразуем значение в стринг для облечения оперирования данными

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

// функция, отвечающая за отпускание клавиши клавиатуры
function checkKeyUp(e){
    var keyID = e.keyCode || e.which;
    var keyChar = String.fromCharCode(keyID);

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


function clearCtxBear() {
    ctxBearCanvas.clearRect(0, 0, gameWidth, gameHeight);
}

function clearCtxAx() {
    ctxAxCanvas.clearRect(0, 0, gameWidth, gameHeight);
}

function clearCtxTree() {
    ctxTreeCanvas.clearRect(0, 0, gameWidth, gameHeight);
}

// ~ функция обновления информации
function updateStats() {
    ctxStatsCanvas.clearRect(0, 0, gameWidth, gameHeight);
    ctxStatsCanvas.fillText("Health: " + player.health + "%", 30, 40);
    ctxStatsCanvas.fillText("Time: " + ax.timer/1000 + "s", 200, 40);
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

function drawRectangle() {
    ctxMap.fillStyle = '#3D3D3D';
    ctxMap.fillRect(10, 10, 100, 100); // координаты, ширина и высота прямоугольника
}

function clearRectangle() {
    ctxMap.clearRect(0, 0, gameWidth, gameHeight);
}

function checkOtherTrees (tree) {
    // Сортировка trees по Y позиции:
    var sorted = trees.sort(function (a, b) {
        return a.drawY >= b.drawY;
    });
    // Если текущий tree накладывается на любого из существующих противников, то перемещаем его вниз
    for (var i = 0; i < sorted.length; i++) {
        if ((tree.drawY >= sorted[i].drawY && tree.drawY <= sorted[i].drawY + tree.height)
          || (tree.drawY <= sorted[i].drawY && tree.drawY >= sorted[i].drawY - tree.height)) {
            tree.drawY = sorted[i].drawY + tree.height + 1
        }
    }
}