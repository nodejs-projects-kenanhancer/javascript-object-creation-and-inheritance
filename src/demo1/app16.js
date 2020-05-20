// Making Deep Property Access Safe

var rels = {
    Viola: {
        Orsino: {
            Olivia: {
                Cesario: null
            }
        }
    }
};

function deepGet(obj, properties, defaultValue) {

    // If we have reached an undefined/null property
    // then stop executing and return undefined.
    if (obj === undefined || obj === null) {
        return defaultValue;
    }

    // If properties array has no more elements, we've reached
    // the intended property and return its value.
    if (properties.length === 0) {
        return obj;
    }

    //
    var foundSoFar = obj[properties[0]];
    var remainingProperties = properties.slice(1);

    return deepGet(foundSoFar, remainingProperties, defaultValue);
}

// Outputs: { Cesario: null }
console.log(deepGet(rels, ["Viola", "Orsino", "Olivia"], {}));

// Outputs: undefined
console.log(deepGet(rels, ["Viola", "Harry"], {}));

// Outputs: undefined
console.log(deepGet(rels, ["Viola", "Harry", "Sally"], {}));