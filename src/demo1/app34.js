// Car doesn't add fields to `this` in `function Car()` and Car also doesn't add methods in prototype.
// It just return an object from `function Car()`
var Car = (function () {

    function Car() {

        var returnValue = {};
        var make = "";
        var model = "";
        var year = 0;
        var color = "";
        var wheels = 4;
        var drivingWheels = 2;
        var motorSize = 0;

        function getMake() {
            return make;
        }

        function setMake(_) {
            make = _;
            return this;
        }

        function getModel() {
            return model;
        }

        function setModel(_) {
            model = _;
            return this;
        }

        function getYear() {
            return year;
        }

        function setYear(_) {
            year = _;
            return this;
        }

        function getColor() {
            return color;
        }

        function setColor(_) {
            color = _;
            return this;
        }

        function setMotorSize(_) {
            motorSize = _;
            return this;
        }

        function getMotorSize() {
            return motorSize;
        }

        function getWheelCount() {
            return wheels;
        }

        function getDrivingWheelCount() {
            return drivingWheels;
        }

        Object.assign(this, {
            getMake,
            setMake,
            getModel,
            setModel,
            getYear,
            setYear,
            getColor,
            setColor,
            getWheelCount,
            getDrivingWheelCount,
            getMotorSize,
            setMotorSize
        });

        this.__proto__.toString = function () {
            return JSON.stringify({make, model, year, color, wheels, drivingWheels, motorSize});
        };

    }

    return Car;
})();

////////////////////////////// TOYOTA(SUBCLASS) EXTENDS(INHERIT) CAR SUPERCLASS ///////////////////////////////////////
function Toyota() {
    Object.assign(this, Car.call(this, arguments));
    // Car.call(this); // This way doesn't work here because Car superclass doesn't implement `this` keyword in fucntion.
}

Toyota.prototype = Object.create(Car.prototype);
////////////////////////////// TOYOTA(SUBCLASS) EXTENDS(INHERIT) CAR SUPERCLASS ///////////////////////////////////////


var toyota1 = new Toyota().setMake("Toyota").setModel("Corolla").setYear(1996);

console.log(toyota1.toString());
console.log(toyota1.getMake());
console.log(toyota1.getModel());
console.log(toyota1.getYear());
console.log(toyota1.getMotorSize());
console.log(toyota1.getDrivingWheelCount());


// Car.prototype.getDoorCount = function () {
//     return this.doors;
// };
//
// Car.prototype.setDoorCount = function (_) {
//     this.doors = _;
//     return this;
// };

// var aaa = (function () {
//
//     function Car_() {
//         this.doors = 0;
//     }
//
//     Car_.prototype.getDoorCount = function () {
//         return this.doors;
//     };
//
//     Car_.prototype.setDoorCount = function (_) {
//         this.doors = _;
//         return this;
//     };
//
//     return Car_;
// })();

// function Car_() {
//     var doors = 0;
//
//     function getDoorCount() {
//         return doors;
//     }
//
//     function setDoorCount(_) {
//         doors = _;
//         return this;
//     }
//
//     Object.assign(this, {getDoorCount, setDoorCount});
// }

// Object.assign(Car.prototype, {...new Car_()});

Object.assign(Car.prototype, (function () {
    var doors = 0;

    function getDoorCount() {
        return doors;
    }

    function setDoorCount(_) {
        doors = _;
        return this;
    }

    // Object.assign(this, {getDoorCount, setDoorCount});

    return {getDoorCount, setDoorCount};
})());

var aa = new Car();

aa.setDoorCount(33);

var toyota2 = new Toyota().setMake("Totoya").setModel("Coronna").setYear(2000).setDoorCount(4);

console.log(toyota2.toString());
console.log(toyota2.getMake());
console.log(toyota2.getModel());
console.log(toyota2.getYear());
console.log(toyota2.getMotorSize());
console.log(toyota2.getDrivingWheelCount());
console.log(toyota2.getDoorCount());
console.log(Object.getOwnPropertyNames(toyota2));
