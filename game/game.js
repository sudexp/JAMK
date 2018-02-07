window.onload = init; // метод, который будет вызываться при запуске игры 

var map; // переменная для карты map
var ctxMap; // переменная, через которую взаимодействуем с полотном игры

var pl;
var ctxPl;

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

// поддержка браузеров - переменная отвечает за обновление игры
var requestAnimationFrame = window.requestAnimationFrame || // unknown
                            window.webkitRequestAnimationFrame || // chrome, safari, yandex...
                            window.mozRequestAnimationFrame || // mozilla
                            window.oRequestAnimationFrame || // opera
                            window.msRequestAnimationFrame; // IE

function init() {
    console.log('init');
    map = document.getElementById('map'); // инициализация переменных в функции init
    ctxMap = map.getContext('2d');
    playerCanvas = document.getElementById('player');
    ctxPlayerCanvas = playerCanvas.getContext('2d');

    map.width = gameWidth;
    map.height = gameHeight;
    playerCanvas.width = gameWidth;
    playerCanvas.height = gameHeight;

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

function draw() {
    player.draw();
    enemy.draw();
    // enemy2.draw();
}

function update() {
    console.log('loop');
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
}

function Enemy() {
    this.srcX = 0;
    this.srcY = 100;
    this.drawX = 900;
    this.drawY = 100;
    this.width = 100;
    this.height = 100;

    this.speed = 10;
}

Player.prototype.draw = function() {
    ctxMap.drawImage(folke, this.srcX, this.srcY, this.width, this.height, // размер c ajust_size (mac)
        this.drawX, this.drawY, this.width, this.height);
}

Enemy.prototype.draw = function() {
    ctxMap.drawImage(folke, this.srcX, this.srcY, this.width, this.height, // размер c ajust_size (mac)
        this.drawX, this.drawY, this.width, this.height);
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