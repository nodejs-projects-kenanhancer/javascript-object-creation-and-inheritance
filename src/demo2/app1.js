// This is not a inheritance example. this is for Object.apply usage.

// Shape - superclass
function Shape() {
    this.type = "Shape";
    this.x = arguments[0] || 0;
    this.y = arguments[1] || 0;
}

// Rectangle - subclass
function Rectangle() {

    Object.assign(this, Shape.apply(this, arguments));

    this.type = "Rectangle";
    this.width = arguments[2] || 0;
    this.height = arguments[3] || 0;
}

var rect = new Rectangle(10, 10, 200, 300);

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true

console.log();