const container = document.querySelector('.container');
const myLibrary = [];
let count = 1;

function Book(title , author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${read ? 'read'  : 'not read yet'}`
    }
}

function addBookToLibrary() {
}

function renderCard(){
}