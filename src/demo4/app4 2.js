class Person {
    constructor(personId, firstName, lastName, age, gender) {
        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    greet() {
        return `Hello ${this.getFullName()}`;
    }
}

class Employee extends Person {
    constructor(...args) {
        super(...args);

        let _title = args[5];
        let _salary = args[6];

        if (_title) {
            this.title = _title;
        }

        if (_salary) {
            this.salary = _salary;
        }

        this.taxRate = 0.14;
    }

    calculateGrossSalary() {
        let netSalary = this.calculateNetSalary();

        return netSalary * (1 + this.taxRate);
    }

    calculateNetSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(...args) {
        super(...args);

        this.taxRate = 0.21;
    }

    greet() {
        let _greet = super.greet();

        return `${_greet}, Welcome!`;
    }
}

let employee1 = new Employee(1, 'Kenan', 'Hancer', 33, 'MALE', 'WORKER', 1000);

let manager1 = new Manager(2, 'Enes', 'Demir', 40, 'MALE', 'MANAGER', 5000);

console.log(employee1);

console.log(employee1.getFullName());

console.log(employee1.greet());

console.log(employee1.calculateNetSalary());

console.log(employee1.calculateGrossSalary());

console.log();

console.log(manager1);

console.log(manager1.getFullName());

console.log(manager1.greet());

console.log(manager1.calculateNetSalary());

console.log(manager1.calculateGrossSalary());