const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

//read
async function findAllArtProjects() {
    const db = await getDB();
    const allArtProjects = await db.collection("ArtProject").find().sort({ addedAt: -1 }).toArray();
    return allArtProjects;
}

async function findArtById(artId) {
    const db = await getDB();
    const foundArt = await db.collection("ArtProject").findOne({ _id: new ObjectId(artId) });
    return foundArt;
}

async function findAllUnfinishedArtProjects() {
    const db = await getDB();
    const allArtProjects = await db.collection("ArtProject").find({ finished: false }).sort({ addedAt: 1 }).toArray();
    return allArtProjects;
}
async function findAllFinishedArtProjects() {
    const db = await getDB();
    const allArtProjects = await db.collection("ArtProject").find({ finished: true }).sort({ finishedAt: -1 }).toArray();
    return allArtProjects;
}

async function findArtByWIPs() {
    const db = await getDB();
    const allArtProjects = await db.collection("ArtProject").find({ wIP: true }).sort({ lastChange: -1 }).toArray();
    return allArtProjects;
}

async function findArtNotInPossesion() {
    const db = await getDB();
    const allArtProjects = await db.collection("ArtProject").find({ stillInPossession: false }).sort({ lastChange: -1 }).toArray();
    return allArtProjects;
}


//create update delete
async function insertNewArt(art) {
    const db = await getDB();
    const insertionResult = await db.collection("ArtProject").insertOne(art);
    return insertionResult;
}

async function updateArtProject(artId, updateInfo) {
    const db = await getDB();
    const updateResult = await db.collection("ArtProject").updateOne(
        { _id: new ObjectId(artId) },
        { $set: updateInfo }
    );
    return updateResult;
}

async function deleteArtProject(artId) {
    const db = await getDB();
    const deleteResult = await db.collection("ArtProject").deleteOne({ _id: new ObjectId(artId) });
    return deleteResult;
}

module.exports = {
    findAllArtProjects,
    findArtById,
    findAllUnfinishedArtProjects,
    findAllFinishedArtProjects,
    findArtByWIPs,
    findArtNotInPossesion,
    insertNewArt,
    updateArtProject,
    deleteArtProject
}