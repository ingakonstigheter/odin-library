//   LIBRARY    //
let myLibrary = [];

function runOnLoad() {
    addBookToLibraryTest();
    document
        .getElementById("new-book-form")
        .addEventListener("click", function (event) {
            event.preventDefault();
        });
    document
        .getElementById("btn-form-submit")
        .addEventListener("click", function (event) {
            event.preventDefault();
            storeBookFromForm();
            clearForm();
            hideForm();
        });
    document.getElementById("btn-showForm").addEventListener("click", showForm);
    document.getElementById("btn-hideForm").addEventListener("click", () => {
        hideForm();
        clearForm();
    });
}
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}
Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
};
function storeBookFromForm() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;
    const book = new Book(title, author, pages, read);
    addBookToLibrary(book.title, book.author, book.pages, book.read);
}
function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBook(book);
}
function deleteBook(id) {
    myLibrary = myLibrary.filter((book) => book.id !== id);
    undisplayBook(id);
}

//  DOM-Edit    //
function displayBook(book) {
    const ul = document.querySelector(".books");

    const li = document.createElement("li");
    li.setAttribute("class", "book");
    li.setAttribute("data-id", book.id);

    const pTitle = document.createElement("p");
    pTitle.textContent = book.title;

    const pAuthor = document.createElement("p");
    pAuthor.textContent = book.author;

    const pPages = document.createElement("p");
    pPages.textContent = book.pages;

    const bRead = document.createElement("button");
    bRead.setAttribute("id", "toggleRead");
    bRead.textContent = "Change Status";
    bRead.addEventListener("click", function () {
        book.toggleReadStatus();
        updateDisplay();
    });

    const pRead = document.createElement("p");
    if (book.read) {
        pRead.textContent = "You have read this book";
    } else {
        pRead.textContent = "You have't read this book yet";
    }

    const bDelete = document.createElement("button");
    bDelete.textContent = "Delete Book";
    bDelete.addEventListener("click", function () {
        deleteBook(book.id);
    });

    li.appendChild(pTitle);
    li.appendChild(pAuthor);
    li.appendChild(pPages);
    li.appendChild(pRead);
    li.appendChild(bRead);
    li.appendChild(bDelete);
    ul.appendChild(li);
}
function displayBooks() {
    for (const book of myLibrary) {
        displayBook(book);
    }
}
function undisplayBook(id) {
    const lis = document.querySelectorAll('li.book');
    let i;
    for(i = 0; i < lis.length; i++) {
        let dataId = lis[i].getAttribute(["data-id"]);
        if(dataId === id) {
            document.querySelector(".books").removeChild(lis[i]);
        }
    }
}
function updateDisplay() {
    const booksContainer = document.querySelector('.books');
    booksContainer.innerHTML = ''; 

    myLibrary.forEach((book, index) => {
        displayBook(book, index);
    });
}

function toggleRead(id) {
    const lis = document.querySelectorAll('li.book');
    let i;    
    for(i = 0; i < lis.length; i++) {
        let dataId = lis[i].getAttribute(["data-id"]);

        if(dataId === id) {
            for(const book of myLibrary) {
                if(book.id === id) {
                    read
                }
            }
        }
    }
}
function showForm() {
    document.querySelector("form").style.height = "250px";
    document.querySelector("form").style.width = "500px";
}
function hideForm() {
    document.querySelector("form").style.height = "0";
    document.querySelector("form").style.width = "0";
}
function clearForm() {
    document.querySelector("#new-book-form").reset();
}

//  TEST    //
//remove book
//test added bookd to DOM is same as myLibrary
function displayBooksTest() {
    addBookToLibraryTest();
    displayBooks();
    
    const ul = document.querySelector(".books");
    console.log("displayBooks");
    if (ul.children.length === myLibrary.length) {
        console.log("passed test");
    } else {
        console.log("failed test");
    }
}

//adds books to library, test if lenght === nr of books added
function addBookToLibraryTest() {
    const testBooks = [
        { title: "test1", author: "test", pages: "123", read: "false" },
        { title: "test2", author: "test", pages: "123", read: "true" },
        { title: "test3", author: "test", pages: "123", read: "true" },
        { title: "test4", author: "test", pages: "123", read: "false" },
        { title: "test5", author: "test", pages: "123", read: "true" },
        { title: "test6", author: "test", pages: "123", read: "true" },
        { title: "test7", author: "test", pages: "123", read: "true" },
    ];
    console.log("adds")
    let i = 0;
    for (const book of testBooks) {
        addBookToLibrary(book.title, book.author, book.pages, book.read);
        i++;
    }
    console.log("addBookToLibrary");
    if (myLibrary.length === i) {
        console.log("passed test");
    } else {
        console.log("failed test, check the lenght of mylibrary");
    }
}
