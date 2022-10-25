class Book {
  constructor(name, author, id) {
    this.name = name;
    this.author = author;
    this.id = id;
  }
}

class BookListManger {
  constructor() {
    this.bookList = JSON.parse(localStorage.getItem('books'));
    if (this.bookList == null) {
      this.bookList = [];
    }
  }

  addNewBook(book) {
    this.bookList.push(book);
    localStorage.setItem('books', JSON.stringify(this.bookList));
  }
}

document.getElementById('btn').addEventListener('click', (event) => {
  event.preventDefault();
  const bookanme = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const newBook = new Book(bookanme, author, new Date().getTime());
  new BookListManger().addNewBook(newBook);
  document.location.href = './index.html';
});
