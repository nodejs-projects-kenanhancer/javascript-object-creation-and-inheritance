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
}

// Rectangle - subclass
function Rectangle(x, y, width, height) {
    var args = Array.prototype.slice.call(arguments);

    Shape.apply(this, args);

    this.type = "Rectangle";
    this.width = args[2] || 0;
    this.height = args[3] || 0;
}

// INHERITANCE: Rectangle(subclass) extends Shape(superclass)
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle(10, 10, 200, 300);

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'

console.log();