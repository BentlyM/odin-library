class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = () => {
            let status = this.read ? "read" : "not read yet";
            return `${this.title} by ${this.author}, ${this.pages} pages, ${status}`
        }
    }
}

class novel extends Book {
    constructor(title, author, pages, read, genre){
        super(title, author, pages, read);
        this.genre = genre;
        }
}