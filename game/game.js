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

function init() {
    map = document.getElementById('map'); // инициализация переменных в функции init
    ctxMap = map.getContext('2d');
    pl = document.getElementById('player');
    ctxPl = pl.getContext('2d');


    map.width = gameWidth;
    map.height = gameHeight;
    pl.width = gameWidth;
    pl.height = gameHeight;

    drawButton = document.getElementById('drawButton');
    clearButton = document.getElementById('clearButton');

    drawButton.addEventListener('click', drawRectangle, false);
    // drawRect.onclick = 
    clearButton.addEventListener('click', clearRectangle, false);

    player = new Player();

    drawBackground();
    // drawPlayer();
    draw();
}

function drawRectangle() {
    ctxMap.fillStyle = '#3D3D3D';
    ctxMap.fillRectangle(10, 10, 100, 100); // координаты, ширина и высота прямоугольника
}

function clearRectangle() {
    ctxMap.clearRectangle(0, 0, 1024, 768);
}

function drawBackground() {
    ctxMap.drawImage(background, 0, 0, 1024, 768, // размер именно картинки
        0, 0, gameWidth, gameHeight); // размер на экране
}

// function drawPlayer() {
//     ctxMap.drawImage(folke, 0, 0, 150, 175, // размер c ajust_size (mac)
//         0, 0, 150, 175);
// }

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

Player.prototype.draw = function() {
    ctxMap.drawImage(folke, this.srcX, this.srcY, this.width, this.height, // размер c ajust_size (mac)
        this.drawX, this.drawY, this.width, this.height);
}

function draw() {
    player.draw();
}