// Duck Typing usage

function Book(title) {
    this.title = title;
}

Book.prototype.file = function () {
    console.log("File in main stacks.");
}

function Magazine(title, issue) {
    this.title = title;
    this.issue = issue;
}

Magazine.prototype.file = function () {
    console.log("File on magazine racks.");
};

function Document(title, description) {
    this.title = title;
    this.description = description;
}

Document.prototype.file = function () {
    console.log("File in document vault.");
};

function CompactDisc(title) {
    this.title = title;
}

CompactDisc.prototype.file = function () {
    console.log("File in music section.");
};

var weirdModernArtPiece = {
    title: "différance",
    file: function () {
        console.log("File this where no one can see it.");
    }
};

var laic = new Book("Love Alone is Credible");
var restless = new Magazine("Communio", "Summer 2007");
var le = new Document("Laborem Exercens", "encyclical");
var coc = new CompactDisc("A Ceremony of Carols");

function fileIt(thing) {
    // Dynamically call the file method of whatever
    // `thing` was passed in.
    thing.file();
}

// Outputs: "File in main stacks.""
fileIt(laic);

// Outputs: "File on magazine racks."
fileIt(restless);

// Outputs: "File in document vault."
fileIt(le);

// Outputs: "File in music section."
fileIt(coc);

// Outputs: "File this where no one can see it."
fileIt(weirdModernArtPiece);

