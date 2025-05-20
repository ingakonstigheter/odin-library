//   LIBRARY    //
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}
//  DOM-Edit    //
function displayBooks() {
    const ul = document.querySelector(".books");
    if (myLibrary.length > 0) {
        for (const book of myLibrary) {
            const li = document.createElement("li");
            li.setAttribute("class", "book");
            const pTitle = document.createElement("p");
            const pAuthor = document.createElement("p");
            const pPages = document.createElement("p");
            const pRead = document.createElement("p");
            pTitle.textContent = book.author;
            pAuthor.textContent = book.author;
            pPages.textContent = book.pages;
            if (book.read) {
                pRead.textContent = "I have read this book";
            } else {
                pRead.textContent = "I have not read this book yet";
            }
            li.appendChild(pTitle);
            li.appendChild(pAuthor);
            li.appendChild(pPages);
            li.appendChild(pRead);
            ul.appendChild(li);
        }
    }
}

//  TEST    //
addBookToLibraryTest();

displayBooksTest();

//test added bookd to DOM is same as myLibrary
function displayBooksTest() {
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
    addBookToLibrary("test", "test", 123, true);
    addBookToLibrary("test2", "test", 123, true);
    addBookToLibrary("test3", "test", 123, true);
    addBookToLibrary("test4", "test", 123, true);
    addBookToLibrary("test5", "test", 123, true);
	addBookToLibrary("test6", "test", 123, true);
    addBookToLibrary("test7", "test", 123, true);

	console.log("addBookToLibrary");
    if (myLibrary.length === 7) {
        console.log("passed test");
    } else {
        console.log("failed test, check the lenght of mylibrary");
    }
}
