const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

async function findAllUsers() {
    const db = getDB();
    const allUsers = db.collection("User").find().toArray();
    return allUsers;
}

async function findUserById(userId) {
    const db = await getDB();
    const foundUser = await db.collection("User").findOne({ _id: new ObjectId(userId) });
    return foundUser;
}

async function findUserByUsernameOrEmail({ username, email }) {
    const db = await getDB();
    const foundUser = await db.collection("User").findOne({
        $or: [{ username: username }, { email: email }]
    });
    return foundUser;
}

async function insertUser(userInfo) {
    const db = await getDB();
    const insertionResult = await db.collection("User").insertOne(userInfo);
    return insertionResult;
}

async function updateUser(userId, updateInfo) {
    const db = await getDB();
    const updateResult = await db.collection("User").updateOne(
        { _id: new ObjectId(userId) },
        { $set: updateInfo }
    );
    return updateResult;
}

async function deleteUser(userId) {
    const db = await getDB();
    const deleteResult = await db.collection("User").deleteOne(userId);
    return deleteResult;
}

module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsernameOrEmail,
    insertUser,
    updateUser,
    deleteUser
}