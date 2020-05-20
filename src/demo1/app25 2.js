function multiply(a, b) {
    return a * b;
}

function timesCreator(a) {
    return function (b) {
        return multiply(a, b);
    }
}

var timesTwo = timesCreator(2);
var timesTwelve = timesCreator(12);

console.log(timesTwo(4));

console.log(timesTwelve(3));