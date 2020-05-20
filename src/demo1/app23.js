function counterCreator() {
    var count = 0;

    var increment = function () {
        return ++count;
    };

    var getCount = function () {
        return count;
    };

    return {increment, getCount};
}

var counter = counterCreator();

console.log(counter.increment());

console.log(counter.increment());

console.log(counter.increment());

console.log(counter.getCount());
