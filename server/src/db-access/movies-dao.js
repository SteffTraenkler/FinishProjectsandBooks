const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

//read
async function findAllMovies() {
    const db = await getDB();
    const allMovies = await db.collection("Anime/Filme").find().sort({ title: -1 }).toArray();
    return allMovies;
}

async function findMovieById(movieId) {
    const db = await getDB();
    const foundMovie = await db.collection("Anime/Filme").findOne({ _id: new ObjectId(movieId) });
    return foundMovie;
}

async function findMovieByTitle(title) {
    const db = await getDB();
    const allMovies = await db.collection("Anime/Filme").find({ title: title }).sort({ title: -1 }).toArray();
    return allMovies;
}

async function findMovieByStudio(studio) {
    const db = await getDB();
    const allMovies = await db.collection("Anime/Filme").find({ studio: studio }).sort({ title: -1 }).toArray();
    return allMovies;
}

async function findMovieByGenre(genre) {
    const db = await getDB();
    const allMovies = await db.collection("Anime/Filme").find({ genre: genre }).sort({ title: -1 }).toArray();
    return allMovies;
}

async function findMovieByLanguage(language) {
    const db = await getDB();
    const allMovies = await db.collection("Anime/Filme").find({ language: language }).sort({ title: -1 }).toArray();
    return allMovies;
}

async function findSeries() {
    const db = await getDB();
    const allMovies = db.collection("Anime/Filme").find({ series: true }).sort({ title: -1 }).toArray();
    return allMovies;
}

async function findNoSeriesMovies() {
    const db = await getDB();
    const allMovies = await db.collection("Anime/Filme").find({ series: false }).sort({ title: -1 }).toArray();
    return allMovies;
}

async function findFinishedSeries() {
    const db = await getDB();
    const allMovies = await db.collection("Anime/Filme").find({ seriesfinished: true }).sort({ title: -1 }).toArray();
    return allMovies;
}

async function findUnfinishedSeries() {
    const db = await getDB();
    const allMovies = await db.collection("Anime/Filme").find({ seriesfinished: false }).sort({ title: -1 }).toArray();
    return allMovies;
}

async function findAllAnime() {
    const db = await getDB();
    const allMovies = db.collection("Anime/Filme").find({ anime: true }).sort({ title: -1 }).toArray();
    return allMovies;
}

async function findAllNonAnime() {
    const db = await getDB();
    const allMovies = await db.collection("Anime/Filme").find({ anime: false }).sort({ title: -1 }).toArray();
    return allMovies;
}

async function findAllStreamingMovies() {
    const db = await getDB();
    const allMovies = await db.collection("Anime/Filme").find({ streaming: true }).sort({ addedAt: -1 }).toArray();
    return allMovies;
}

async function findAllDiscMovies() {
    const db = await getDB();
    const allMovies = await db.collection("Anime/Filme").find({ streaming: false }).sort({ title: -1 }).toArray();
    return allMovies;
}

async function findMoviesByStreamingPlatform(streamingPlatform) {
    const db = await getDB();
    const allMovies = await db.collection("Anime/Filme").find({ streamingPlatform: streamingPlatform }).sort({ title: -1 }).toArray();
    return allMovies;
}

async function findUnfinishedMovies() {
    const db = await getDB();
    const allMovies = await db.collection("Anime/Filme").find({ finished: false }).sort({ title: -1 }).toArray();
    return allMovies;
}

async function findFinishedMovies() {
    const db = await getDB();
    const allMovies = await db.collection("Anime/Filme").find({ finished: true }).sort({ finishedAt: -1 }).toArray();
    return allMovies;
}

async function findMoviesInPossession() {
    const db = await getDB();
    const allMovies = await db.collection("Anime/Filme").find({ stillInPossession: true }).sort({ title: -1 }).toArray();
    return allMovies;
}

async function findMoviesNOTInPossession() {
    const db = await getDB();
    const allMovies = await db.collection("Anime/Filme").find({ stillInPossession: false }).sort({ title: -1 }).toArray();
    return allMovies;
}

//create update delete
async function insertNewMovie(movie) {
    const db = await getDB();
    const insertionResult = await db.collection("Anime/Filme").inserOne(movie);
    return insertionResult;
}

async function updateMovieInfo(movieId, updateInfo) {
    const db = await getDB();
    const updateResult = await db.collection("Anime/Filme").updateOne(
        { _id: new ObjectId(movieId) },
        { $set: updateInfo }
    );
    return updateResult;
}

async function deleteMovie(movieId) {
    const db = await getDB();
    const deleteResult = await db.collection("Anime/Filme").deleteOne({ _id: new ObjectId(movieId) });
    return deleteResult;
}

module.exports = {
    findAllMovies,
    findMovieById,
    findMovieByTitle,
    findMovieByStudio,
    findMovieByGenre,
    findMovieByLanguage,
    findSeries,
    findNoSeriesMovies,
    findFinishedSeries,
    findUnfinishedSeries,
    findAllAnime,
    findAllNonAnime,
    findAllStreamingMovies,
    findAllDiscMovies,
    findMoviesByStreamingPlatform,
    findUnfinishedMovies,
    findFinishedMovies,
    findMoviesInPossession,
    findMoviesNOTInPossession,
    insertNewMovie,
    updateMovieInfo,
    deleteMovie
}