const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring

// const book = getBook(2);

// const title = book.title;
// title;
// const autor = book.author;
// autor;

// const { title, author, publicationDate, genres, page } = book;
// console.log(
//   "Title: " + title,
//   ",Autor: " + author,
//   ",Data de publicacao: " + publicationDate
// );

// const [primGenero, segGenero, ...ultimo] = genres;
// console.log(
//   "Primeiro: " + primGenero,
//   ", Segundo: " + segGenero,
//   ", Ultimo: " + ultimo
// );

// const newGenero = ["epic fantasy", ...genres];
// newGenero;

// const updateBook = {
//   ...book,
//   noviePubicationData: "2001-12-2",
// };
// updateBook;

// const summary = `${title}, a ${page} page long book, was witten by ${author} and published in ${
//   publicationDate.split("-")[0]
// }`;
// summary;

// const pagesRanges = page > 1000 ? "over a thousand" : "less than 1000";
// pagesRanges;
// console.log(`The book has ${pagesRanges} pages`);

// // function getYear(str){
// //   return str.split("-")[0]
// // }
// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));
// console.log(true && "Some String");
// console.log(false && "Some String");

// console.log(true || "Some String");
// console.log(false || "Some String");

// console.log(book.reviews.librarything.reviewsCount);

// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// const books = getBooks();

// const e = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(e);

// const title = books.map((book) => book.title);
// title;

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));
// essentialData;

// const longBooks = books.filter((book) => book.pages > 500);

// longBooks;

// const adventureBooks = books
//   .filter((books) => books.genres.includes("adventure"))
//   .map((book) => book.title);
// adventureBooks;

// const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// pagesAllBooks;

// const arr = [3, 7, 1, 9, 6];
// const sortedArr = arr.slice().sort((a, b) => a - b);
// sortedArr;
// arr;

// const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
// sortedByPages;
// const newBook = {
//   id: 6,
//   title: "Harry Potter and the Chamber of Secrets",
//   author: "J. K. Rowling",
// };
// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// booksAfterDelete;

// const bookAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 1210 } : book
// );
// bookAfterUpdate;

// fetch("https://jsonplaceholder.typicode.com/todos/")

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data1) => data1);

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data1 = await res.json();
  // console.log(data1);
  return data1;
}

const todos = getTodos();
console.log(todos);
