// Функция-конструктор класса (объекта) Ax:
// Чтобы создать экземпляр класса: var ax = new Ax()
function Ax(gameHeight, gameWidth) {
    // Инициализируем свойства экземпляра:

    // часть, связанная с рисованием
    this.startPosition = 1200;
    this.randomPosition = Math.floor(Math.random() * gameHeight);
    this.timerValue = 60000 // время появления топора - изменить
    this.srcX = 0;
    this.srcY = 0;
    this.drawX = this.startPosition;
    this.drawY = this.randomPosition;
    this.width = 120; 
    this.height = 85;
    this.speed = 5;

    // Добавляем свойства игры для доступа из методов Ax:
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;

    // Когда переменная isActive равна false, то топор не двигается.
    this.isActive = false;
    this.timer = this.timerValue;
    
    // Картинки:
    this.axImg = new Image();
    this.axImg.src = 'images/ax.png';

    // setinterval запускает функцию через 1000 мс постоянно
    setInterval(function(){
        if (ax.timer > 0) {
            ax.timer -= 1000;
        } else {
            ax.isActive = true;
        }
    }, 1000);

    this.init();
}

// Объявляем методы класса:
Ax.prototype.init = function () {
    this.axCanvas = document.getElementById('ax');
    this.ctxAxCanvas = this.axCanvas.getContext('2d');

    this.axCanvas.width = gameWidth;
    this.axCanvas.height = gameHeight;
}

Ax.prototype.clearCtxAx = function() {
    this.ctxAxCanvas.clearRect(0, 0, this.gameWidth, this.gameHeight);
}

Ax.prototype.draw = function() {
    this.clearCtxAx();
    if (this.isActive) {
        this.ctxAxCanvas.drawImage(this.axImg, this.srcX, this.srcY, this.width, this.height,
            this.drawX, this.drawY, this.width, this.height);
    }
}

Ax.prototype.update = function (bear, player, trees) {
    if (this.isActive) {
        this.drawX -= this.speed;
        // if (this.drawX + this.width < 0) {
        //     // this.destroy();
        //     this.isActive = false;
        //     this.timer = this.timerValue;
        //     this.drawX = this.startPosition;
        //     this.drawY = this.randomPosition;
        // }
    }
}

Ax.prototype.destroy = function() {
    this.axCanvas.remove();
}