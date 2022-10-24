/* eslint no-use-before-define: ["error", {"functions":false}] */

const bookListView = document.getElementById('booklist');

let bookList = JSON.parse(localStorage.getItem('books'));
if (bookList == null) {
  bookList = [];
}

function removeBook(book) {
  bookList = bookList.filter(
    (singleBook) => book.name !== singleBook.name && book.author !== singleBook.author,
  );
  localStorage.setItem('books', JSON.stringify(bookList));
  initiew();
}

function initiew() {
  bookListView.innerHTML = '';
  bookList.forEach((element) => {
    const liNode = document.createElement('li');
    const pNode = document.createElement('p');
    const bookKText = document.createTextNode(element.name);
    pNode.appendChild(bookKText);
    const buttonNode = document.createElement('button');
    const removeKText = document.createTextNode('Remove');
    buttonNode.appendChild(removeKText);

    buttonNode.addEventListener('click', (event) => {
      event.preventDefault();
      removeBook(element);
    });

    liNode.appendChild(pNode);
    liNode.appendChild(buttonNode);
    bookListView.appendChild(liNode);
  });
}

window.addEventListener(
  'load',
  () => {
    initiew();
  },
  false,
);
