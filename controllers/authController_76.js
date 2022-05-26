import User_76 from "../models/User_76.js";
import { StatusCodes } from "http-status-codes";

const register_76 = async (req, res, next) => {
    console.log("body", req.body);
    const user = await User_76.create(req.body);
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user, token });

    //add express-async-errors,remove try catch block
    // try {
    //     console.log("body", req.body);
    //     const user = await User_76.create(req.body);
    //     const token = user.createJWT();
    //     res.status(201).json({ user, token });
    // } catch (err) {
    //     //res.status(500).json({ msg: "Error on registering user" });
    //     next(err);
    // }
};

const login_76 = async (req, res) => {
    res.send("login user -- Doris,207410076");
};

const updateUser_76 = async (req, res) => {
    res.send("update user -- Doris,207410076");
};

export { register_76, login_76, updateUser_76 };
