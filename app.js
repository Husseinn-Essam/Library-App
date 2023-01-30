const addBook = document.querySelector(".add");
const modalContent = document.querySelector(".modal-content");
const modalOverlay = document.querySelector(".modal");
const content = document.querySelector(".content");
//let bookTitle = document.querySelector("#title").value;
const subBook = document.querySelector(".book-sub");
let myLibrary = [];

//submit book info
subBook.addEventListener("click", () => {
  let bookTitle = document.querySelector("#title").value;
  mybook = new book(bookTitle);
  addToLib(mybook);
  drawOnScreen(myLibrary);
});
//add book to lib
function addToLib(mybook) {
  myLibrary.push(mybook);
}
//draw book on screen
function drawOnScreen(arr) {
  for (var i = 0; i < arr.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    content.appendChild(card);
  }
}

function book(title) {
  this.title = title;
  //   this.author = author;
  //   this.pages = pages;
  //   this.status = status;
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
