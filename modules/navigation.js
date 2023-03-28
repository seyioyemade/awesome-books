export const showBooks = (booksSection, addNewSection, contactSection) => {
  const listMenu = document.querySelector('.listMenu');
  listMenu.addEventListener('click', () => {
    booksSection.classList.add('show');
    addNewSection.classList.remove('show');
    contactSection.classList.remove('show');
  });
};

export const showAddNew = (booksSection, addNewSection, contactSection) => {
  const addNewMenu = document.querySelector('.addNewMenu');
  addNewMenu.addEventListener('click', () => {
    if (booksSection.classList.contains('show')) {
      booksSection.classList.remove('show');
      booksSection.classList.add('hide');
    }
    addNewSection.classList.add('show');
    contactSection.classList.remove('show');
  });
};

export const showContact = (booksSection, addNewSection, contactSection) => {
  const contactMenu = document.querySelector('.contactMenu');
  contactMenu.addEventListener('click', () => {
    if (booksSection.classList.contains('show')) {
      booksSection.classList.remove('show');
      booksSection.classList.add('hide');
    }

    addNewSection.classList.remove('show');
    contactSection.classList.add('show');
  });
};