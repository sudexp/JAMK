// Функция-конструктор класса (объекта) Tree:
// Чтобы создать экземпляр класса: var tree = new Tree()
function Tree(gameHeight, gameWidth) {
    // Инициализируем свойства экземпляра:

    // часть, связанная с рисованием:
    this.srcX = 0;
    this.srcY = 0;
    this.drawX = Math.floor(Math.random() * gameWidth / 2) + gameWidth; // появление объекта за правой частью канваса (ось X) на случайном расстоянии
    // this.drawX = gameWidth;
    // gameWidth=1280 - появление объекта по координате X
    // Math.random() = от 0 (включая) до 1 (не включая), Math.floor - округление
    this.drawY = Math.floor(Math.random() * gameHeight); // появление объекта по оси Y на случайной позиции

    // размеры tree1.png; todo: сделать random!?
    this.width = 94;
    this.height = 148;

    // с учетом размеров падающих деревьев tree.2:
    // this.width = 121;
    // this.height = 148;

    this.collision = false; // флаг-переменная столкновений (у каждого дерева своя)

    // Коррекция положения, если появляется ниже экрана
    // двойная высота в случае, если друной враг перекрывается настоящим, так что оставляем пространство для него 
    if (this.drawY + this.height > gameHeight) {
        this.drawY = gameHeight - this.height;
    }
    // Коррекция положения, если появляется выше экрана
    if (this.drawY < 67) {
        this.drawY = 67;  // не уверен, что это 67px
    }

    checkOtherTrees(this)

    this.speed = 5;
    // сделать скорость слечайным образом (5 to 7)
    // this.speed = Math.floor(3 * Math.random()) + 5;

    // console.log(`New tree: ${this.drawY}`);
}

// Объявляем методы класса:
Tree.prototype.init = function () {
    this.treeCanvas = document.getElementById('trees');
    this.ctxTreeCanvas = this.treeCanvas.getContext('2d');


    this.treeCanvas.width = this.gameWidth;
    this.treeCanvas.height = this.gameHeight;
}

// функция создания объектов tree (не инициализируется в init() - вызывается во время того, как цикл игры продолжается)
// объекты содержатся на канвасе Tree
function createTree(count) {
    // чтобы иметь количество объектов не более чем в "createAmount"
    var newCount = count - trees.length;
    for(var i = 0; i < newCount; i++) {
        // каждый раз, когда мы вызываем эту функцию, мы добавляем новые элементы в конец массива trees
        // (и сохраняем все существующие)
        var newTree = new Tree()
        trees.push(newTree); // для каждого элемента массива trees[] создается новый объект Tree
    }
}

function startCreatingTrees() {
    stopCreatingTrees(); // вызывается для того, чтобы удалить все предыдущие объекты со сцены каждые 1с (createTime) 
                            // иначе будет создано слишком много объектов --> сказывается на производительности
    createInterval = setInterval(function(){createTree(createAmount)}, createTime); // инициализация переменной createInterval с помощью встроенной функции js 
    // первый параметр (аргумент) setInterval - это функция, которая должна вызываться через определенный отрезок времени
    // createTree - это та самая функция, которую нужно вызвать, чтобы создать определенное количество объектов
    // второй парамент createAmount - время, через которое будет все это вызываться
}

function stopCreatingTrees() {
    clearInterval(createInterval); // очищаем интервал - с помощью этой функции удаляются все объекты на сцене 
}

Tree.prototype.clearCtxTree = function() {
    ctxTreeCanvas.clearRect(0, 0, gameWidth, gameHeight);
}

Tree.prototype.draw = function() {
    // clearCtxTree(); // удаление предыдущих кадров (изображений) при движении
    // ctxMap. - отрисовка объекта на карте
    // ctxMap.drawImage(playerImg, this.srcX, this.srcY, this.width, this.height, // размер c ajust_size (mac)
    //     this.drawX, this.drawY, this.width, this.height);
    // так как объект должен будет двигаться по сцене, его нужно отрисовать на другом канвасе
    if (this.collision === false) {
        ctxTreeCanvas.drawImage(treeImg1, this.srcX, this.srcY, this.width, this.height,
        this.drawX, this.drawY, this.width, this.height);
    }
    else {
        ctxTreeCanvas.drawImage(treeImg2, this.srcX, this.srcY, this.width, this.height,
        this.drawX, this.drawY, this.width, this.height);
    }
}

Tree.prototype.update = function() {
    // this.drawX -= 5; // ~ скорость объекта ("-" справа-налево)
    this.drawX -= this.speed;
    if(this.drawX + this.width < 0) { // т.е. если объект вышел за рамки канваса с левой стороны (+ this.width - нужно прибавить ширину объекта, чтоб он полностью вышел за пределы канваса)
        // возвращаем его на начальную позицию со случайными координатами X и Y
        // this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth; 
        // this.drawY = Math.floor(Math.random() * gameHeight);
        // сейчас функция, которая не удаляет сам объект, а скорее переносит его в определенную точку на канвасе (не удаляет с массива!)
        this.destroy(); // вместо верхних строк - теперь функция удаляется объекты из массива
    }
}

// функция, которая будет удалять объект с массива
Tree.prototype.destroy = function() {
    // console.log(`- destroying ${trees.indexOf(this)} of ${trees.length}`)
    trees.splice(trees.indexOf(this),1);// splice - встроенный в js метод (функция), который позволяет удалять любую переменную из массива
    // первый параметр splice - это та позиция, с которой начинается удаление
    // второй параметр - количество элементов, которое нужно удалить из массива
    // конструкция с indexOf(this) позволяет удалять именно тот объект, который уходит со сцены
}
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// замена объекта tree
// Tree.prototype.change = function() {
//     trees.splice(trees.indexOf(this),1[player.draw]);
// }

function checkOtherTrees (tree) {
    // Сортировка trees по Y позиции:
    var sorted = trees.sort(function (a, b) {
        return a.drawY >= b.drawY;
    });
    // Если текущий tree накладывается на любого из существующих противников, то перемещаем его вниз
    for (var i = 0; i < sorted.length; i++) {
        if ((tree.drawY >= sorted[i].drawY && tree.drawY <= sorted[i].drawY + tree.height)
          || (tree.drawY <= sorted[i].drawY && tree.drawY >= sorted[i].drawY - tree.height)) {
            tree.drawY = sorted[i].drawY + tree.height + 1
        }
    }
}