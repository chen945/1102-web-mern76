import mongoose from "mongoose";
import validator from "validator";
const UserSchema_76 = new mongoose.Schema({
    name: {
        type: String,
        requires: [true, "Please provide name"],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    email: {
        type: String,
        requires: [true, "Please provide email"],
        validate: {
            validator: validator.isEmail,
            message: "Please provide void email",
        },
        unique: true,
    },
    password: {
        type: String,
        requires: [true, "Please provide password"],
        minlength: 6,
        select: false,
    },
    lastName: {
        type: String,
        trim: true,
        maxlength: 30,
        default: "lastName",
    },
    location: {
        type: String,
        trim: true,
        maxlength: 30,
        default: "my city",
    },
});

export default mongoose.model("User_76", UserSchema_76);
