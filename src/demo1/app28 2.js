function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

Car.prototype.getFullName = function () {
    return this.make + " " + this.model;
}

var toyota = new Car("Toyota", "Corolla", 1996, "Red");

console.log(toyota.getFullName());

/////////////////////////////////


// create from object
var mercedes = {};
mercedes.__proto__ = Object.create(Car.prototype).__proto__;
Car.call(mercedes, "Mercedes", "CL 500", 2005, "Black");

console.log(mercedes.getFullName());

/////////////////////////////////

var audi = {
    make: "Audi",
    model: "A6",
    year: 2010,
    color: "Grey",
    getFullName: function () {
        return this.make + " " + this.model;
    }
};

console.log(audi.getFullName());

/////////////////////////////////

var bmw = Object.create(audi);
bmw.make = "BMW";
bmw.model = "M3";
bmw.year = 2005;
bmw.color = "Red";

console.log(bmw.getFullName());

/////////////////////////////////

var bmwX6 = Object.create(audi);
bmwX6.make = "BMW";
bmwX6.model = "X6";
bmwX6.year = 2006;
bmwX6.Color = "Brown";

console.log(bmwX6.getFullName());