// Using `Dispatch Tables` to avoid conditionals

function movePlayer(direction) {
}

function describeLocation() {
}

function showBackpack() {
}


// Classic usage
function processUserInput(command) {
    switch (command) {
        case "north":
            movePlayer("north");
            break;
        case "east":
            movePlayer("east");
            break;
        case "south":
            movePlayer("south");
            break;
        case "west":
            movePlayer("west");
            break;
        case "look":
            describeLocation();
            break;
        case "backpack":
            showBackpack();
            break;
    }
}

// Dispatch Table usage
var commandTable = {
    north: function () {
        movePlayer("north");
    },
    east: function () {
        movePlayer("east");
    },
    south: function () {
        movePlayer("south");
    },
    west: function () {
        movePlayer("west");
    },
    look: describeLocation,
    backpack: showBackpack
};

function processUserInputV2(command) {
    commandTable[command]();
}


processUserInput("north");
processUserInputV2("north");