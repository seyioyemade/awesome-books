import Book from './modules/script.js';
import { DateTime } from './modules/luxon.js';

const book = new Book();
book.submit();
book.getStorageItem();
book.showBooks();
book.showAddNew();
book.showContact();

const date = document.querySelector('.date');

setInterval(() => {
  const now = DateTime.now();

  date.innerHTML = now.toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS,
  );
}, 1000);
