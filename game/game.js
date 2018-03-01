window.onload = init; // метод, который будет вызываться при запуске игры 
// cобытие window.onload JavaScript запускается после полной загрузки страницы, включая стили, изображения и другие ресурсы.

var map; // переменная для карты map
var ctxMap; // переменная, через которую взаимодействуем с полотном игры

var playerCanvas;
var ctxPlayerCanvas; // context Player

var bearCanvas;
var ctxBearCanvas; // context Bear

var enemyCanvas;
var ctxEnemyCanvas; // context Enemy

var statsCanvas;
var ctxStatsCanvas;

var drawButton; // переменная для кнопки draw
var clearButton; // переменная для кнопки clear

var gameWidth = 1280;
var gameHeight = 720;
// Take the size of the viewport minus the top div with we show mouse coordinates (#gameName):
// var gameHeight = document.documentElement.clientHeight - 34;

var background = new Image(); // переменная, отвечающая за фон
background.src = 'images/forest.png'; // путь к этому изображению

var background1 = new Image(); // 
background1.src = 'images/forest.png'; // 

var playerImg = new Image();
playerImg.src = 'images/folke.jpg';

var bearImg = new Image();
bearImg.src = 'images/bear.jpg';

var player;
var bear;

var enemies = []; // массив переменных enemy
window.enemies = enemies; // to access enemies from console for debugging
// var enemy;
// var enemy2;

var isPlaying; // переменная типа boolean (играем или нет?!)
var health; // переменная, отвечающая за здоровье игрока

// инициализация переменных движения фона по оси Х
var mapX = 0; // первый background должен появляться в левом верхнем углу (мы должны его видеть) 
var map1X = gameWidth; // второй background появится справа от канваса (не будет виден)

// переменные для создания объектов-врагов
var createInterval; // интервал создания объектов
var createTime = 1000; // время, через которое вызывается функция startCreatingEnemies() (задается в милисекундах, 1с = 1000мс)
var createAmount = 8; // количество объектов, которое будет появляться, когда проходит определенное время

// переменные для использования мыши
var mouseX;
var mouseY;
var mouseControl = true;

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
    
    playerCanvas = document.getElementById('player'); // переменная, отвечающая за канвас должна иметь в себе тег
    ctxPlayerCanvas = playerCanvas.getContext('2d');

    bearCanvas = document.getElementById('bear'); // переменная, отвечающая за канвас должна иметь в себе тег
    ctxBearCanvas = bearCanvas.getContext('2d');

    enemyCanvas = document.getElementById('enemy');
    ctxEnemyCanvas = enemyCanvas.getContext('2d');

    statsCanvas = document.getElementById('stats');
    ctxStatsCanvas = statsCanvas.getContext('2d');

    map.width = gameWidth;
    map.height = gameHeight;
    playerCanvas.width = gameWidth;
    playerCanvas.height = gameHeight;
    bearCanvas.width = gameWidth;
    bearCanvas.height = gameHeight;
    enemyCanvas.width = gameWidth;
    enemyCanvas.height = gameHeight;
    statsCanvas.width = gameWidth;
    statsCanvas.height = gameHeight;
    
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

    player = new Player();
    bear = new Bear();
    // enemy = new Enemy();
    // enemy2 = new Enemy();

    // health = 100; // статичное здоровье
    resetHealth();

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
    mouseX = e.pageX - map.offsetLeft; // каждый раз обновляем координату Х, которая будет считавается по оси Х со всей вэб-страцницы (канвас не имеет определенных координат), даже когда мышь за пределами канваса
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

function resetHealth() {
    health = 100;
}

