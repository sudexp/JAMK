// Функция-конструктор класса (объекта) Player:
// Чтобы создать экземпляр класса: var player = new Player()
function Player(gameHeight, gameWidth) { // this --> Player
    // Инициализируем свойства экземпляра:
    this.health = 100;  // переменная, отвечающая за здоровье игрока
    this.win = false;

    // часть, связанная с рисованием:
    this.srcX = 0; // переменные, которые используются для задания координат в графическом файле
    this.srcY = 0;
    this.drawX = 250; // рисование объекта
    this.drawY = Math.floor(Math.random() * gameHeight);
    this.width = 75; // проверить после смены рисунка
    this.height = 77;
    // часть, связанная с апдэйтом
    this.speed = 5;
    // для управления с клавиатуры - переменные, отвечающие за перемещение объекта
    // важно установить их значения на false, так как объект не должен перемещаться без воздействия на него
    this.isUp = false;
    this.isDown = false;
    this.isRight = false;
    this.isLeft = false;

    // Добавляем свойства игры для доступа из методов Player:
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;

    // Картинки и переключение между ними:
    this.playerImg1 = new Image();
    this.playerImg1.src = 'images/folke1.png';
    this.playerImg2 = new Image();
    this.playerImg2.src = 'images/folke2.png';
    this.playerImgNum = 1; // значение либо 1, либо 2
    this.countPlayer = 1; // счетчик, который увеличивается каждый раз при вызове функции draw (loop вызывает draw)

    this.init();
}

// Объявляем методы класса:
Player.prototype.init = function () {
    this.playerCanvas = document.getElementById('player'); // переменная, отвечающая за канвас должна иметь в себе тег
    this.ctxPlayerCanvas = this.playerCanvas.getContext('2d');

    this.playerCanvas.width = this.gameWidth;
    this.playerCanvas.height = this.gameHeight;
}

// очищаем прямоугольную область в координатах 0, 0, gameWidth, gameHeight
// метод вызывается перед передвижением изображения в Player.prototype.draw
Player.prototype.clearCtxPlayer = function() {
    this.ctxPlayerCanvas.clearRect(0, 0, this.gameWidth, this.gameHeight);
}

// эта функция вызывается каждый раз из цикла loop
Player.prototype.draw = function() {
    this.clearCtxPlayer(); // удаление предыдущих кадров (изображений) при движении
    var playerImgCurrent = (this.playerImgNum === 1 ? this.playerImg1 : this.playerImg2); // до знака вопроса условие, если это условие true, то подставляется первое значение (после "?""), если false, то второе (после ":")
    this.ctxPlayerCanvas.drawImage(playerImgCurrent, this.srcX, this.srcY, this.width, this.height, // размер c ajust_size (mac)
        this.drawX, this.drawY, this.width, this.height);
    if (this.countPlayer % 10 === 0) {
        this.playerImgNum = (this.playerImgNum === 1 ? 2 : 1); // переключает между 1 и 2 (если 1 то 2, если не один то 1)
    }
    this.countPlayer++;
}

// функция для перемещения объекта-игрока по сцене (взаимодейтсвует с координатами объекта по сцене drawX и drawY)
Player.prototype.update = function(ax, trees) {
    // this.drawX += 1;
    // this.drawY += 3; // движение по вертикали
    this.chooseDirection();
    if(this.drawX < 0) { // если координата X объекта меньше нуля (объект выходит за рамки канваса с левой стороны)
        this.drawX = 0; // устанавливаем эту координату равной нулю (объект после этого не переместить влево за канвас)
    }
    // аналогично вышеизложенному для других координат:
    if(this.drawX > this.gameWidth - this.width) {
        this.drawX = this.gameWidth - this.width; // необходимо вычесть, так как начало координат объекта в левой верхней точке
    }
    if(this.drawY < 0) {
        this.drawY = 0;
    }
    if(this.drawY > this.gameHeight - this.height) {
        this.drawY = this.gameHeight - this.height; // необходимо вычесть, так как начало координат объекта в левой верхней точке
    }
    // ограничение объекта по перемещению вперед
    if(this.drawX > this.gameWidth - this.width - 900) {
        this.drawX = this.gameWidth - this.width - 900;
    }

    // ограничение объекта по перемещению назад
    if(this.drawX < this.gameWidth - this.width - 1000) {
        this.drawX = this.gameWidth - this.width - 1000;
    }

    // необходимо пробежаться по элементам массива, чтобы иметь возможность сталкиваться со всеми объектами, а не с одним
    for(var i = 0; i < trees.length; i++) {
        var tree = trees[i];
        // Проверяем только деревья, с которыми еще не столкнулись:
        if (tree.collision === false){
            if (
                (this.drawY + this.height >= tree.drawY && this.drawY <= tree.drawY + tree.height) &&
                (this.drawX + this.width >= tree.drawX && this.drawX <= tree.drawX + tree.width)
            ) {
                this.health -= 10;
                tree.collision = true;
                // Удалить tree со сцены:
                // tree.destroy();
            }

            if (this.drawX + this.width >= ax.drawX &&  // игрок касается топора слева
                this.drawY + this.height >= ax.drawY && // игрок касается топора сверху
                this.drawX <= ax.drawX + ax.width &&    // игрок касается топора справа
                this.drawY <= ax.drawY + ax.height) {   // игрок касается топора снизу
                // win.draw();
                document.getElementById('gameName').innerHTML = 'Congratulations! You win!';
                this.win = true;
            }
        }
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