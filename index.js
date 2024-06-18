const myLibrary = [];



// It turns out that I can access them through the data attribute.

// This is the constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// The steps I can take along the way. First I must figure out how to use the data attribute and to eventually link it with my 
// JS. 
// I think that this function ought to add the book to the JS not on the website
function addBookToLibrary() {
    const newDiv = document.createElement("div");
    const secondHeading = document.createElement("h2");
    const firstPara = document.createElement("p");
    const secondPara = document.createElement("p");
    const statusBtn = document.createElement("button");
    const smallBtn = document.createElement("button");
    const radioBtn = document.getElementById("check-status");

    // adding classes to the newly created elements
    secondHeading.classList.add("title-heading");
    firstPara.classList.add("author-paragraph");
    secondPara.classList.add("pages-paragraph");
    smallBtn.classList.add("small");
    smallBtn.classList.add("btn");
    smallBtn.textContent = "X";

    newDiv.appendChild(smallBtn);

    smallBtn.addEventListener("click", () => {
        if (confirm("Are you sure that you want to remove this book from your library?")) {
            gridContainer.removeChild(newDiv);
        } else {
            return;
        }
    })

    statusBtn.classList.add("read-status");
    statusBtn.classList.add("btn");
    statusBtn.textContent = "Read";
    newDiv.appendChild(statusBtn);

    statusBtn.addEventListener("click", () => {
        statusBtn.classList.toggle("unread-status");
        if (statusBtn.classList.contains("unread-status")) {
            statusBtn.textContent = "Not Read";
        } else {
            statusBtn.textContent = "Read";
        }
    })

    if (radioBtn.checked) {
        statusBtn.textContent = "Read";
        read = true;
    } else {
        statusBtn.classList.add("unread-status");
        statusBtn.textContent = "Not read";
        read = false;
    }

    let book = new Book(title.value, author.value, Number(pages.value), read);

    myLibrary.push(book);

    console.log(myLibrary);

    // Add a class to the new div
    newDiv.classList.add("grid-item");

    // The text that is going to be within these el;
    secondHeading.textContent = title.value;
    firstPara.textContent = author.value;
//    secondPara.textContent = pages.value + " pages";
    secondPara.textContent = `${pages.value} pages`;

    // If the user doesn't put in all values alert this.
    if (!title.value || !author.value || !pages.value) {
        alert("Please fill in all the values.");
        return;
    }

    // Adding everything to the newDiv element
    newDiv.appendChild(secondHeading);
    newDiv.appendChild(firstPara);
    newDiv.appendChild(secondPara);
    newDiv.appendChild(statusBtn);

    gridContainer.appendChild(newDiv);
    formContainer.style.visibility = "hidden";

    title.value = "";
    author.value = "";
    pages.value = "";
}

// selecting buttons
const bookBtn = document.getElementById("book-btn");
const addBtn = document.getElementById("add-button");
const cancelBtn = document.getElementById("cancel-button");

// selecting items
const gridContainer = document.querySelector(".grid-container");
const formContainer = document.querySelector(".form-container");
const title = document.getElementById("title-value");
const author = document.getElementById("author-value");
const pages = document.getElementById("pages-value");

// The bookBtn makes the form visible when clicked.
bookBtn.addEventListener("click", () => {
    formContainer.style.visibility = "visible";
})

// The addBtn adds Books to the library
addBtn.addEventListener("click", addBookToLibrary);

//The cancelBtn makes the form form disappear when clicked.
cancelBtn.addEventListener("click", () => {
    formContainer.style.visibility = "hidden";
});

// When the window loads which book or books would I like to see first.
window.addEventListener("DOMContentLoaded", () => {

    displayBooks(myLibrary);

})