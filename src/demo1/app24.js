function counterCreator() {
    var count = 0;

    return {
        increment: function () {
            return ++count;
        },
        getCount: function () {
            return count;
        }
    }
}

var counterX = counterCreator();
var counterY = counterCreator();

console.log(counterX.increment());
console.log(counterX.increment());
console.log(counterX.increment());
console.log(counterX.increment());

console.log(counterY.increment());
console.log(counterY.increment());
console.log(counterY.increment());
console.log(counterY.increment());
console.log(counterY.increment());


console.log("counterX is " + counterX.getCount());
console.log("counterY is " + counterY.getCount());