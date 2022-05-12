//ES6
import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import connectDB_76 from "./db/connect_76.js";
import notFoundMiddleware_76 from "./middleware/not-found_76.js";
import errorHandlerMiddleware_76 from "./middleware/error-handler_76.js";

app.get("/", (req, res) => {
    throw new Error("testing for error"); //強制讓它出現錯誤
    res.send("Welcome Doris 207410076");
});

app.use(notFoundMiddleware_76);
app.use(errorHandlerMiddleware_76);
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
