const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

//read
async function findAllProjects() {
    const db = await getDB();
    const allProjects = await db.collection("Projekte").find().sort({ lastChange: -1 }).toArray();
    return allProjects;
}

async function findProjectByID(projectId) {
    const db = await getDB();
    const foundProject = await db.collection("Projekte").findOne({ _id: new ObjectId(projectId) });
    return foundProject;
}

async function findProjectNotOnGithub() {
    const db = await getDB();
    const allProjects = await db.collection("Projekte").find({ github: false }).sort({ lastChange: -1 }).toArray();
    return allProjects;
}

async function findDeployedProjects() {
    const db = await getDB();
    const allProjects = await db.collection("Projekte").find({ deployed: true }).sort({ lastChange: -1 }).toArray();
    return allProjects;
}

async function findProjectsInProgress() {
    const db = await getDB();
    const allProjects = await db.collection("Projekte").find({ working: true }).sort({ lastChange: -1 }).toArray();
    return allProjects;
}

async function findAlmostFinishedProjects() {
    const db = await getDB();
    const allProjects = await db.collection("Projekte").find({ finishPercentage: { $gte: 90 } }).sort({ lastChange: 1 }).toArray();
    return allProjects;
}

async function findUnfinishedProjects() {
    const db = await getDB();
    const allProjects = await db.collection("Projetke").find({ finished: false }).sort({ lastChange: -1 }).toArray();
    return allProjects;
}

async function findFinishedProjects() {
    const db = await getDB();
    const allProjects = await db.collection("Projekte").find({ finished: true }).sort({ lastChange: -1 }).toArray();
    return allProjects;
}

//create  update delete
async function insertNewProject(project) {
    const db = await getDB();
    const insertionResult = await db.collection("Projekte").insertOne(project);
    return insertionResult;
}

async function updateProject(projectId, updateInfo) {
    const db = await getDB();
    const updateResult = await db.collection("Projekte").updateOne(
        { _id: new ObjectId(projectId) },
        { $set: updateInfo }
    );
    return updateResult;
}

async function deleteProject(projectId) {
    const db = await getDB();
    const deleteResult = await db.collection("Projekte").deleteOne(projectId);
    return deleteResult;
}

module.exports = {
    findAllProjects,
    findProjectByID,
    findProjectNotOnGithub,
    findDeployedProjects,
    findProjectsInProgress,
    findAlmostFinishedProjects,
    findUnfinishedProjects,
    findFinishedProjects,
    insertNewProject,
    updateProject,
    deleteProject
}