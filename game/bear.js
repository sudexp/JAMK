// Функция-конструктор класса (объекта) Bear:
// Чтобы создать экземпляр класса: var bear = new Bear()
function Bear(gameHeight, gameWidth, player) {
    // Инициализируем свойства экземпляра:

    // часть, связанная с рисованием:
    this.srcX = 0; 
    this.srcY = 0;
    this.drawX = 0;
    this.drawY = Math.floor(Math.random() * gameHeight);
    this.width = 110; 
    this.height = 82;
    this.speed = player.speed * 0.9;

    // Добавляем свойства игры для доступа из методов Bear:
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;

    // Картинки и переключение между ними:
    this.bearImg1 = new Image();
    this.bearImg1.src = 'images/bear1.png';
    this.bearImg2 = new Image();
    this.bearImg2.src = 'images/bear2.png';
    this.bearImgNum = 1; // значение либо 1, либо 2
    this.countBear = 1; // счетчик, который увеличивается каждый раз при вызове функции draw (loop вызывает draw)

    this.init();
}

// Объявляем методы класса:
Bear.prototype.init = function () {
    this.bearCanvas = document.getElementById('bear');
    this.ctxBearCanvas = this.bearCanvas.getContext('2d');

    this.bearCanvas.width = this.gameWidth;
    this.bearCanvas.height = this.gameHeight;
}

// очищаем прямоугольную область в координатах 0, 0, gameWidth, gameHeight
// метод вызывается перед передвижением изображения в Bear.prototype.draw
Bear.prototype.clearCtxBear = function() {
    this.ctxBearCanvas.clearRect(0, 0, this.gameWidth, this.gameHeight);
}

Bear.prototype.draw = function() {
    this.clearCtxBear();
    var bearImgCurrent = (this.bearImgNum === 1 ? this.bearImg1 : this.bearImg2);
    this.ctxBearCanvas.drawImage(bearImgCurrent, this.srcX, this.srcY, this.width, this.height,
        this.drawX, this.drawY, this.width, this.height);
    if (this.countBear % 15 === 0) {
        this.bearImgNum = (this.bearImgNum === 1 ? 2 : 1);
    }
    this.countBear++;
}

Bear.prototype.update = function(player, trees) {
    // Сравнить координаты медведя и игрока и вычислить новые относительно игрока:
    // if (this.drawX < player.drawX) {
    //   this.drawX += 0.5 * this.speed;
    // } else {
    //   this.drawX -= 0.5 * this.speed;
    // }
    this.drawX = player.drawX - 0.7 * player.width - player.health;
    
    // this.speed = player.speed * 0.9;

    if (this.drawY < player.drawY) {
        this.drawY += Math.floor(0.5 * this.speed);
    }
    else if (this.drawY > player.drawY) {
        this.drawY -= Math.ceil(0.5 * this.speed);
    }
    else {

    }
    // this.drawY = Math.round(this.drawY - Math.round(0.5 * this.speed));
    // this.drawY += Math.floor(0.5 * this.speed);
    // this.drawY.toFixed(0);
    // this.drawY^0;
    // this.drawY = player.drawY;

    // Реализация механизма перекрытия медведя с деревьями:
    var overlapTree; // Переменная, отвечающая за перекрытие, в которое положим дерево, с которым произойдет перекрытие:

    for(var i = 0; i < trees.length; i++) {
        var tree = trees[i];
        // Проверка на перекрытие
        if (
            (this.drawY + this.height >= tree.drawY && this.drawY <= tree.drawY + tree.height) &&
            (this.drawX + this.width >= tree.drawX && this.drawX <= tree.drawX + tree.width)
        ) {
            // Фиксируем факт перекрытия и запоминаем дерево, с которым медведь перекрылся:
            overlapTree = tree;
        }
    }
    if (overlapTree) {
        if (this.drawY + this.height < overlapTree.drawY + overlapTree.height) {
            // Tree.treeCanvas.style.zIndex = 2;
            this.bearCanvas.style.zIndex = 0;
        }
        else if (this.drawY + this.height > overlapTree.drawY + overlapTree.height) {
            // Tree.treeCanvas.style.zIndex = 0;
            this.bearCanvas.style.zIndex = 3;
        }
    }
    else this.bearCanvas.style.zIndex = 3;
}
