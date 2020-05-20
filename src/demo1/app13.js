function Book(title) {
    this.title = title;
}

function Magazine(title, issue) {
    this.title = title;
    this.issue = issue;
}

function Document(title, description) {
    this.title = title;
    this.description = description;
}

var laic = new Book("Love Alone is Credible");
var restless = new Magazine("Communio", "Summer 2007");
var le = new Document("Laborem Exercens", "encyclical");

function fileIt(thing) {

    if (thing instanceof Book) {
        console.log("File in main stacks.");
    } else if (thing instanceof Magazine) {
        console.log("File on magazine racks.");
    } else if (thing instanceof Document) {
        console.log("File in document vault.");
    }
}

// Outputs: "File in main stacks.""
fileIt(laic);

// Outputs: "File on magazine racks."
fileIt(restless);

// Outputs: "File in document vault."
fileIt(le);