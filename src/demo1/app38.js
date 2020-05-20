var a1 = {firstName: "Kenan", lastName: "Hancer"};

console.log(typeof a1.__proto__ === 'object'); // true


var aa2 = new Object();
aa2.firstName = "Kenan";
aa2.lastName = "Hancer";


var aa3 = new Object(null);
aa3.firstName = "Kenan";
aa3.lastName = "Hancer";


var aa4 = new Object(undefined);
aa4.firstName = "Kenan";
aa4.lastName = "Hancer";


function Vehicle() {
    this.make = "";
    this.model = "";
}

console.log(Vehicle.prototype.constructor === Vehicle); // true

console.log(typeof Vehicle.prototype.constructor === 'function'); // true

console.log(typeof Vehicle.prototype.__proto__ === 'object'); // true

console.log(typeof Vehicle.__proto__ === 'function'); // true

console.log(typeof Vehicle.__proto__.__proto__ === 'object'); // true


var a2 = Object.getPrototypeOf(a1);

console.log("proto1: ", a2);
console.log("proto2: ", a1.__proto__);


function Toyota() {
    Object.assign(this, Vehicle.call(this));
}

Toyota.prototype = Object.create(Vehicle.prototype);

var a5 = new Toyota();


console.log(Vehicle.prototype.constructor === Vehicle);

var a3 = new Vehicle();
var a4 = Object.getPrototypeOf(a3);

console.log(a4 === a3.__proto__)
console.log(a3.__proto__.constructor === Vehicle);
console.log(Object.getPrototypeOf(a3).constructor === Vehicle);

