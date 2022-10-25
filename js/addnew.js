class Book {
  constructor( name, author, id) {
    this.name = name;
    this.author = author;
    this.id = id
  }
}

let bookList = JSON.parse(localStorage.getItem('books'));
if (bookList == null) {
  bookList = [];
}

function addNewBook(book) {
  bookList.push(book);
  localStorage.setItem('books', JSON.stringify(bookList));
}

document.getElementById('btn').addEventListener('click', (event) => {
  event.preventDefault();
  const bookanme = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const newBook = new Book(bookanme, author, new Date().getTime());
  addNewBook(newBook);
  document.location.href="./index.html";
});
