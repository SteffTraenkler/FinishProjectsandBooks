const { UserDAO } = require("../../db-access");
const { makeUser } = require("../../domain/User");
const { createRandomSalt, createPasswordHash, generateRandomSixDigitCode } = require("../../utils/hash");
const { userToUserView } = require("../functions1/userToUserView");

async function registerUser({ username, email, password, profilePicture }) {
    const foundUser = await UserDAO.findUserByUsernameOrEmail(username, email);

    if (foundUser) {
        const errorMessage = foundUser.username === username
            ? "Username" + username + "already taken!"
            : "Account with this email already exists!";
        throw new Error(errorMessage);
    }

    const oneUser = await UserDAO.findAllUsers();

    if (oneUser.length > 0) {
        throw new Error("There already exists a user. We currently allow only one registered User, Sorry.");
    }

    const passwordSalt = createRandomSalt();
    const passwordHash = createPasswordHash(password, passwordSalt);

    const sixDigitVerificationCode = generateRandomSixDigitCode();

    const user = makeUser({ username, email, passwordHash, passwordSalt, sixDigitVerificationCode, profilePicture });
    const insertionResult = await UserDAO.insertUser(user);

    const wasSuccessful = insertionResult.acknowledged === true && insertionResult.insertedId;
    if (!wasSuccessful) {
        throw new Error("Registration failed, please try again");
    }

    const registeredUser = await UserDAO.findUserById(insertionResult.insertedId);
    const registeredUserView = userToUserView(registeredUser);
    return registeredUserView;
}

module.exports = {
    registerUser
}