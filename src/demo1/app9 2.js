// If new keyword is not used, then this keyword in function will be global(window in the browser).
// So global firstName variable will be overrided.
// But, if we use new Person(), then this keyword in function will have a new scope.

// Global variable
firstName = "Bob";

function Person(personId, firstName, lastName) {
    this.personId = personId;
    this.firstName = firstName;
    this.lastName = lastName;
}

var person = Person(101, "kenan", "hancer");

console.log(firstName); // kenan

console.log(person); // undefined