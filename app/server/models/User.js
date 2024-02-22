import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Plese Provide Email"],
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    // isVerified: {
    //     type: Boolean,
    //     defaault: true,
    // }
})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User