class Book {
  constructor() {
    this.section = document.querySelector('.all-books');
    this.newTitle = document.querySelector('#title');
    this.newAuthor = document.querySelector('#author');
    this.form = document.querySelector('form');
    this.bookInformation = 'BookInformation';
    this.booksCollection = JSON.parse(localStorage.getItem(this.bookInformation)) || [];
  }

  displayBooks(id, title, author) {
    const div = document.createElement('div');
    div.className = 'book';
    div.id = id;
    const titleParagragh = document.createElement('p');
    titleParagragh.textContent = `"${title}" by ${author}`;
    const button = document.createElement('button');
    button.textContent = 'Remove';

    button.addEventListener('click', () => {
      this.removeBook(div.id);
    });

    div.append(titleParagragh, button);
    this.section.appendChild(div);
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
}

const book = new Book();
book.submit();
book.getStorageItem();
