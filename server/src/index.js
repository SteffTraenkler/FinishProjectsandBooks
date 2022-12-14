const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieSession = require("cookie-session");

const dotenv = require("dotenv");
const { userRouter } = require("./routes/user-routes");
dotenv.config();


const PORT = process.env.PORT || 9000;
const app = express();

app.use(cors({ origin: [process.env.FRONTEND_URL], credentials: true }));

const oneDayinMs = 24 * 60 * 60 * 1000;
const isLocalHost = process.env.FRONTEND_URL === "http://localhost:3000";

app.set("trust proxy", 1);

app.use(
    cookieSession({
        name: "session",
        secret: process.env.COOKIE_SESSION_SECRET,
        httpOnly: true,
        expires: new Date(Date.now() + oneDayinMs),
        sameSite: isLocalHost ? "lax" : "none",
        secure: isLocalHost ? false : true
    })
);


app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("assets"));

app.get("/", (_, res) => {
    res.send("Server is on and running.");
});

app.use("/users", userRouter);

app.listen(PORT, () => console.log("Server runs on port", PORT));