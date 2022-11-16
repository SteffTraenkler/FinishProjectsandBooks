function userToUserView(user) {
    return {
        _id: user._id,
        profilePicture: user.profilePicture,
        username: user.username,
        userPoints: user.userPoints
    }
}

module.exports = {
    userToUserView
}