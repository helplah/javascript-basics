var assertEquals = require("./assert-helper");

var books = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    isAvailable: true
  },
  {
    author: "JRR Tolkkien",
    title: "Lord of the Rings",
    isAvailable: true
  },
  {
    author: "JK Rowling",
    title: "Harry Potter",
    isAvailable: false
  }
];

/* 1. Define a function listTitles(booksArray) that takes in an array of book objects
       and returns an array of titles (strings) */
function listTitles(booksArray) {
  const booksTitle = [];
  for (let book of booksArray) {
    booksTitle.push(book.title);
  }

  return booksTitle;
}

// Assertions (do not change)
assertEquals(listTitles(books), [
  "The Road Ahead",
  "Lord of the Rings",
  "Harry Potter"
]);

/* 2. Define a function listAuthors(booksArray) that takes in an array of book objects
       and returns an array of authors (strings) */

function listAuthors(booksArray) {
  const authors = [];
  for (let book of booksArray) {
    authors.push(book.author);
  }

  return authors;
}

// Assertions (do not change)
assertEquals(listAuthors(books), ["Bill Gates", "JRR Tolkkien", "JK Rowling"]);

/* 3. Define a more general function listValues(booksArray, key) that takes in an array
       of book objects and returns an array of authors (strings) */

function listValues(booksArray, key) {
  if (key === "author") {
    return listAuthors(booksArray);
  } else if (key === "title") {
    return listTitles(booksArray);
  }
}

// Assertions (do not change)
assertEquals(listValues(books, "author"), [
  "Bill Gates",
  "JRR Tolkkien",
  "JK Rowling"
]);
assertEquals(listValues(books, "title"), [
  "The Road Ahead",
  "Lord of the Rings",
  "Harry Potter"
]);

// 4. Define a function getAvailableBooks(booksArray) that returns a list of available books

function getAvailableBooks(booksArray) {
  const availableBooks = [];
  for (let book of booksArray) {
    if (book.isAvailable) {
      availableBooks.push(book.title);
    }
  }

  return availableBooks;
}

// Assertions (do not change)
assertEquals(getAvailableBooks(books), ["The Road Ahead", "Lord of the Rings"]);
