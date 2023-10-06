//declare value to be the found items matching authorID with input id
const findAuthorById = (authors, id) => {
  let author = authors.find((auth) => 
                           auth.id === id, {});
  return author;
};

//declare variable id to find matching bookId to the id value of books array
function findBookById(books, bookId) {
  const id = books.find(book => book.id === bookId);
  return id;
};

//returns an array with two arrays inside of it. All inputted books are present in the first or second array.
//The first array contains book objects that represent the books _that are currently checked out_, while the second array contains book objects that represent the books _that have been returned._ You can check for the return status by looking at the first transaction object in the `borrows` array.
function partitionBooksByBorrowedStatus(books) {
  //filter through books, to compile values meeting every time returned value is true
  let returnedBooks = books.filter((book) => 
                                   book.borrows.every((borrow) => borrow.returned === true));
  //filter and use .some() as a helper function to compile values meeting the condition value false
  let checkedOut = books.filter((book) =>
                                   book.borrows.some((borrow) => borrow.returned === false));
  //creating a final value array, of the the arrays matching the above functions
  //spread operator is used to iterate through all objects meeting above criteria, otherwise it was ending at the first match of the some() function
  let allBooks = [[...checkedOut], [...returnedBooks]]; //couldnt get return to include "checkedOut", had to flip "checkedOut" and "returnedBooks" values. was ending the process after the .every() method.
  return allBooks;
};

//It should return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array.
//declare a value = book.borrows
//if accountId matches the bookId, push account 
//return array of accounts that cuts off at length 10
function getBorrowersForBook(book, accounts) {
  const borrowersId = book.borrows;
  let borrower = [];
  borrowersId.forEach((book) => {
    const account = accounts.find((account) => account.id === book.id);
    account["returned"] = book.returned;
    borrower.push(account)
  });
  borrower.length = 10;
  return borrower;
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

