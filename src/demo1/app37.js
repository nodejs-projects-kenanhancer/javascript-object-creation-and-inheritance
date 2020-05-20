function Vehicle() {

    if (!(this instanceof Vehicle)) {
        throw new Error("`Vehicle` invoked without `new`");
    }

    this.make = "BMW";
    this.model = "";
    this.year = "";
    this.color = "";

    // return {make: "Toyota", model: "", year: "", color: ""};
}

var car1 = new Vehicle();
car1.make = "Mercedes";
console.log(car1);

function Person() {

    var result = {
        personId: "",
        firstName: "",
        lastName: "",
        age: "",
        getFullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };

    return result;
}

function Manager() {

    var personObj = Person();

    var result = {
        title: "",
        salary: "",
        getSalary: function () {
            return "£" + this.salary;
        }
    };

    return Object.assign(personObj, result);
}

var person1 = Person();
person1.personId = "1";
person1.firstName = "kenan";
person1.lastName = "hancer";
console.log(person1.getFullName());

var person2 = Person();
person2.personId = "2"
person2.firstName = "Enes";
person2.lastName = "Hancer";
console.log(person2.getFullName());

var manager1 = Manager();
manager1.personId = "3";
manager1.firstName = "Cemalettin";
manager1.lastName = "Hancer";
manager1.title = "CTO";
manager1.salary = "4000";
console.log(manager1.getFullName(), ", Salary is ", manager1.getSalary());

var ManagerFunc = Manager;
Manager = function () {

    var managerObj = ManagerFunc();

    var result = {
        getTitle: function () {
            return managerObj.title;
        }
    };

    return Object.assign(managerObj, result);
};

var manager2 = Manager();
manager2.personId = "4";
manager2.firstName = "Sinan";
manager2.lastName = "Hancer";
manager2.title = "Manager";
manager2.salary = "8000";
console.log(manager2.getFullName(), ", Salary is ", manager2.getSalary(), ", Title is ", manager2.getTitle());

console.log();