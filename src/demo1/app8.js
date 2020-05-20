var Person = {
    personId: 101,
    firstName: "kenan",
    lastName: "hancer"
};

var PersonProps = {
    age: {
        writable: true,
        configurable: true,
        value: 36
    },
    gender: {
        writable: true,
        configurable: true,
        value: "Male"
    }
};

var person = Object.create(Person, PersonProps);

