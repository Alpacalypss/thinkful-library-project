//declare value to be the found items matching authorID with input id
const findAuthorById = (authors, id) => {
  let author = authors.find((auth) => 
                           auth.id === id, {}) //why object on the inside vs the array on the outside in the previous function
  return author
}

function findBookById(books, id) {}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
