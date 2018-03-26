// Функция-конструктор класса (объекта) Info:
// Чтобы создать экземпляр класса: var info = new Info()
function Info(gameHeight, gameWidth) {
    // Инициализируем свойства экземпляра:

    // часть, связанная с рисованием
    this.srcX = 0;
    this.srcY = 0;
    this.drawX = 0;
    this.drawY = 0;
    this.width = 1280; 
    this.height = 720;
    this.speed = 0;

    // Добавляем свойства игры для доступа из методов Info:
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;

    // Картинки:
    this.infoImg = new Image();
    this.infoImg.src = 'images/info.png';
    
    this.init();
}
    
// Объявляем методы класса:
Info.prototype.init = function () {
    this.infoCanvas = document.getElementById('info');
    this.ctxInfoCanvas = this.infoCanvas.getContext('2d');

    this.infoCanvas.width = gameWidth;
    this.infoCanvas.height = gameHeight;
}

Info.prototype.clearCtxInfo = function() {
    this.ctxInfoCanvas.clearRect(0, 0, this.gameWidth, this.gameHeight);
}

Info.prototype.draw = function() {
    this.clearCtxInfo();
    this.ctxInfoCanvas.drawImage(this.infoImg, this.srcX, this.srcY, this.width, this.height,
        this.drawX, this.drawY, this.width, this.height);
}

Info.prototype.update = function () {
    this.drawX -= this.speed;
}