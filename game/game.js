window.onload = init; // метод, который будет вызываться при запуске игры 

var map; // переменная для карты map
var ctxMap; // переменная, через которую взаимодействуем с полотном игры

var drawBtn; // переменная для кнопки draw
var clearBtn; // переменная для кнопки clear

var gameWidth = 1024;
var gameHeight = 768;

var background = new Image();
background.src = 'forest.jpg';

// инициализация переменных в функции init
function init() {
    map = document.getElementById('map');
    ctxMap = map.getContext('2d');

    map.width = gameWidth;
    map.height = gameHeight;

    drawBtn = document.getElementById('drawBtn');
    clearBtn = document.getElementById('clearBtn');

    drawBtn.addEventListener('click', drawRect, false);
    // drawRect.onclick = 
    clearBtn.addEventListener('click', clearRect, false);

    drawBg();
}

function drawRect() {
    ctxMap.fillStyle = '#3D3D3D';
    ctxMap.fillRect(10, 10, 100, 100); // координаты, ширина и высота прямоугольника
}

function clearRect() {
    ctxMap.clearRect(0, 0, 1024, 768);
}

function drawBg() {
    ctxMap.drawImage(background, 0, 0, 1024, 768, // размер именно картинки
        0, 0, gameWidth, gameHeight); // размер на экране
}