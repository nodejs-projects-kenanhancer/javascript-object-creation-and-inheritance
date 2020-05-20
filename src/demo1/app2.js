// If object is created via object literal, object doesn't have prototype field.
var person = {
    id: 101,
    firstName: "kenan",
    lastName: "hancer",
    age: 36,
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.getFullName());