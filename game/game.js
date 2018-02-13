window.onload = init; // метод, который будет вызываться при запуске игры 

var map; // переменная для карты map
var ctxMap; // переменная, через которую взаимодействуем с полотном игры

var playerCanvas;
var ctxPlayerCanvas; // context Player

var enemyCanvas;
var ctxEnemyCanvas; // context Enemy


var drawButton; // переменная для кнопки draw
var clearButton; // переменная для кнопки clear

var gameWidth = 1024;
var gameHeight = 768;

var background = new Image();
background.src = 'images/forest.jpg';

var folke = new Image();
folke.src = 'images/folke.jpg';

var player;
var enemy;
// var enemy2;

var isPlaying; // переменная типа boolean (играем или нет?!)

// поддержка браузеров - переменная отвечает за обновление игры (в ней находится основной цикл игры)
var requestAnimationFrame = window.requestAnimationFrame || // unknown
                            window.webkitRequestAnimationFrame || // chrome, safari, yandex...
                            window.mozRequestAnimationFrame || // mozilla
                            window.oRequestAnimationFrame || // opera
                            window.msRequestAnimationFrame; // IE

// функция инициализации переменных
function init() {
    console.log('init');
    map = document.getElementById('map'); // инициализация переменных в функции init
    ctxMap = map.getContext('2d');
    
    playerCanvas = document.getElementById('player'); // переменная, отвечающая за канвас долдна иметь в себе тег
    ctxPlayerCanvas = playerCanvas.getContext('2d');

    enemyCanvas = document.getElementById('enemy');
    ctxEnemyCanvas = enemyCanvas.getContext('2d');

    map.width = gameWidth;
    map.height = gameHeight;
    playerCanvas.width = gameWidth;
    playerCanvas.height = gameHeight;
    enemyCanvas.width = gameWidth;
    enemyCanvas.height = gameHeight;
    

    drawButton = document.getElementById('drawButton');
    clearButton = document.getElementById('clearButton');

    drawButton.addEventListener('click', drawRectangle, false);
    // jQuery --> drawButton.click(drawRectangle)
    // drawRect.onclick = 
    clearButton.addEventListener('click', clearRectangle, false);

    player = new Player();
    enemy = new Enemy();
    // enemy2 = new Enemy();

    drawBackground();
    // drawPlayer();
    // draw();

    startLoop();

    document.addEventListener("keydown", checkKeyDown, false);
    document.addEventListener("keyup", checkKeyUp, false);
}

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
}

function stopLoop() {
    isPlaying = false;
}

// draw() и update() взаимодлействуют с основным циклом игры и выполняются последовательно
function draw() {
    player.draw();
    enemy.draw();
    // enemy2.draw();
}

function update() {
    console.log('loop');
    player.update();
    enemy.update();
}

// Объекты:
function Player() { // this --> Player
    // часть, связанная с рисованием
    this.srcX = 0; // переменные, которые используются для задания координат в графическом файле
    this.srcY = 0;
    this.drawX = 0; // рисование объекта
    this.drawY = 0;
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

function Enemy() {
    this.srcX = 0;
    this.srcY = 0;
    this.drawX = Math.floor(Math.random() * 10) + gameWidth; // появление объекта за правой частью канваса на случайном расстоянии
    // gameWidth=1024 - появление объекта по координате X
    // Math.random() = от 0 (включая) до 1 (не включая), Math.floor - округление
    this.drawY = Math.floor(Math.random() * gameHeight);
    this.width = 100;
    this.height = 100;

    this.speed = 10;
}

Player.prototype.draw = function() {
    clearCtxPlayer(); // удаление предыдущих кадров (изображений) при движении
    ctxPlayerCanvas.drawImage(folke, this.srcX, this.srcY, this.width, this.height, // размер c ajust_size (mac)
        this.drawX, this.drawY, this.width, this.height);
}

// функция для перемещения объекта-игрока по сцене (взаимодейтсвует с координатами объекта по сцене drawX и drawY)
Player.prototype.update = function() {
    // this.drawX += 1;
    // this.drawY += 3; // движение по вертикали
    this.chooseDirection();
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

Enemy.prototype.draw = function() {
    clearCtxEnemy(); // удаление предыдущих кадров (изображений) при движении
    // ctxMap. - отрисовка объекта на карте
    // ctxMap.drawImage(folke, this.srcX, this.srcY, this.width, this.height, // размер c ajust_size (mac)
    //     this.drawX, this.drawY, this.width, this.height);
    // так как объект должен будет двигаться по сцене, его нужно отрисовать на другом канвасе
    ctxEnemyCanvas.drawImage(folke, this.srcX, this.srcY, this.width, this.height,
        this.drawX, this.drawY, this.width, this.height);
}

Enemy.prototype.update = function() {
    this.drawX -= 1;
}

// функция, отвечающая за нажатие клавиши клавиатуры
function checkKeyDown(e){ // переменная e отвечает за: какая клавиша была нажата
    var keyID = e.keyCode || e.which; // переменная поддержски старых браузеров
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

function clearCtxEnemy() {
    ctxEnemyCanvas.clearRect(0, 0, gameWidth, gameHeight);
}

function drawRectangle() {
    ctxMap.fillStyle = '#3D3D3D';
    ctxMap.fillRect(10, 10, 100, 100); // координаты, ширина и высота прямоугольника
}

function clearRectangle() {
    ctxMap.clearRect(0, 0, 1024, 768);
}

function drawBackground() {
    ctxMap.drawImage(background, 0, 0, 1024, 768, // размер именно картинки
        0, 0, gameWidth, gameHeight); // размер на экране
}

// function drawPlayer() {
//     ctxMap.drawImage(folke, 0, 0, 150, 175, // размер c ajust_size (mac)
//         0, 0, 150, 175);
// }