// функция создания объектов enemy (не инициализируется в init() - вызывается во время того, как цикл игры продолжается)
// объекты содержатся на канвасе Enemy
function createEnemy(count) {
    // чтобы иметь количество объектов не более чем в "createAmount"
    var newCount = count - enemies.length;
    for(var i = 0; i < newCount; i++) {
        // каждый раз, когда мы вызываем эту функцию, мы добавляем новые элементы в конец массива enemies
        // (и сохраняем все существующие)
        var newEnemy = new Enemy()
        enemies.push(newEnemy); // для каждого элемента массива enemies[] создается новый объект Enemy
    }
}

function startCreatingEnemies() {
    stopCreatingEnemies(); // вызывается для того, чтобы удалить все предыдущие объекты со сцены каждые 1с (createTime) 
                            // иначе будет создано слишком много объектов --> сказывается на производительности
    createInterval = setInterval(function(){createEnemy(createAmount)}, createTime); // инициализация переменной createInterval с помощью встроенной функции js 
    // первый параметр (аргумент) setInterval - это функция, которая должна вызываться через определенный отрезок времени
    // createEnemy - это та самая функция, которую нужно вызвать, чтобы создать определенное количество объектов
    // второй парамент createAmount - время , через которое будет все это вызываться
}

function stopCreatingEnemies() {
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
    startCreatingEnemies(); // вызываем функцию создания врагов (можно вызвать в init или в цикле игры)
}

function stopLoop() {
    isPlaying = false;
}

// draw() и update() взаимодлействуют с основным циклом игры и выполняются последовательно
function draw() {
    player.draw();
    bear.draw();

    clearCtxEnemy();
    for(var i = 0; i < enemies.length; i++) { // .length передает вес массива, т.е. все переменные, которые содержатся в нем
        enemies[i].draw(); // для каждого элемента массива enemies[] создается новый объект Enemy
    }
    // enemy.draw();
    // enemy2.draw();
}

function update() {
    // console.log('loop');
    moveBackground();
    drawBackground();
    updateStats();
    player.update();
    bear.update();

    // по аналогии с draw():
    for(var i = 0; i < enemies.length; i++) {
        enemies[i].update();
    }
    // enemy.update();
}

 function moveBackground() {
     var vel = 4; // переменнная, отвечающая за скорость двивждения фона
     mapX -= 4;
     map1X -=4;
     if(mapX + gameWidth < 0) { // background при прохождении левой границы кансваса перемещается в правую часть канваса и снова движется влево (иначе фон уйдет с экрана влево за границы канваса (закончится))
        mapX = gameWidth - 5; // вычитаем 5px, чтобы не было видно полос при соединии бэкграундов
     }
     if(map1X + gameWidth < 0) { // аналогично первому фону
        map1X = gameWidth - 5;
     }
 }

// Объекты:
function Player() { // this --> Player
    // часть, связанная с рисованием
    this.srcX = 0; // переменные, которые используются для задания координат в графическом файле
    this.srcY = 0;
    this.drawX = 200; // рисование объекта
    this.drawY = 200;
    this.width = 150; // проверить после смены рисунка
    this.height = 175;
    // часть, связанная с апдэйтом
    this.speed = 5;
    // для управления с клавиатуры - переменные, отвечающие за перемещение объекта
    // важно установить их значения на false, так как объект не должен перемещаться без воздействия на него
    this.isUp = false;
    this.isDown = false;
    this.isRight = false;
    this.isLeft = false;
}

function Bear() { 
    this.srcX = 0; 
    this.srcY = 200;
    this.drawX = 0;
    this.drawY = 0;
    this.width = 150; 
    this.height = 100;
    this.speed = 5;
}

