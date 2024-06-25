const runLibrary = (function(){ // I.I.F.E
     const container = document.querySelector('.container');
     const createBook = document.querySelector('#add-book');
     const createBookBtn = document.getElementById('books'); // i am in fact dumb lol
     const myLibrary = [];
     let count = 0;

     function Book(title, author, pages, read){
        this.title = title; // this is not a object literal ITS A CONSTRUCTOR MF
        this.author = author;
        this.pages = pages;
        this.read = read;
     }

     const library = {
        utils: function(){
            /// just don t put anything tbh
        },

        init: function(){
            this.addEventListeners();
        },

        addEventListeners : function(){
            if(createBookBtn){
                createBookBtn.addEventListener('mousedown', ()=>{
                    library.viewDrop();
                });
            }

            if(createBook){
                createBook.addEventListener('click', (event) => {
                    event.preventDefault();
                    this.renderBook(); // decided maybe explicity picking the library would be better
                })
            }
        },

        renderBook : function(){
            const title = document.getElementById('book-name');
            const author = document.getElementById('author');
            const pages = document.getElementById('pages');

            const newBook = new Book(title.value, author.value, pages.value);
            myLibrary.push(newBook);
            this.renderCard(newBook); // i feel as if returning this is better practice

            title.value = '';
            author.value = '';
            pages.value = '';

            library.viewDrop(); // toggles
        },

        renderCard : function (renderBook){
            if(container.children.length >= 30 || 30 <= myLibrary.length) throw `MAX_LENGTH REACHED`;

            
        },

        viewDrop : function(){
            const dropdown = document.querySelector('.dropdown-content');
            dropdown.classList.toggle('show');
        }
     }

     library.init();
})();