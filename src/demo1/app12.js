// Fluent interface usage

function Book(name, author) {
    this.name = name;
    this.author = author;
}

Book.prototype.setName = function (name) {
    this.name = name;
    return this;
};

Book.prototype.setAuthor = function (author) {
    this.author = author;
    return this;
};

var lotr = new Book("Lord of the Rings", "Tolkien");


// Outputs: {
//     name: "Lord of the Rings",
//     author: "Tolkien"
// }
console.log(lotr);

// Whoops! Details were slightly wrong.
// Let's fix that.
lotr.setAuthor("JRR Tolkien").setName("The Lord of the Rings");

// Outputs: {
//     name: "The Lord of the Rings",
//     author: "JRR Tolkien"
// }
console.log(lotr);