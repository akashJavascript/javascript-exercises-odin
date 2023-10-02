const getTheTitles = function(books) {
    let bookTitles = [];
for (const book of books) {
   for (const key in book) {
    if (book[key] === book.title ) {
        bookTitles.push(book[key])
    }
   }
}
return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
