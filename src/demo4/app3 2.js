Function.prototype.inherits = function (parentClassOrObject) {
    var child = this;

    function temp() {
        this.constructor = child;
    }

    temp.prototype = parentClassOrObject.prototype;
    this.prototype = new temp();

    return this;
};

// Person(superclass) ////////////////////////////////////////////
var Person = (function () {
    function Person(personId, firstName, lastName, age, gender) {
        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.created = Date.now();
        this.updated = Date.now();
        this.isDeleted = false;
    }

    Person.prototype.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };

    Person.prototype.greet = function () {
        return `Hello ${this.getFullName()}`;
    };

    Person.prototype.toString = function () {
        return JSON.stringify({
            personId: this.personId,
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
            gender: this.gender,
            created: this.created,
            updated: this.updated,
            isDeleted: this.isDeleted
        });
    };

    return Person;
})();
// Person(superclass) ////////////////////////////////////////////

// Employee(subclass) extends Person(superclass) /////////////////
var Employee = (function () {

    function Employee() {
        var args = Array.prototype.slice.call(arguments);

        Person.apply(this, args);

        this.title = args[5];
        this.salary = args[6];
        this.taxRate = 0.14;
    }

    Employee.inherits(Person);

    Employee.prototype.calculateGrossSalary = function () {
        var netSalary = this.calculateNetSalary();

        return netSalary * (1 + this.taxRate);
    };

    Employee.prototype.calculateNetSalary = function () {
        return this.salary * 12;
    };

    return Employee;
})();
// Employee(subclass) extends Person(superclass) /////////////////

// Manager(subclass) extends Employee(superclass) /////////////////
var Manager = (function () {

    function Manager() {
        var args = Array.prototype.slice.call(arguments);

        Employee.apply(this, args);

        this.taxRate = 0.21;
    }

    Manager.inherits(Employee);

    Manager.prototype.greet = function () {
        var _greet = Employee.prototype.greet.call(this);

        return `${_greet}, Welcome!`;
    };

    return Manager;
})();
// Manager(subclass) extends Employee(superclass) /////////////////

var person = new Person(1, 'Kenan', 'Hancer', 33, 'MALE');

var employee1 = new Employee(2, 'Kenan', 'Hancer', 33, 'MALE', 'WORKER', 1000);

var manager1 = new Manager(3, 'Enes', 'Demir', 40, 'MALE', 'MANAGER', 5000);

console.log(person.toString());

console.log();

console.log(employee1.toString());

console.log(employee1.getFullName());

console.log(employee1.greet());

console.log(employee1.calculateNetSalary());

console.log(employee1.calculateGrossSalary());

console.log();

console.log(manager1.toString());

console.log(manager1.getFullName());

console.log(manager1.greet());

console.log(manager1.calculateNetSalary());

console.log(manager1.calculateGrossSalary());