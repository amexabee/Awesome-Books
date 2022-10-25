const bookListView = document.getElementById('booklist');

class BookListManger {
  constructor() {
    this.bookList = JSON.parse(localStorage.getItem('books'));
    if (this.bookList == null) {
      this.bookList = [];
    }
  }

  removeBook(book, callBack) {
    this.bookList = this.bookList.filter(
      (singleBook) => book.id !== singleBook.id,
    );
    localStorage.setItem('books', JSON.stringify(this.bookList));
    callBack();
  }
}

function initiew() {
  bookListView.innerHTML = '';
  const bookListManager = new BookListManger();
  bookListManager.bookList.forEach((element) => {
    const liNode = document.createElement('li');
    const pNode = document.createElement('p');
    const bookKText = document.createTextNode(`"${element.name}" by ${element.author}`);
    pNode.appendChild(bookKText);
    const buttonNode = document.createElement('button');
    const removeKText = document.createTextNode('Remove');
    buttonNode.appendChild(removeKText);
    buttonNode.addEventListener('click', (event) => {
      event.preventDefault();
      bookListManager.removeBook(element, () => {
        initiew();
      });
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
