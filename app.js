// Declarations
const addBook = document.querySelector('.add');
const modalOverlay = document.querySelector('.modal');
const content = document.querySelector('.content');
const subBook = document.querySelector('.book-sub');
const myLibrary = [];

// Book object constructor
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// add book to lib
function addToLib(mybook) {
  myLibrary.push(mybook);
}
// draw book on screen
function drawOnScreen(book) {
  if (book.title) {
    const card = document.createElement('div');
    const title = document.createElement('div');
    const divider = document.createElement('hr');
    const info = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const seen = document.createElement('div');
    const actions = document.createElement('div');
    const read = document.createElement('button');
    const remove = document.createElement('button');
    
    card.classList.add('card');
    title.classList.add('title');
    info.classList.add('info');
    actions.classList.add('actions');
    read.classList.add('read');
    remove.classList.add('remove');
    
    title.textContent = book.title;
    author.textContent = `Author : ${book.author}`;
    pages.textContent = `Pages : ${book.pages}`;
    read.textContent = seen.textContent == 'Completed' ? 'Set Not read' : 'Set as Read';
    remove.textContent = 'Remove';
    
    content.appendChild(card);
    card.appendChild(title);
    card.appendChild(divider);
    card.appendChild(info);
    info.appendChild(author);
    info.appendChild(pages);
    info.appendChild(seen);
    card.appendChild(actions);
    actions.appendChild(read);
    actions.appendChild(remove);
    
    if (book.status == true) {
      seen.textContent = 'Completed';
    } else {
      seen.textContent = 'Not Completed';
    }

    // change read status
    read.addEventListener('click', () => {
      if (read.textContent == 'Set Not read') {
        seen.textContent = 'not completed';
        read.textContent = 'Set as Read';
      } else {
        seen.textContent = 'Completed';
        read.textContent = 'Set Not read';
      }
    });

    // remove card
    remove.addEventListener('click', () => {
      content.removeChild(card);
    });
  } else {
    alert('You must enter a book title');
  }
}

// submit book info
subBook.addEventListener('click', (e) => {
  e.preventDefault();
  const bookTitle = document.querySelector('#title').value;
  const bookAuthor = document.querySelector('#author').value;
  const bookPages = document.querySelector('#pages').value;
  const bookStatus = document.querySelector('#seen').checked;
  const mybook = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
  addToLib(mybook);
  drawOnScreen(mybook);
  modalOverlay.style.display = 'none';
});

// Add book event
addBook.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
});
// closing modal overlay
window.addEventListener('click', (e) => {
  if (e.target == modalOverlay && e.target != addBook) {
    modalOverlay.style.display = 'none';
  }
});
