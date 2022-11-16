const { UserDAO } = require("../../db-access");

async function editProfile(userId, editProfileInfo) {

    const updateResult = await UserDAO.updateUser(userId, editProfile);

    return updateResult;
}

module.exports = {
    editProfile
}