const container = document.querySelector('.container');
const createBook = document.querySelector('#add-book');
const myLibrary = [];
let count = 0;

const viewDrop = () => {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.classList.toggle('show');
}

function Book(title , author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

createBook.addEventListener('click', (event)=>{
    event.preventDefault();

    const title = document.getElementById('book-name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    if(title === '' || author === '' || pages === '') throw `the field is empty`;
    const newBook = new Book(title, author, pages); // <- here im passing it
    myLibrary.push(newBook);
    renderCard(newBook);

    document.getElementById('book-name').value = ''; // clear
    document.getElementById('author').value = ''; //clear
    document.getElementById('pages').value = ''; // clear

    viewDrop(); // toggles
})



function renderCard(renderBook){
    if(container.children.length >= 30 || 30 <= myLibrary.length) throw `MAX_LENGTH REACHED`;

    const card = document.createElement('div'); 
    card.className = 'card';

    const NumCard = document.createElement('div')
    NumCard.innerHTML = count++ + 1;
    NumCard.className = 'card-number';

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    displayContent(renderBook.title, renderBook.author, renderBook.pages, cardContent);

    const editCard = document.createElement('div');
    editCard.className = 'mutate-card';
    editCardFunction(renderBook , editCard);

    card.appendChild(NumCard);
    card.appendChild(cardContent);
    card.appendChild(editCard);
    container.appendChild(card);
}

const displayContent = (title, author, pages, cardContent) => { 
    const displayTitle = document.createElement('span');
    const displayAuthor = document.createElement('span');
    const displayPages = document.createElement('span');

    displayTitle.textContent = `Title: ${title}`;
    displayAuthor.textContent = `Author: ${author}`;
    displayPages.textContent = `Pages: ${pages}`;

    cardContent.appendChild(displayTitle);
    cardContent.appendChild(displayAuthor);
    cardContent.appendChild(displayPages);
}

const editCardFunction = (renderBook, editCard) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    checkbox.addEventListener('click', () => {
    if(checkbox.checked){
        renderBook.read = true;
        checkbox.parentNode.parentNode.style.background = '#22c55e';
    } else {
        renderBook.read = false;
        checkbox.parentNode.parentNode.style.background = 'white';
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';

    deleteButton.addEventListener('click', () => {
        container.removeChild(deleteButton.parentNode.parentNode);
        updateNumCards(); // Add this line
    });

    editCard.appendChild(checkbox);
    editCard.appendChild(deleteButton);
}

function updateNumCards() {
    const cards = container.children;
    for (let i = 0; i < cards.length; i++) {
        const numCard = cards[i].querySelector('.card-number');
        numCard.textContent = i + 1;
    }
    count--;
}