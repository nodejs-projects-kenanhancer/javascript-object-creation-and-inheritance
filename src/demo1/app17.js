// `this` keyword in IIFE is equals to `global` object in Node.js
// no need to use `this` in IIFE, so drabs can be reached globally.

(function () {

    drabs = {};

    drabs.deepGet = function (obj, props, defaultValue) {

        // If the props is in the dot notation, convert to array
        if (typeof props === "string") {
            props = props.split(".");
        }

        return drabs.deepGetByArray(obj, props, defaultValue);
    }

    drabs.deepGetByArray = function (obj, propsArray, defaultValue) {

        if (obj === undefined || obj === null) {
            return defaultValue;
        }

        if (propsArray.length === 0) {
            return obj;
        }

        var foundSoFar = obj[propsArray[0]];
        var remainingProps = propsArray.slice(1);

        return drabs.deepGetByArray(foundSoFar, remainingProps, defaultValue);
    };
})();

var deepObject = {
    a: {
        b: {
            c: "c"
        }
    },
    "falseVal": false,
    "nullVal": null
};

// Outputs: c
console.log(drabs.deepGet(deepObject, ["a", "b", "c"]));

// Outputs: undefined
console.log(drabs.deepGet(deepObject, ["a", "b", "d"]));

console.log();