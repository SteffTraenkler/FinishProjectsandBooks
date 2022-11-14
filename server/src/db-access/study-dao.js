const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

async function findAllTopics() {
    const db = await getDB();
    const allTopics = await db.collection("Lernen").find().toArray();
    return allTopics;
}


module.exports = {
    findAllTopics
}