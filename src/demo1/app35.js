// Car doesn't add fields to `this` in `function Car()` and Car also doesn't add methods in prototype.
// It just return an object from `function Car()`
var Car = (function () {

    function Car() {

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

        function getMotorSize() {
            return motorSize;
        }

        function setMotorSize(_) {
            motorSize = _;
            return this;
        }

        function getWheelCount() {
            return wheels;
        }

        function getDrivingWheelCount() {
            return drivingWheels;
        }

        return {
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
            setMotorSize,
            toString: function () {
                return JSON.stringify({make, model, year, color, wheels, drivingWheels, motorSize});
            }
        };
    }

    return Car;
})();


var car1 = new Car().setMake("BMW").setModel("M3").setYear(2005).setColor("Black");
console.log(car1.toString());


////////////////////////////// TOYOTA(SUBCLASS) EXTENDS(INHERIT) CAR SUPERCLASS ///////////////////////////////////////
function Toyota() {
    Object.assign(this, Car.call(this, arguments));
    // Car.call(this, arguments); // This way doesn't work here because Car superclass doesn't implement `this` keyword in fucntion.
}

Toyota.prototype = Object.create(Car.prototype);
////////////////////////////// TOYOTA(SUBCLASS) EXTENDS(INHERIT) CAR SUPERCLASS ///////////////////////////////////////


var toyota1 = new Toyota().setMake("Toyota").setModel("Corolla").setYear(1996);
console.log(toyota1.toString());


// Car.prototype.getDoorCount = function () {
//     return this.doors;
// };
//
// Car.prototype.setDoorCount = function (_) {
//     this.doors = _;
//     return this;
// };

var CarExtensionV1 = (function () {

    function CarExtensionV1() {
        this.doors = 0;
    }

    CarExtensionV1.prototype.getDoorCount = function () {
        return this.doors;
    };

    CarExtensionV1.prototype.setDoorCount = function (_) {
        this.doors = _;
        return this;
    };

    return CarExtensionV1;
})();

function CarExtensionV2() {
    var doors = 0;

    function getDoorCount() {
        return doors;
    }

    function setDoorCount(_) {
        doors = _;
        return this;
    }

    Object.assign(this, {getDoorCount, setDoorCount});
}

Object.assign(Car.prototype, {...new CarExtensionV2()});


// Object.assign(Car.prototype, (function () {
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
//     return {getDoorCount, setDoorCount};
// })());
//
//
// var toyota2 = new Toyota().setMake("Toyota").setModel("Coronna").setYear(2000).setDoorCount(4);
// console.log(toyota2.toString());
