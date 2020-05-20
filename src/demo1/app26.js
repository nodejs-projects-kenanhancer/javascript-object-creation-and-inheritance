function once(fn) {
    var used = false;
    return function (args) {
        if (used) {
            return;
        }

        fn(args);

        used = true;
    }
}

function logIn(userName) {
    console.log("Welcome " + userName);
}

var logInOnce = once(logIn);

logInOnce("kenan");
logInOnce("kenan");
logInOnce("kenan");
logInOnce("kenan");
logInOnce("kenan");