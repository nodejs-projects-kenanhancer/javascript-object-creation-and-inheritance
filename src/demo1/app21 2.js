function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.toString = function () {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
};

var red = new Color(255, 0, 0);

var message = "Red is " + red;

console.log(message);