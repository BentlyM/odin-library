const container = document.querySelector('.container');
const createBook = document.querySelector('#add-book');
const myLibrary = [];
let count = 1;

const viewDrop = () => {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.classList.toggle('show');
}

function Book(title , author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${read ? 'read'  : 'not read yet'}`
    }
}

createBook.addEventListener('click', ()=>{
    const title = document.getElementById('book-name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    if(title === '' || author === '' || pages === '') throw `error`;
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    renderCard(newBook);
    console.table(myLibrary);
})

function renderCard(renderBook){
    if(container.children.length >= 30 || 30 <= myLibrary.length) throw `MAX_LENGTH REACHED`;

    const card = document.createElement('div');
    card.className = 'card';

    const NumCard = document.createElement('div')
    NumCard.innerHTML = count++;
    NumCard.className = 'card-number';

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const editCard = document.createElement('div');
    editCard.className = 'mutate-card';

    card.appendChild(NumCard);
    card.appendChild(cardContent);
    card.appendChild(editCard);
    container.appendChild(card);
}