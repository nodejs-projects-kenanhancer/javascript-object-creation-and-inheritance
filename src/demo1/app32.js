function Car() {
    this.name = "Base Car";
    this.color = "White";
}

var car1 = new Car();
car1.name = "Toyota";
console.log(car1);

var CarFrozen = Object.freeze(Car);
var car2 = new CarFrozen();
car2.name = "Audi";
console.log(car2);

var obj = {prop: 42};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42


console.log();