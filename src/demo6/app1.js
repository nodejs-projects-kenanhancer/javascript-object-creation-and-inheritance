// Throws an error because of duplicate parameters (Strict mode)

function logParams(first, second, first) {
    "use strict"

    console.log(first, second);
}

logParams("kenan", "hancer");