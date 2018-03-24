// Функция-конструктор класса (объекта) Ax:
// Чтобы создать экземпляр класса: var ax = new Ax()
function Ax(gameHeight, gameWidth) {
    // Инициализируем свойства экземпляра:

    // часть, связанная с рисованием
    this.startPosition = 1200;
    this.randomPosition = roundToFive(Math.floor(Math.random() * (gameHeight-75)));
    this.timerValue = 5000 // время появления топора - изменить
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

Ax.prototype.update = function (trees) {
    if (this.isActive) {
        this.drawX -= this.speed;
        Tree.prototype.destroy();
        // if (this.drawX + this.width < 0) {
        //     // this.destroy();
        //     this.isActive = false;
        //     this.timer = this.timerValue;
        //     this.drawX = this.startPosition;
        //     this.drawY = this.randomPosition;
        // }
        // Реализация механизма перекрытия топора с деревьями:
        var overlapTree; // Переменная, отвечающая за перекрытие, в которое положим дерево, с которым произойдет перекрытие:
        
        for(var i = 0; i < trees.length; i++) {
            var tree = trees[i];
            // Проверка на перекрытие
            if (
                (this.drawY + this.height >= tree.drawY && this.drawY <= tree.drawY + tree.height) &&
                (this.drawX + this.width >= tree.drawX && this.drawX <= tree.drawX + tree.width)
            ) {
                // Фиксируем факт перекрытия и запоминаем дерево, с которым топор перекрылся:
                overlapTree = tree;
            }
        }
        // window.bearOverlapTree = overlapTree;
        if (overlapTree) {
            if (this.drawY + this.height < overlapTree.drawY + overlapTree.height) {
                // Tree.treeCanvas.style.zIndex = 2;
                this.axCanvas.style.zIndex = 0;
            }
            else if (this.drawY + this.height > overlapTree.drawY + overlapTree.height) {
                // Tree.treeCanvas.style.zIndex = 0;
                this.axCanvas.style.zIndex = 3;
            }
        }
        else {
            this.axCanvas.style.zIndex = 3;
        }
    }
}

Ax.prototype.destroy = function() {
    this.axCanvas.remove();
}