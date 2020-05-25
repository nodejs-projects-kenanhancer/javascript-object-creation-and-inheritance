// This is an inheritance example, objects will have prototype field.

// Shape - superclass
function Shape(x, y) {
    this.type = "Shape";
    this.x = x;
    this.y = y;
}

// add move method to Shape superclass
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
};

// Rectangle - subclass
function Rectangle(x, y, width, height) {

    Object.assign(this, Shape.call(this, x, y)); // call super constructor

    this.type = 'Rectangle';
    this.width = width;
    this.height = height;
}

// INHERITANCE: Rectangle(subclass) extends Shape(superclass)
Rectangle.prototype = Object.create(Shape.prototype);

//If you don't set Rectangle.prototype.constructor to Rectangle,
//it will take the prototype.constructor of Shape (parent).
//To avoid that, we set the prototype.constructor to Rectangle (child).
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle(10, 10, 200, 300);

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'

console.log();