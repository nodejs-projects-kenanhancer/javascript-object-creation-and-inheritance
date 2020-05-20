// This is not a inheritance example. this is for Object.call usage.

// Shape - superclass
function Shape(x, y) {
    this.type = "Shape";
    this.x = x;
    this.y = y;
}

// Rectangle - subclass
function Rectangle(x, y, width, height) {

    Shape.call(this, x, y);

    this.type = "Rectangle";
    this.width = width;
    this.height = height;
}

var rect = new Rectangle(10, 10, 200, 300);

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true

console.log();