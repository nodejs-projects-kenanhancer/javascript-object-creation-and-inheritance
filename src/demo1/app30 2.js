function Car() {
    console.log(this);
    this.name = "Honda";
}

var car1 = new Car();

console.log(car1 instanceof Car); // true
console.log(car1.constructor === Car); // true
console.log(typeof car1); // object

////////////////////////////////////////////////

const Animal = {
    name: "Animal"
};

var dog = Object.create(Animal);

// console.log(dog instanceof Animal); // ERROR
console.log(dog.constructor === Animal); // false
console.log(typeof dog); // object