window.onload = init; // метод, который будет вызываться при запуске игры 

var map; // переменная для карты map
var ctxMap; // переменная, через которую взаимодействуем с полотном игры

var player;
var ctxPlayer;

var drawButton; // переменная для кнопки draw
var clearButton; // переменная для кнопки clear

var gameWidth = 1024;
var gameHeight = 768;

var background = new Image();
background.src = 'images/forest.jpg';

var folke = new Image();
folke.src = 'images/folke.jpg';

function init() {
    map = document.getElementById('map'); // инициализация переменных в функции init
    ctxMap = map.getContext('2d');
    player = document.getElementById('player');
    ctxPlayer = player.getContext('2d');


    map.width = gameWidth;
    map.height = gameHeight;
    player.width = gameWidth;
    player.height = gameHeight;

    drawButton = document.getElementById('drawButton');
    clearButton = document.getElementById('clearButton');

    drawButton.addEventListener('click', drawRectangle, false);
    // drawRect.onclick = 
    clearButton.addEventListener('click', clearRectangle, false);

    drawBackground();
    drawPlayer();
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

function drawPlayer() {
    ctxMap.drawImage(folke, 0, 0, 150, 175, // размер c ajust_size (mac)
        0, 0, 150, 175);
}