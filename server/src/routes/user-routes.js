const express = require("express");
const multer = require("multer");
const { body } = require("express-validator");

const { doValidations } = require("../facade/doValidations");
const { UserService } = require("../use-cases");

const userRouter = express.Router();

userRouter.post("/register",
    body("username").isLength({ min: 1, max: 35 }),
    body("email").isEmail(),
    body("password").isStrongPassword(),
    doValidations,

    async (req, res) => {
        try {
            const userInfo = req.body;
            const result = await UserService.registerUser(userInfo);

            res.status(201).json(result);
        } catch (err) {
            res.status(500).json({ err: { message: err ? err.message : "Unknown error while registering a new account." } })
        };
    }
);

userRouter.post("/login",
    body("username").isLength({ min: 1, max: 35 }),
    body("password").isStrongPassword(),
    doValidations,

    async (req, res) => {
        try {
            const result = await UserService.loginUser({
                username: req.body.username,
                password: req.body.password,
            });

            if (result.refreshToken) {
                req.session.refreshToken = result.refreshToken;
            }

            res.status(200).json(result);

        } catch (err) {
            res.status(500).json({ err: { message: err ? err.message : "Unknwon error while trying to log in." } });
        }
    }
);

userRouter.post("/refreshtoken", async (req, res) => {
    try {
        const result = await UserService.refreshUserToken({
            refreshToken: req.session.refreshToken || req.body.refreshToken,
        });
        res.status(200).json(result);

    } catch (err) {
        res.status(500).json({ err: { message: err ? err.message : "Unknown error while refreshing your token." } });
    }
});


module.exports = {
    userRouter
}