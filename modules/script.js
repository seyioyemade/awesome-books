import * as navigation from './navigation.js';

export default class Book {
  constructor() {
    this.newTitle = document.querySelector('#title');
    this.newAuthor = document.querySelector('#author');
    this.form = document.querySelector('form');
    this.bookInformation = 'BookInformation';
    this.bookList = document.createElement('ul');
    this.listMenu = document.querySelector('.listMenu');
    this.addNewMenu = document.querySelector('.addNewMenu');
    this.contactMenu = document.querySelector('.contactMenu');
    this.booksSection = document.querySelector('.all-books');
    this.booksSection.appendChild(this.bookList);
    this.addNewSection = document.querySelector('.add-new');
    this.contactSection = document.querySelector('.contact-info');
    this.booksCollection = JSON.parse(localStorage.getItem(this.bookInformation)) || [];
  }

  displayBooks(id, title, author) {
    const li = document.createElement('li');
    li.className = 'book';
    li.id = id;
    // const titleParagragh = document.createElement('p');
    li.textContent = `"${title}" by ${author}`;
    const button = document.createElement('button');
    button.textContent = 'Remove';
    li.appendChild(button);
    button.addEventListener('click', () => {
      this.removeBook(li.id);
    });

    this.bookList.appendChild(li);
  }

  addBook() {
    const book = {
      id: Math.floor(Math.random() * 10000000),
      title: this.newTitle.value,
      author: this.newAuthor.value,
    };

    if (!(book.title === '' || book.author === '')) {
      this.booksCollection.push(book);
      this.setStorageItem();
      this.displayBooks(book.id, book.title, book.author);
    }
    this.newTitle.value = '';
    this.newAuthor.value = '';
  }

  removeBook(id) {
    this.booksCollection = this.booksCollection.filter((item) => item.id !== Number(id));

    this.setStorageItem();

    const currentBooks = JSON.parse(localStorage.getItem(this.bookInformation));

    const allBooks = document.querySelectorAll('.book');

    allBooks.forEach((book) => {
      book.style.display = 'none';
    });

    currentBooks.forEach((book) => {
      this.displayBooks(book.id, book.title, book.author);
    });
  }

  setStorageItem() {
    localStorage.setItem(this.bookInformation, JSON.stringify(this.booksCollection));
  }

  getStorageItem() {
    this.booksCollection.forEach((book) => {
      this.displayBooks(book.id, book.title, book.author);
    });
  }

  submit() {
    this.form.addEventListener('submit', () => this.addBook());
  }

  showBooks() {
    navigation.showBooks(this.booksSection, this.addNewSection, this.contactSection);
  }

  showAddNew() {
    navigation.showAddNew(this.booksSection, this.addNewSection, this.contactSection);
  }

  showContact() {
    navigation.showContact(this.booksSection, this.addNewSection, this.contactSection);
  }
}
