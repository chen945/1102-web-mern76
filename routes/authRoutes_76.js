import express from "express";
const router = express.Router();
import {
    register_76,
    login_76,
    updateUser_76,
} from "../controllers/authController_76.js";

router.route("/register_76").post(register_76);
router.route("/login_76").post(login_76);
router.route("/updateUser_76").patch(updateUser_76);

export default router;
