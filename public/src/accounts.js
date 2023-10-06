function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++) {
    let account = accounts[i]
    if (account.id === id)
      return account
  }
}


const sortAccountsByLastName = accounts => {
  const sorted = accounts.sort((a, b) => {
    const nameA = a.name.last;
    const nameB = b.name.last;
    if(nameA < nameB)
      return -1;
    if(nameB < nameA)
      return 1;
  });
  return sorted;
};


function getTotalNumberOfBorrows(account, books) {
  const {id: personID} = account;
  return books.reduce((total, book) => {
    return (total + book.borrows.filter(borrow => borrow.id === personID)
                                .reduce((totalBorrows, borrow) => totalBorrows+1, 0)
  )}, 0);
};

//declare final array variable
//declare a variable to store borrow array
//loop through the books and borrows array
//destructure books array 
//filter the authors array to return the object author information
function getBooksPossessedByAccount(account, books, authors) {
  let result = []
  let borrowResult = []
  books.forEach((book) => {
    const borrowed = book.borrows
    const bookInfo = {
      id: book.id,
      title: book.title,
      genre: book.genre,
      authorId: book.authorId,
      borrows: {},
      author: {}
    };
    const {id, title, genre, authorId, borrows, author} = bookInfo;
    borrowed.forEach((ifBorrowed) => {
      if (ifBorrowed.id === account.id && ifBorrowed.returned === false) {
        result.push(bookInfo);
        borrowResult.push(ifBorrowed);
        bookInfo.borrows = borrowResult;
        bookInfo.author = authors.filter((auth) => auth.id === bookInfo.authorId)[0]; //[0] returns object information nested in the array as an object of the index value
      };
    });
  });
  return result;         
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

