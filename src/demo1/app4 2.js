// If object is created via new Object(), object doesn't have prototype field.
var person = Object.create(Object.prototype);

person.id = 101;
person.firstName = "kenan";
person.lastName = "hancer";
person.age = 36;
person.getFullName = function () {
    return this.firstName + " " + this.lastName;
};

console.log(person.getFullName());