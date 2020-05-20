function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.getFormatted = function () {
    return this.title + " - " + this.author;
};

var hobbit = new Book("The Hobbit", "Tolkien");

var caspian = new Book("Prince Caspian", "Lewis");


console.log(hobbit.getFormatted()); // Outputs: "The Hobbit - Tolkien"

// Oops! We need to use commas, not hyphens
Book.prototype.getFormatted = function () {
    return this.title + ", " + this.author;
}

console.log(hobbit.getFormatted()); // Outputs: "The Hobbit, Tolkien"