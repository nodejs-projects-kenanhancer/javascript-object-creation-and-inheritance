// If object is created via function(), object will have prototype field.

// Person - superclass
var Person = function (id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

// add getFullName method to Person superclass
Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
};

var person = new Person(101, "kenan", "hancer", 36);

console.log(person.getFullName());