function Enemy() {
    this.srcX = 0;
    this.srcY = 0;
    this.drawX = Math.floor(Math.random() * gameWidth / 2) + gameWidth; // появление объекта за правой частью канваса (ось X) на случайном расстоянии
    // this.drawX = gameWidth;
    // gameWidth=1280 - появление объекта по координате X
    // Math.random() = от 0 (включая) до 1 (не включая), Math.floor - округление
    this.drawY = Math.floor(Math.random() * gameHeight); // появление объекта по оси Y на случайной позиции
    this.width = 100;
    this.height = 100;

    // Коррекция положения, если появляется ниже экрана
    // двойная высота в случае, если друной враг перекрывается настоящим, так что оставляем пространство для него 
    if (this.drawY + this.height > gameHeight) {
        this.drawY = gameHeight - this.height;
    }
    // Коррекция положения, если появляется выше экрана
    if (this.drawY < 67) {
        this.drawY = 67;  // не уверен, что это 67px
    }

    checkOtherEnemies(this)

    this.speed = 5;
    // сделать скорость слечайным образом (5 to 7)
    // this.speed = Math.floor(3 * Math.random()) + 5;

    // console.log(`New enemy: ${this.drawY}`);
}

Player.prototype.draw = function() {
    clearCtxPlayer(); // удаление предыдущих кадров (изображений) при движении
    ctxPlayerCanvas.drawImage(playerImg, this.srcX, this.srcY, this.width, this.height, // размер c ajust_size (mac)
        this.drawX, this.drawY, this.width, this.height);
}

Bear.prototype.draw = function() {
    clearCtxBear();
    ctxBearCanvas.drawImage(bearImg, this.srcX, this.srcY, this.width, this.height,
        this.drawX, this.drawY, this.width, this.height);
}

// функция для перемещения объекта-игрока по сцене (взаимодейтсвует с координатами объекта по сцене drawX и drawY)
Player.prototype.update = function() {
    // this.drawX += 1;
    // this.drawY += 3; // движение по вертикали
    this.chooseDirection();
    if(this.drawX < 0) { // если координата X объекта меньше нуля (объект выходит за рамки канваса с левой стороны)
        this.drawX = 0; // устанавливаем эту координату равной нулю (объект после этого не переместить влево за канвас)
    }
    // аналогично вышеизложенному для других координат:
    if(this.drawX > gameWidth - this.width) {
        this.drawX = gameWidth - this.width; // необходимо вычесть, так как начало координат объекта в левой верхней точке
    } 
    if(this.drawY < 0) {
        this.drawY = 0;
    } 
    if(this.drawY > gameHeight - this.height) {
        this.drawY = gameHeight - this.height; // необходимо вычесть, так как начало координат объекта в левой верхней точке
    }
    // !!! на будущее: чтобы ограничить объект по перемещению вперед
    // if(this.drawX > gameWidth - this.width - 300) {
    //     this.drawX = gameWidth - this.width - 300;
    // }
    if(health <= 0) {
        resetHealth();
    }
    // необходимо пробежаться по элементам массива, чтобы иметь возможность сталкиваться со всеми объектами, а не с одним
    for(var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i]
        if (
            (this.drawY + this.height >= enemy.drawY && this.drawY <= enemy.drawY + enemy.height) &&
            (this.drawX + this.width >= enemy.drawX && this.drawX <= enemy.drawX + enemy.width)
        ) {
          health--;
          // Remove the enemy from the scene:
          enemy.destroy();
        }

        // if (this.drawX >= enemy.drawX && // ограничение игрока слева
        //     this.drawY >= enemy.drawY && // ограничение игрока сверху
        //     this.drawX <= enemy.drawX + enemy.width && // ограничение игрока справа
        //     this.drawY <= enemy.drawY + enemy.height) {// ограничение игрока справа
        //     health--;
        // }
    }        
}

Player.prototype.chooseDirection = function() {
    if(this.isUp) {
        this.drawY -= this.speed; // при перемещении вверх уменьшается координата Y
    }
    if(this.isDown) {
        this.drawY += this.speed;
    }
    if(this.isRight) {
        this.drawX += this.speed;
    }
    if(this.isLeft) {
        this.drawX -= this.speed;
    }
}

Bear.prototype.update = function() {
    this.drawX += this.speed;      
}

