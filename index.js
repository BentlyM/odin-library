const container = document.querySelector('.container');
const myLibrary = ['<div></div>','<div></div>','<div></div>'];

function Book(title , author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${read ? 'read'  : 'not read yet'}`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function scanLibrary(){
    for(let items in myLibrary){
        const card = document.createElement('div');
        card.innerHTML = myLibrary[items];
        card.className = 'card';
        container.appendChild(card);
        card.firstChild.innerHTML = +items + 1;
    }
}

scanLibrary();
