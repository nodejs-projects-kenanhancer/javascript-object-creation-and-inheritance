var Quad = (function () {

    function Quad() {

        var wheels = 4;
        var drivingWheels = 2;
        var motorSize = 0;

        function setMotorSize(_) {
            motorSize = _;
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

        return {
            getWheelCount,
            getDrivingWheelCount,
            getMotorSize,
            setMotorSize
        };
    }

    return Quad;
})();

// var Car4wd = (function () {
//
//     function Car4wd() {
//         var quad = new Quad();
//
//         var spareWheels = 1;
//         var extraDrivingWheels = 2;
//
//         function getSpareWheelCount() {
//             return spareWheels;
//         }
//
//         function getDrivingWheelCount() {
//             return quad.getDrivingWheelCount() + extraDrivingWheels;
//         }
//
//         return Object.assign({}, quad, {getSpareWheelCount, getDrivingWheelCount});
//     }
//
//     return Car4wd;
// })();

var Car4wdd = (function () {

    function Car4wd() {
        Object.assign(this, Quad.call(this, arguments));

        this.spareWheels = 1;
        this.extraDrivingWheels = 2;
    }

    Car4wd.prototype = Object.create(Quad.prototype);
    Car4wd.prototype.constructor = Car4wd;

    Car4wd.prototype.getSpareWheelCount = function () {
        return this.spareWheels;
    };

    Car4wd.prototype.getDrivingWheelCount = function () {
        return this.getDrivingWheelCount() + this.extraDrivingWheels;
    };

    return Car4wd;
})();

var myQuad = new Quad();
var myCar = new Car4wdd();

console.log(myQuad.getWheelCount()); // 4
console.log(myQuad.getDrivingWheelCount()); // 2

console.log(myCar.getMotorSize()); //
console.log(myCar.getWheelCount()); // 4
console.log(myCar.getDrivingWheelCount()); // 4 - The overriden method is called
console.log(myCar.getSpareWheelCount()); // 1