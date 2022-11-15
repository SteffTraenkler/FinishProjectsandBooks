const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");


//read
async function findAllBooks() {
    const db = await getDB();
    const allBooks = await db.collection("Buecher").find().sort({ title: -1, }).toArray();
    return allBooks;
}

async function findBoockById(bookId) {
    const db = await getDB();
    const foundBook = await db.collection("Buecher").findOne({ _id: new ObjectId(bookId) });
    return foundBook;
}

async function findBookByTitle(title) {
    const db = await getDB();
    const allBooks = await db.collection("Buecher").find({ title: title }).toArray();
    return allBooks;
}

async function findBooksByBookType(bookType) {
    const db = await getDB();
    const allBooks = await db.collection("Buecher").find({ bookType: bookType }).sort({ title: 1, }).toArray();
    return allBooks;
}

async function findBooksByauthor(author) {
    const db = await getDB();
    const allBooks = await db.collection("Buecher").find({ author: author }).sort({ title: 1, }).toArray;
    return allBooks;
}

async function findBooksbyfinished() {
    const db = await getDB();
    const allBooks = await db.collection("Buecher").find({ finished: true }).sort({ finishedAt: -1, }).toArray();
    return allBooks;
}

async function findBooksbyUnfinished() {
    const db = await getDB();
    const allBooks = await db.collection("Buecher").find({ finished: false }).sort({ title: 1, }).toArray();
    return allBooks;
}

async function findBooksByGenre(genre) {
    const db = await getDB();
    const allBooks = await db.collection("Buecher").find({ genre: genre }).sort({ title: 1, }).toArray();
    return allBooks;
}

async function findBooksInPossesion() {
    const db = getDB();
    const allBooks = db.collection("Buecher").find({ stillInPossession: true }).sort({ title: -1 }).toArray();
    return allBooks;
}

async function findBooksNOTInPossession() {
    const db = getDB();
    const allBooks = db.collection("Buecher").find({ stillInPossession: false }).sort({ title: -1 }).toArray();
    return allBooks;
}

//create, update, delete

async function insertNewBook(book) {
    const db = await getDB();
    const insertionResult = await db.collection("Buecher").insertOne(book);
    return insertionResult;
}

async function updateBookInfo(bookId, updateInfo) {
    const db = await getDB();
    const updateResult = await db.collection("Buecher").updateOne(
        { _id: new ObjectId(bookId) },
        { $set: updateInfo }
    );
    return updateResult;
}

async function deleteBook(bookId) {
    const db = await getDB();
    const deleteResult = await db.collection("Buecher").deleteOne({ _id: new ObjectId(bookId) });
    return deleteResult;
}

module.exports = {
    findAllBooks,
    findBoockById,
    findBookByTitle,
    findBooksByBookType,
    findBooksByauthor,
    findBooksbyfinished,
    findBooksbyUnfinished,
    findBooksByGenre,
    findBooksInPossesion,
    findBooksNOTInPossession,
    insertNewBook,
    updateBookInfo,
    deleteBook
}