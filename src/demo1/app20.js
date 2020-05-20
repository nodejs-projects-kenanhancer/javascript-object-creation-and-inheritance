function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.text = "rgb(" + r + ", " + g + ", " + b + ")";
}

var red = new Color(255, 0, 0);

// Outputs: "rgb(255, 0, 0)"
console.log(red.text);