// This is not a inheritance example. this is for Object.apply and Array.prototype.slice.call usage.

// Shape - superclass
function Shape() {
    var args = Array.prototype.slice.call(arguments);

    this.type = "Shape";
    this.x = args[0] || 0;
    this.y = args[1] || 0;
}

// Rectangle - subclass
function Rectangle() {
    var args = Array.prototype.slice.call(arguments);

    Object.assign(this, Shape.apply(this, args));

    this.type = "Rectangle";
    this.width = args[2] || 0;
    this.height = args[3] || 0;
}

var rect = new Rectangle(10, 10, 200, 300);

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true

console.log();