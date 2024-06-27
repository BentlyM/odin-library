const runLibrary = (function(){ // I.I.F.E
     const container = document.querySelector('.container');
     const createBook = document.querySelector('#add-book'); 
     const createBookBtn = document.getElementById('books'); 
     const myLibrary = [];
     let count = 0;

     function Book(title, author, pages, read){
        this.title = title; 
        this.author = author; 
        this.pages = pages;
        this.read = read;
     }

     const library = { 
        init: function(){
            this.addEventListeners();
        },

        utils: function(type, name){
            const el = document.createElement(type);
            el.className = name;

            return { 
                el,
                setText(text){
                    el.textContent = text;
                },
            };
        },

        addEventListeners : function(){
            if(createBookBtn){
                createBookBtn.addEventListener('mousedown', ()=>{
                    this.viewDrop();
                });
            }

            if(createBook){
                createBook.addEventListener('click', (event) => {
                    event.preventDefault();
                    this.renderBook();
                })
            }
        },

        renderBook : function(){
            const title = document.getElementById('book-name');
            const author = document.getElementById('author');
            const pages = document.getElementById('pages');

            const newBook = new Book(title.value, author.value, pages.value);
            myLibrary.push(newBook);
            this.renderCard(newBook);

            title.value = '';
            author.value = '';
            pages.value = '';

            this.viewDrop(); // toggles
        },

        renderCard : function (renderBook){
            if(container.children.length >= 30 || 30 <= myLibrary.length) throw `MAX_LENGTH REACHED`;

            const card = this.utils('div','card');

            const numCard = this.utils('div','card-number');
            numCard.el.textContent = count++ + 1;

            const cardContent = this.utils('div','card-content');
            this.displayContent(renderBook.title , renderBook.author, renderBook.pages, cardContent.el);

            const editCard = this.utils('div','mutate-card');

            card.el.appendChild(numCard.el);
            card.el.appendChild(cardContent.el);
            card.el.appendChild(editCard.el);
            container.appendChild(card.el);
        },

        displayContent : function(title, author, pages, cardContent){
            const displayTitle = this.utils('span','displayTitle');
            const displayAuthor = this.utils('span','displayAuthor');
            const displayPages = this.utils('span','displayPages');


            displayTitle.setText(`Title: ${title}`);
            displayAuthor.setText(`Author: ${author}`); 
            displayPages.setText(`Pages: ${pages}`);

            cardContent.appendChild(displayTitle.el);
            cardContent.appendChild(displayAuthor.el);
            cardContent.appendChild(displayPages.el);

            console.log(count);
        },

        viewDrop : function(){
            const dropdown = document.querySelector('.dropdown-content');
            dropdown.classList.toggle('show');
        }
     }

     library.init();
})();