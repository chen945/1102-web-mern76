//ES6
import express from "express";
const app = express();

import dontenv from "dotenv";
dontenv.config();

import connectDB_76 from "./db/connect_76.js";

app.get("/", (req, res) => {
    res.send("Welcome Doris 207410076");
});

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB_76(process.env.MONGO_LOCAL_URL).then(() => {
            console.log("Connecting to MongoDB");
        });
        app.listen(port, () =>
            console.log(`Server is running on port ${port}`)
        );
    } catch (err) {
        console.log(err);
    }
};
start();
