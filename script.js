let books = [

]

const section = document.querySelector('.all-books');
const newTitle = document.querySelector('#title');
const newAuthor = document.querySelector('#author');
const addBookBtn = document.querySelector('.add-book>button');
const form = document.querySelector('form');

const removeBook = function (element, i) {

  for (let i = 0; i<books.length; i++){
    books.splice(i, 1)
  }
  
}

books.filter(removeBook)

function displayBooks(title, author) {
  const div = document.createElement('div');
  div.className = 'book';
  const titleParagragh = document.createElement('p');
  titleParagragh.textContent = title;
  const authorParagraph = document.createElement('p');
  authorParagraph.textContent = author;
  const button = document.createElement('button');
  button.textContent = 'Remove';
  button.addEventListener('click', () => {
  
  });
  const divider = document.createElement('hr');
  div.append(titleParagragh, authorParagraph, button, divider);
  section.appendChild(div);
}


const addBook = function() {

  displayBooks( newTitle.value, newAuthor.value)
  // localStorage.clear();

  const book = {
    title: newTitle.value,
    author: newAuthor.value,
  }

  books.push(book)

  localStorage.setItem('BookInformation', JSON.stringify(books));
}


form.addEventListener('submit', (event) => {
  event.preventDefault();
  // const titleInput = document.getElementById('titleInput');
  // const authorInput = document.getElementById('authorInput');
  addBook();
  // titleInput.value = '';
  // authorInput.value = '';
});
  // localStorage.setItem('BookInformation', JSON.stringify(BookInformation));



const displayStorageBooks = function() {

  if (localStorage.getItem('BookInformation')) {
    const storageInformation = JSON.parse(localStorage.getItem('BookInformation'));
    console.log (storageInformation)

    for (let i = 0; i<storageInformation.length; i++){
      displayBooks( storageInformation[i].title, storageInformation[i].author)
      
    }

  }

}


document.addEventListener("DOMContentLoaded", displayStorageBooks);



// console.log (book)

