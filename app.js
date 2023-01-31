const addBook = document.querySelector(".add");
const modalContent = document.querySelector(".modal-content");
const modalOverlay = document.querySelector(".modal");
const content = document.querySelector(".content");
const subBook = document.querySelector(".book-sub");
let myLibrary = [];

//submit book info
subBook.addEventListener("click", () => {
  const bookTitle = document.querySelector("#title").value;
  const bookAuthor = document.querySelector("#author").value;
  const bookPages = document.querySelector("#pages").value;
  const bookStatus = document.querySelector("#seen").checked;
  const mybook = new book(bookTitle, bookAuthor, bookPages, bookStatus);
  addToLib(mybook);
  drawOnScreen(mybook);
});
//add book to lib
function addToLib(mybook) {
  myLibrary.push(mybook);
}
//draw book on screen
function drawOnScreen(book) {
  const card = document.createElement("div");
  card.classList.add("card");
  content.appendChild(card);
  const title = document.createElement("div");
  title.textContent = book.title;
  title.classList.add("title");
  card.appendChild(title);
  const divider = document.createElement("hr");
  card.appendChild(divider);
  const info = document.createElement("div");
  info.classList.add("info");
  card.appendChild(info);
  const author = document.createElement("div");
  author.textContent = `Author : ${book.author}`;
  info.appendChild(author);
  const pages = document.createElement("div");
  pages.textContent = `Pages : ${book.pages}`;
  info.appendChild(pages);
  const seen = document.createElement("div");
  if (book.status == true) {
    seen.textContent = "Completed";
  } else {
    seen.textContent = "Not Completed";
  }
  info.appendChild(seen);
  const actions = document.createElement("div");
  actions.classList.add("actions");
  card.appendChild(actions);
  const read = document.createElement("button");
  read.classList.add("read");
  read.textContent =
    seen.textContent == "Completed" ? "Set Not read" : "Set as Read";
  actions.appendChild(read);
  const remove = document.createElement("button");
  remove.classList.add("remove");
  remove.textContent = "Remove";
  actions.appendChild(remove);

  //change read status
  read.addEventListener("click", () => {
    if (read.textContent == "Set Not read") {
      seen.textContent = "not completed";
      read.textContent = "Set as Read";
    } else {
      seen.textContent = "Completed";
      read.textContent = "Set Not read";
    }
  });

  //remove card
  remove.addEventListener("click", () => {
    content.removeChild(card);
  });
}
//Book object constructor
function book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

//Add book event
addBook.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
});
//closing modal overlay
window.addEventListener("click", (e) => {
  if (e.target == modalOverlay && e.target != addBook) {
    modalOverlay.style.display = "none";
  }
});
