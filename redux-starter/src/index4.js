// const { Map } = require('immutable');
const { produce } = require ('immer');
let book = { title: 'Harry Potter'};

function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    })
}

let book1 = publish(book);
console.log("book", book)
console.log("book1", book1)
