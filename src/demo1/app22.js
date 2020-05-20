var stringArgs = ["a", "b", "c"];
var intArgs = [1, 2, 3];

console.log(stringArgs);

console.log(...stringArgs);

console.log(...stringArgs, "test", ...intArgs);

console.log.apply(console, stringArgs);

function spreadify(fnObj, functionName) {
    return function (/* accepts unlimited arguments */) {

        var spreadArgs = [];

        var lenght = arguments.length;

        var currentArg;

        for (var i = 0; i < lenght; i++) {
            currentArg = arguments[i];

            if (Array.isArray(currentArg)) {
                spreadArgs = spreadArgs.concat(currentArg);
            } else {
                spreadArgs.push(currentArg);
            }
        }

        fnObj[functionName].apply(fnObj, spreadArgs);
    };
}

spreadify(console, 'log')(stringArgs, "test2", intArgs);