Enemy.prototype.draw = function() {
    // clearCtxEnemy(); // удаление предыдущих кадров (изображений) при движении
    // ctxMap. - отрисовка объекта на карте
    // ctxMap.drawImage(playerImg, this.srcX, this.srcY, this.width, this.height, // размер c ajust_size (mac)
    //     this.drawX, this.drawY, this.width, this.height);
    // так как объект должен будет двигаться по сцене, его нужно отрисовать на другом канвасе
    ctxEnemyCanvas.drawImage(playerImg, this.srcX, this.srcY, this.width, this.height,
        this.drawX, this.drawY, this.width, this.height);
}

Enemy.prototype.update = function() {
    // this.drawX -= 5; // ~ скорость объекта ("-" слева-направо)
    this.drawX -= this.speed;
    if(this.drawX + this.width < 10) { // т.е. если объект вышел за рамки канваса с левой стороны (+ this.width - нужно прибавить ширину объекта, чтоб он полностью вышел за пределы канваса)
        // возвращаем его на начальную позицию со случайными координатами X и Y
        // this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth; 
        // this.drawY = Math.floor(Math.random() * gameHeight);
        // сейчас функция, которая не удаляет сам объект, а скорее переносит его в определенную точку на канвасе (не удаляет с массива!)
        this.destroy(); // вместо верхних строк - теперь функция удаляется объекты из массива
    }
}

// функция, которая будет удалять объект с массива
Enemy.prototype.destroy = function() {
    // console.log(`- destroying ${enemies.indexOf(this)} of ${enemies.length}`)
    enemies.splice(enemies.indexOf(this),1);// splice - встроенный в js метод (функция), который позволяет удалять любую переменную из массива
    // первый папаметр splice - это та позиция, с которой начинается удаление
    // второй параметр - количество элементов, которое нужно удалить из массива
    // конструкция с indexOf(this) позволяет удалять именно тот объект, который уходит со сцены
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

// очищаем прямоугольную область в координатах 0, 0, gameWidth, gameHeight
// метод вызывается перед передвижением изображения в Player.prototype.draw
function clearCtxPlayer() {
    ctxPlayerCanvas.clearRect(0, 0, gameWidth, gameHeight);
}

function clearCtxBear() {
    ctxBearCanvas.clearRect(0, 0, gameWidth, gameHeight);
}

function clearCtxEnemy() {
    ctxEnemyCanvas.clearRect(0, 0, gameWidth, gameHeight);
}

// ~ функция обновления информации
function updateStats() {
    ctxStatsCanvas.clearRect(0, 0, gameWidth, gameHeight);
    ctxStatsCanvas.fillText("Heath: " + health, 30, 30);
}

function drawBackground() {
    ctxMap.clearRect(0, 0, gameWidth, gameHeight); // стираем предыдущий кадр, которым было прошлое изображение
    ctxMap.drawImage(background, 0, 0, gameWidth, gameHeight, // размер именно картинки
        mapX, 0, gameWidth, gameHeight); // 0, 0, gameWidth, gameHeight - размер на экране
    ctxMap.drawImage(background1, 0, 0, gameWidth, gameHeight,
        map1X, 0, gameWidth, gameHeight); // mapX (map1X), 0, gameWidth, gameHeight - для того, чтобы была возможность перемещать по Х координате (по Y движение фона не нужно)

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

function checkOtherEnemies (enemy) {
    // Сортировка enemies по Y позиции:
    var sorted = enemies.sort(function (a, b) {
        return a.drawY >= b.drawY;
    });
    // Если текущий enemy накладывается на любого из существующих противников, то перемещаем его вниз
    for (var i = 0; i < sorted.length; i++) {
        if ((enemy.drawY >= sorted[i].drawY && enemy.drawY <= sorted[i].drawY + enemy.height)
          || (enemy.drawY <= sorted[i].drawY && enemy.drawY >= sorted[i].drawY - enemy.height)) {
            enemy.drawY = sorted[i].drawY + enemy.height + 1
        }
    }
}