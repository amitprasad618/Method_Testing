import mongoose from "mongoose";

const userDataSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
});
const User = mongoose.model("User", userDataSchema);

export default User;