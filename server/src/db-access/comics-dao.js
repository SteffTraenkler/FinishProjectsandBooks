const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

//read
async function findAllComics() {
    const db = await getDB();
    const allComics = await db.collection("Manga").find().sort({ title: -1 }).toArray();
    return allComics;
}

async function findRecentComics() {
    const db = await getDB();
    const allComics = await db.collection("Manga").find().sort({ addedAt: -1 }).toArray();
    return allComics;
}

async function findComicById(comicId) {
    const db = await getDB();
    const foundComic = await db.collection("Manga").findOne({ _id: new ObjectId(comicId) });
    return foundComic;
}

async function findComicByTitle(title) {
    const db = await getDB();
    const allComics = await db.collection("Manga").find({ title: title }).sort({ title: -1 }).sort({ comicNumberFromSeries: -1 }).toArray();
    return allComics;
}

async function findComicByAuthor(author) {
    const db = await getDB();
    const allComics = await db.collection("Manga").find({ author: author }).sort({ title: -1 }).toArray();
    return allComics;
}

async function findComicByGenre(genre) {
    const db = await getDB();
    const allComics = await db.collection("Manga").find({ genre: genre }).sort({ title: -1 }).toArray();
    return allComics;
}

async function findOneshot() {
    const db = await getDB();
    const allComics = await db.collection("Manga").find({ series: false }).sort({ title: -1 }).toArray();
    return allComics;
}

async function findOpenSeriesComics() {
    const db = await getDB();
    const allComics = await db.collection("Manga").find({ seriesfinished: false }).sort({ title: -1 }).toArray();
    return allComics;
}

async function findUnfinishedComics() {
    const db = await getDB();
    const allComics = await db.collection("Manga").find({ finished: false }).sort({ addedAt: 1 }).toArray();
    return allComics;
}

async function findComicsInPossession() {
    const db = await getDB();
    const allComics = await db.collection("Manga").find({ stillInPossession: true }).sort({ title: -1 }).toArray();
    return allComics;
}

async function findComicNOTInPossession() {
    const db = await getDB();
    const allComics = await db.collection("Manga").find({ stillInPossession: false }).sort({ title: -1 }).toArray();
    return allComics;
}

//create update delete
async function insertNewComic(comic) {
    const db = await getDB();
    const insertionResult = await db.collection("Manga").insertOne(comic);
    return insertionResult;
}

async function updateComic(comicId, updateInfo) {
    const db = await getDB();
    const updateResult = await db.collection("Manga").updateOne(
        { _id: new ObjectId(comicId) },
        { $set: updateInfo }
    );
    return updateResult;
}

async function deleteComic(comicId) {
    const db = await getDB();
    const deleteResult = await db.collection("Manga").deleteOne({ _id: new ObjectId(comicId) });
    return deleteResult;
}

module.exports = {
    findAllComics,
    findRecentComics,
    findComicById,
    findComicByTitle,
    findComicByAuthor,
    findComicByGenre,
    findOneshot,
    findOpenSeriesComics,
    findUnfinishedComics,
    findComicsInPossession,
    findComicNOTInPossession,
    insertNewComic,
    updateComic,
    deleteComic
}