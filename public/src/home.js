function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

//set a counter
//map to iterate through books array
//forEach to iterate through books.borrows array
//use ternary operator to add to total anytime conditions are met
function getBooksBorrowedCount(books) {
  let total = 0
  const borrowed = books.map((book) =>
                            book.borrows);
  borrowed.forEach((borrows) => {
                  borrows.forEach((borrow) =>
                                 borrow.returned === false ? total=total+1 : total);
  });
  return total
}

/*It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.
Each object in the returned array has two keys:

- The `name` key which represents the name of the genre.
- The `count` key which represents the number of times the genre occurs.

Even if there is a tie, the array should only contain no more than five objects. */

function getMostCommonGenres(books) {
  let map = {};
  books.forEach((check) => {
    if (map[check.genre]) {
      map[check.genre]++;
    }
    else {
      map[check.genre] = 1
    }
  });
  return Object.entries(map).map(([name, count]) => {
      return {name, count}
  }).sort((a, b) => a.count < b.count ? 1 : -1) //ternary operator optional due to above if/else, could also be written b.count - a.count
  .slice(0, 5); //slice method in place of a .length to limit to top 5
};
 
/* It returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.

Each object in the returned array has two keys:

- The `name` key which represents the title of the book.
- The `count` key which represents the number of times the book has been borrowed.

Even if there is a tie, the array should only contain no more than five objects.*/

function getMostPopularBooks(books) {
    return books.map((book) => {
      return {name: book.title, count: book.borrows.length}
    }).sort((a, b) => a.count < b.count ? 1: -1)
  .slice(0, 5)
};

/*It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.

Each object in the returned array has two keys:

- The `name` key which represents the first and last name of the author.
- The `count` key which represents the number of times the author's books have been borrowed.

Even if there is a tie, the array should contain no more than five objects.*/

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((auth) => {
    let author = {name: `${auth.name.first} ${auth.name.last}`,
                  count: 0};
    books.forEach((book) => {
      if (book.authorId === auth.id) {
        author.count += book.borrows.length //adding to the author count variable for each id in the book borrows array
      }
    });
    result.push(author)
  })
  return result.sort((a, b) => a.count < b.count ? 1 : -1)
  .slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
