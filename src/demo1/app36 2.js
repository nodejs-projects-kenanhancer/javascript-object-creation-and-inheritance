// Car adds fields via `this` keyword in `function Car()`
// this implementation is most ideal way for future extensions(inheritance)
var Car = (function () {

    function Car() {
        this.make = "";
        this.model = "";
        this.year = 0;
        this.color = "";
        this.wheels = 4;
        this.drivingWheels = 2;
        this.motorSize = 0;
    }

    Car.prototype.setMake = function (_) {
        this.make = _;
        return this;
    };

    Car.prototype.getMake = function () {
        return this.make;
    };

    Car.prototype.setModel = function (_) {
        this.model = _;
        return this;
    };

    Car.prototype.getModel = function () {
        return this.model;
    };

    Car.prototype.setYear = function (_) {
        this.year = _;
        return this;
    };

    Car.prototype.getYear = function () {
        return this.year;
    };

    Car.prototype.setColor = function (_) {
        this.color = _;
        return this;
    };

    Car.prototype.getColor = function () {
        return this.color;
    };

    Car.prototype.setMotorSize = function (_) {
        this.motorSize = _;
        return this;
    };

    Car.prototype.getMotorSize = function () {
        return this.motorSize;
    };

    Car.prototype.getWheelCount = function () {
        return this.wheels;
    };

    Car.prototype.getDrivingWheelCount = function () {
        return this.drivingWheels;
    };

    Car.prototype.toString = function () {
        return JSON.stringify({
            make: this.make,
            model: this.model,
            year: this.year,
            color: this.color,
            wheels: this.wheels,
            drivingWheels: this.drivingWheels,
            motorSize: this.motorSize
        });
    };

    return Car;
})();


////////////////////////////// MERCEDES(SUBCLASS) EXTENDS(INHERIT) CARV2 SUPERCLASS ///////////////////////////////////
function Mercedes() {
    Object.assign(this, Car.call(this, arguments));
    // Car.call(this); // This way also works for Car but Object.assign it safe way.
}

Mercedes.prototype = Object.create(Car.prototype);
////////////////////////////// MERCEDES(SUBCLASS) EXTENDS(INHERIT) CARV2 SUPERCLASS ///////////////////////////////////

var mercedes1 = new Mercedes().setMake("Mercedes").setModel("CL 500").setYear(2005);

console.log(mercedes1.toString());
console.log(mercedes1.getMake());
console.log(mercedes1.getModel());
console.log(mercedes1.getYear());
console.log(mercedes1.getMotorSize());
console.log(mercedes1.getDrivingWheelCount());

var mercedes2 = new Mercedes().setMake("Mercedes").setModel("CLS 500").setYear(2006);

console.log(mercedes2.toString());
console.log(mercedes2.getMake());
console.log(mercedes2.getModel());
console.log(mercedes2.getYear());
console.log(mercedes2.getMotorSize());
console.log(mercedes2.getDrivingWheelCount());
console.log(Object.getOwnPropertyNames(mercedes2));