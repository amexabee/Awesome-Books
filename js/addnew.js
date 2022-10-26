/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
class Book {
  constructor(name, author, id) {
    this.name = name;
    this.author = author;
    this.id = id;
  }
}

document.getElementById('btn').addEventListener('click', (event) => {
  event.preventDefault();
  const bookanme = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const newBook = new Book(bookanme, author, new Date().getTime());
  new BookListManger().addNewBook(newBook);
  location.reload();
});
