//User
const { editProfile } = require("./user/edit-profile");
const { loginUser } = require("./user/login-user");
const { refreshUserToken } = require("./user/refresh-user-token");
const { registerUser } = require("./user/register-user");

const UserService = {
    editProfile,
    loginUser,
    refreshUserToken,
    registerUser
}

module.exports = {
    UserService,
}