// Global
firstName = "Bob";

function Person(personId, firstName, lastName) {
    // Check whether `this` is a  `Person` object.
    if (this instanceof Person) {
        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
    } else {
        // If not, throw error.
        throw new Error("`Person` invoked without `new`");
    }
}

var person = Person(101, "kenan", "hancer");

console.log();