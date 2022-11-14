const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

//read
async function findAllSeries() {
    const db = await getDB();
    const allSeries = await db.collection("series").find().sort({ title: -1 }).toArray();
    return allSeries;
}

async function findSeriesById(seriesId) {
    const db = await getDB();
    const foundSeries = await db.collection("series").findOne({ _id: new ObjectId(seriesId) });
    return foundSeries;
}

async function findSeriesByTitle(title) {
    const db = await getDB();
    const allSeries = await db.collection("series").find({ title: title }).sort({ title: -1 }).toArray();
    return allSeries;
}

async function findFinishedSeries() {
    const db = await getDB();
    const allSeries = await db.collection("series").find({ finished: true }).sort({ title: -1 }).toArray();
    return allSeries;
}

async function findUnfinishedSeries() {
    const db = await getDB();
    const allSeries = db.collection("series").find({ finished: false }).sort({ title: -1 }).toArray();
    return allSeries;
}

//create update delete

async function insertNewSeries(series) {
    const db = getDB();
    const insertionResult = await db.collection("series").insertOne(series);
    return insertionResult;
}

async function updateSeries(seriesId, updateInfo) {
    const db = await getDB();
    const updateResult = await db.collection("series").updateOne(
        { _id: new ObjectId(seriesId) },
        { $set: updateInfo }
    );
    return updateResult;
}

async function deleteSeries(seriesId) {
    const db = await getDB();
    const deleteResult = await db.collection("series").deleteOne({ _id: new ObjectId(seriesId) });
    return deleteResult;
}

module.exports = {
    findAllSeries,
    findSeriesById,
    findSeriesByTitle,
    findFinishedSeries,
    findUnfinishedSeries,
    insertNewSeries,
    updateSeries,
    deleteSeries
}