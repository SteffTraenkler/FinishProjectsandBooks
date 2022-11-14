const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

async function findAllArtProjects() {
    const db = await getDB();
    const allArtProjects = db.collection("ArtProject").find().sort({ addedAt: -1 }).toArray();
    return allArtProjects;
}

async function findAllUnfinishedArtProjects() {
    const db = await getDB();
    const allArtProjects = await db.collection("ArtProjects").find({ finished: false }).sort({ addedAt: 1 }).toArray();
    return allArtProjects;
}
async function findAllFinishedArtProjects() {
    const db = await getDB();
    const allArtProjects = await db.collection("ArtProjects").find({ finished: true }).sort({ finishedAt: -1 }).toArray();
    return allArtProjects;
}