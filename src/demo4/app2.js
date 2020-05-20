// Person(superclass) ////////////////////////////////////////////
function Person() {
    if (!(this instanceof Person)) {
        throw new Error("`Person` invoked without `new`");
    }

    this.personId = arguments[0];
    this.firstName = arguments[1];
    this.lastName = arguments[2];
    this.age = arguments[3];
    this.gender = arguments[4];
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
// Person(superclass) ////////////////////////////////////////////


// Employee(subclass) extends Person(superclass) /////////////////
function Employee() {
    if (!(this instanceof Employee)) {
        throw new Error("`Employee` invoked without `new`");
    }

    Person.apply(this, arguments);

    this.title = arguments[5];
    this.salary = arguments[6];
    this.taxRate = 0.14;
}

//INHERITANCE
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.calculateNetSalary = function () {
    return this.salary * 12;
};

Employee.prototype.calculateGrossSalary = function () {
    var netSalary = this.calculateNetSalary();

    return netSalary * (1 + this.taxRate);
};
// Employee(subclass) extends Person(superclass) /////////////////


// Manager(subclass) extends Employee(superclass) /////////////////
function Manager() {
    if (!(this instanceof Manager)) {
        throw new Error("`Manager` invoked without `new`");
    }

    Employee.apply(this, arguments);

    this.taxRate = 0.21;
}

//INHERITANCE
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

//OVERRIDE
Manager.prototype.greet = function () {
    var _greet = Employee.prototype.greet.call(this);

    return `${_greet}, Welcome`;
};
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