const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

//read
async function findAllGames() {
    const db = await getDB();
    const allGames = await db.collection("Games").find().sort({ title: -1 }).toArray();
    return allGames;
}

async function findGameById(gameId) {
    const db = await getDB();
    const foundGame = await db.collection("Games").findOne({ _id: new ObjectId(gameId) });
    return foundGame;
}

async function findGameByTitle(title) {
    const db = await getDB();
    const allGames = await db.collection("Games").find({ title: title }).sort({ title: -1 }).toArray();
    return allGames;
}

async function findGameByPublisher(publisher) {
    const db = await getDB();
    const allGames = await db.collection("Games").find({ publisher: publisher }).sort({ title: -1 }).toArray();
    return allGames;
}

async function findGamesWithUnknownPublisher() {
    const db = await getDB();
    const allGames = await db.collection("Games").find({ publisher: "Unknown" }).sort({ title: -1 }).toArray();
    return allGames;
}

async function findGameByGenre(genre) {
    const db = await getDB();
    const allGames = await db.collection("Games").find({ genre: genre }).sort({ title: -1 }).toArray();
    return allGames;
}

async function findGameByLanguage(language) {
    const db = await getDB();
    const allGames = await db.collection("Games").find({ language: language }).sort({ title: -1 }).toArray();
    return allGames;
}

async function findGameByPlatform(platform) {
    const db = await getDB();
    const allGames = await db.collection("Games").find({ platform: platform }).sort({ title: -1 }).toArray();
    return allGames;
}

async function findGameWithoutPlatform() {
    const db = await getDB();
    const allGames = await db.collection("Games").find({ platform: "No Platform added?" }).sort({ title: -1 }).toArray();
    return allGames;
}

async function findDiscGames() {
    const db = await getDB();
    const allGames = await db.collection("Games").find({ disc: true }).sort({ title: -1 }).toArray();
    return allGames;
}

async function findDigitalOnlyGames() {
    const db = await getDB();
    const allGames = await db.collection("Games").find({ disc: false }).sort({ title: -1 }).toArray();
    return allGames;
}

async function findGamesInPossesion() {
    const db = await getDB();
    const allGames = await db.collection("Games").find({ stillInPossession: true }).sort({ title: -1 }).toArray();
    return allGames;
}

async function findGamesNOTInPossession() {
    const db = await getDB();
    const allGames = await db.collection("Games").find({ stillInPossession: false }).sort({ title: -1 }).toArray();
    return allGames;
}

async function findFinishedGames() {
    const db = await getDB();
    const allGames = await db.collection("Games").find({ finished: true }).sort({ finishedAt: -1 }).toArray();
    return allGames;
}

async function findUnfinishedGames() {
    const db = await getDB();
    const allGames = await db.collection("Games").find({ finished: false }).sort({ title: -1 }).toArray();
    return allGames;
}

//create, update, delete
async function insertNewGame(game) {
    const db = await getDB();
    const insertionResult = await db.collection("Games").inserOne(game);
    return insertionResult;
}

async function updateGameInfo(gameId, updateInfo) {
    const db = await getDB();
    const updateResult = await db.collection("Games").updateOne(
        { _id: new ObjectId(gameId) },
        { $set: updateInfo }
    );
    return updateResult;
}

async function deleteGame(gameId) {
    const db = await getDB();
    const deleteResult = await db.collection("Games").deleteOne({ _id: new ObjectId(gameId) });
    return deleteResult;
}

module.exports = {
    findAllGames,
    findGameById,
    findGameByTitle,
    findGameByPublisher,
    findGamesWithUnknownPublisher,
    findGameByGenre,
    findGameByLanguage,
    findGameByPlatform,
    findGameWithoutPlatform,
    findDiscGames,
    findDigitalOnlyGames,
    findGamesInPossesion,
    findGamesNOTInPossession,
    findFinishedGames,
    findUnfinishedGames,
    insertNewGame,
    updateGameInfo,
    deleteGame
}