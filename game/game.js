window.onload = init; // метод, который будет вызываться при запуске игры 

var map; // переменная для карты map
var ctxMap; // переменная, через которую взаимодействуем с полотном игры

var playerCanvas;
var ctxPlayerCanvas; // context Player

var enemyCanvas;
var ctxEnemyCanvas; // context Enemy

var statsCanvas;
var ctxStatsCanvas;

var drawButton; // переменная для кнопки draw
var clearButton; // переменная для кнопки clear

var gameWidth = 1024;
var gameHeight = 768;

var background = new Image();
background.src = 'images/forest.jpg';

var folke = new Image();
folke.src = 'images/folke.jpg';

var player;
var enemies = []; // массив переменных enemy
// var enemy;
// var enemy2;

var isPlaying; // переменная типа boolean (играем или нет?!)

// переменные для создания объектов-врагов
var createInterval; // интервал создания объектов
var createTime = 5000; // время, через которое вызывается функция startCreatingEnemies() (задается в милисекундах, 1с = 1000мс)
var createAmount = 7; // количество объектов, которое будет появляться, когда проходит определенное время

// поддержка браузеров - переменная отвечает за обновление игры (в ней находится основной цикл игры)
var requestAnimationFrame = window.requestAnimationFrame || // unknown
                            window.webkitRequestAnimationFrame || // chrome, safari, yandex...
                            window.mozRequestAnimationFrame || // mozilla
                            window.oRequestAnimationFrame || // opera
                            window.msRequestAnimationFrame; // IE

// функция инициализации переменных / вызова функций
function init() {
    console.log('init');
    map = document.getElementById('map'); // инициализация переменных в функции init
    ctxMap = map.getContext('2d');
    
    playerCanvas = document.getElementById('player'); // переменная, отвечающая за канвас долдна иметь в себе тег
    ctxPlayerCanvas = playerCanvas.getContext('2d');

    enemyCanvas = document.getElementById('enemy');
    ctxEnemyCanvas = enemyCanvas.getContext('2d');

    statsCanvas = document.getElementById('stats');
    ctxStatsCanvas = statsCanvas.getContext('2d');

    map.width = gameWidth;
    map.height = gameHeight;
    playerCanvas.width = gameWidth;
    playerCanvas.height = gameHeight;
    enemyCanvas.width = gameWidth;
    enemyCanvas.height = gameHeight;
    statsCanvas.width = gameWidth;
    statsCanvas.height = gameHeight;
    
    ctxStatsCanvas.fillStyle = '#3d3d3d'; // задаем стиль для отображения надписей с помощью встроенной переменной fillStyle
    ctxStatsCanvas.font = 'bold 16px Arial'; // задаем шрифт надписей с помощью встроенной переменной font

    drawButton = document.getElementById('drawButton');
    clearButton = document.getElementById('clearButton');

    drawButton.addEventListener('click', drawRectangle, false);
    // jQuery --> drawButton.click(drawRectangle)
    // drawRect.onclick = 
    clearButton.addEventListener('click', clearRectangle, false);

    player = new Player();
    // enemy = new Enemy();
    // enemy2 = new Enemy();

    drawBackground();
    // drawPlayer();
    // draw();

    startLoop();
    updateStats();

    document.addEventListener("keydown", checkKeyDown, false);
    document.addEventListener("keyup", checkKeyUp, false);
}

// функция создания обхектов enemy (не инициализируется в init() - вызывается во время того, как цикл игры продолжается)
// объекты содержатся на канвасе Emeny
function createEnemy(count) {
    for(var i = 0; i < count; i++) {
        enemies[i] = new Enemy(); // для каждого элемента массива enemies[] создается новый объект Enemy
    }
}

function startCreatingEnemies() {
    stopCreatingEnemies(); // вызывается для того, чтобы удалить все предыдущие объекты со сцены каждые 5с (createTime) 
                            // иначе будет создано слишком много объектов --> сказывается на производительности
    createInterval = setInterval(function(){createEnemy(createAmount)}, createTime); // инициализация переменной createInterval с помощью встроенной функции js 
    // первый параметр (аргумент) setInterval - это функция, которая должна вызываться через определенный отрезок времени
    // createEnemy - \то та самая функция, которую нужно вызвать, чтобы создать определенное количество объектов
    // второй парамент createAmount - время , через которое будет все это вызываться
}

function stopCreatingEnemies() {
    clearInterval(createInterval); // очищаем интервал - с помощью этой функции удаляются все объекты на сцене 
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
    startCreatingEnemies(); // вызываем функцию создания врагов (можно вызвать в init или в цикле игры)
}

function stopLoop() {
    isPlaying = false;
}

// draw() и update() взаимодлействуют с основным циклом игры и выполняются последовательно
function draw() {
    player.draw();

    clearCtxEnemy();
    for(var i = 0; i < enemies.length; i++) { // .length передает вес массива, т.е. все переменные, которые содержатся в нем
        enemies[i].draw(); // для каждого элемента массива enemies[] создается новый объект Enemy
    }
    // enemy.draw();
    // enemy2.draw();
}

function update() {
    console.log('loop');
    player.update();

    // по аналогии с draw():
    for(var i = 0; i < enemies.length; i++) {
        enemies[i].update();
    }
    // enemy.update();
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
    this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth; // появление объекта за правой частью канваса (ось X) на случайном расстоянии
    // gameWidth=1024 - появление объекта по координате X
    // Math.random() = от 0 (включая) до 1 (не включая), Math.floor - округление
    this.drawY = Math.floor(Math.random() * gameHeight); // появление объекта по оси Y на случайной позиции
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
    // clearCtxEnemy(); // удаление предыдущих кадров (изображений) при движении
    // ctxMap. - отрисовка объекта на карте
    // ctxMap.drawImage(folke, this.srcX, this.srcY, this.width, this.height, // размер c ajust_size (mac)
    //     this.drawX, this.drawY, this.width, this.height);
    // так как объект должен будет двигаться по сцене, его нужно отрисовать на другом канвасе
    ctxEnemyCanvas.drawImage(folke, this.srcX, this.srcY, this.width, this.height,
        this.drawX, this.drawY, this.width, this.height);
}

Enemy.prototype.update = function() {
    this.drawX -= 5; // ~ скорость объекта ("-" слева-направо)
    if(this.drawX + this.width < 0) { // т.е. если объект вышел за рамки канваса с левой стороны (+ this.width - нужно прибавить ширину объекта, чтоб он полностью вышел за пределы канваса)
        // возвращаем его на начальную позицию со случайными координатами X и Y
        // this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth; 
        // this.drawY = Math.floor(Math.random() * gameHeight);
        // сейчас функция, которая не удаляет сам объект, а скорее переносит его в определенную точку на канвасе (не удаляет с массива!)
        this.destroy(); // вместо верхних строк - теперь функция удаляется объекты из массива
    }
}

// функция, которая будет удалять объект с массива
Enemy.prototype.destroy = function() {
    enemies.splice(enemies.indexOf(this),1);// splice - встроенный в js метод (функция), который позволяет удалять любую переменную из массива
    // первый папаметр splice - это та позиция, с которой начинается удаление
    // второй параметр - количество элементов, которое нужно удалить из массива
    // конструкция с indexOf(this) позволяет удалять именно тот объект, который уходит со сцены
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

// ~ функция обновления информации
function updateStats() {
    ctxStatsCanvas.clearRect(0, 0, gameWidth, gameHeight);
    ctxStatsCanvas.fillText("Folke-test", 30, 30);
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