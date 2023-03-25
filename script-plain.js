let books = JSON.parse(localStorage.getItem('BookInformation')) || [];

const section = document.querySelector('.all-books');
const newTitle = document.querySelector('#title');
const newAuthor = document.querySelector('#author');
const form = document.querySelector('form');

function displayBooks(title, author, id) {
  const div = document.createElement('div');
  div.className = 'book';
  div.id = id;
  const titleParagragh = document.createElement('p');
  titleParagragh.textContent = title;
  const authorParagraph = document.createElement('p');
  authorParagraph.textContent = author;
  const button = document.createElement('button');
  button.textContent = 'Remove';

  button.addEventListener('click', () => {
    books = books.filter((item) => item.id !== Number(id));

    localStorage.setItem('BookInformation', JSON.stringify(books));
    const currentBooks = JSON.parse(localStorage.getItem('BookInformation'));

    const allBooks = document.querySelectorAll('.book');

    allBooks.forEach((book) => {
      book.style.display = 'none';
    });

    currentBooks.forEach((book) => {
      displayBooks(book.title, book.author, book.id);
    });
  });

  const divider = document.createElement('hr');
  div.append(titleParagragh, authorParagraph, button, divider);
  section.appendChild(div);
}

const addBook = function () {
  const book = {
    id: Math.floor(Math.random() * 10000000),
    title: newTitle.value,
    author: newAuthor.value,
  };

  books.push(book);

  localStorage.setItem('BookInformation', JSON.stringify(books));
  displayBooks(newTitle.value, newAuthor.value, book.id);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!(newTitle.value === '' || newAuthor.value === '')) { addBook(); }
  newTitle.value = '';
  newAuthor.value = '';
});
