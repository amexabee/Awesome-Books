class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
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
  const newBook = new Book(bookanme, author);
  addNewBook(newBook);
});
