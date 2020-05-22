// Arrow function can not reach `this` and `arguments` variables

var obj1 = {
    name: "test object",
    anonymousFunction: function () {
        // function declaration(statement) or function expression can reach `this` and `arguments` variables
        console.log(this.name, arguments);
    },
    arrowFunction: () => {
        // arrow function can not reach `this` and `arguments` variables
        console.log(this.name, arguments);
    }
};

obj1.anonymousFunction();

obj1.arrowFunction();ßß