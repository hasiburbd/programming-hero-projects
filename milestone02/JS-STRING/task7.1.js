let book = {title:'The Hobbit', author:'Tolkein', pages: 310}
let keyAll = Object.keys(book);
console.log(keyAll);
let valueAll = Object.values(book);
console.log(valueAll);
delete book.pages;
console.log(book);
book.author = null;
console.log(book);