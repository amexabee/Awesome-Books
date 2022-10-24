let bookListView = document.getElementById("booklist");



let bookList =  JSON.parse(localStorage.getItem("books"));
if(bookList == null ){
    bookList = []
}

function initiew(){
    bookListView.innerHTML = "";
    bookList.forEach(element => {
        const liNode =  document.createElement("li");
        const pNode = document.createElement("p");
        const bookKText = document.createTextNode(element.name)
        pNode.appendChild(bookKText)
        const buttonNode = document.createElement("button");
        const removeKText = document.createTextNode("Remove")
        buttonNode.appendChild(removeKText)
    
        buttonNode.addEventListener("click", (event) => {
            removeBook(element)
        })
    
        liNode.appendChild(pNode)
        liNode.appendChild(buttonNode)
        bookListView.appendChild(liNode)
    });
    
}

window.addEventListener('load', function () {
     initiew()
  }, false);

function removeBook(book){
    bookList =  bookList.filter((singleBook) => {
         return (book.name != singleBook.name && book.author != singleBook.author)
      })
      localStorage.setItem("books", JSON.stringify(bookList))
      initiew()
}   