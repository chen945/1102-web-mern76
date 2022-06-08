//ES6
import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

import morgan from "morgan";
// import cors from "cors";

// db and authenticateUser
import connectDB_76 from "./db/connect_76.js";
//routes
import authRoutes_76 from "./routes/authRoutes_76.js";
//middleware
import notFoundMiddleware_76 from "./middleware/not-found_76.js";
import errorHandlerMiddleware_76 from "./middleware/error-handler_76.js";

if (process.env.NODE.ENV !== "production") {
    app.use(morgan("dev"));
}
// app.use(cors()); //若要使用proxy則必須關掉
app.use(express.json());

app.get("/", (req, res) => {
    // throw new Error("testing for error"); //強制讓它出現錯誤
    // res.send("Welcome Doris 207410076");
    res.json({ msg: "Welcome Doris 207410076" });
});

app.get("/api/v1", (req, res) => {
    res.json({ msg: "API v1--- Doris 207410076" });
});

app.use("/api/v1/auth_76", authRoutes_76);

app.use(notFoundMiddleware_76);
app.use(errorHandlerMiddleware_76);
const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB_76(process.env.MONGO_URL).then(() => {
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
