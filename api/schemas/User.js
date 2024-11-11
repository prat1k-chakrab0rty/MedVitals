import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    ID: { type: Number, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    roleId: { type: Number },
    email: { type: String, required: true, unique: true },
    profileImage: { type: String, unique: true },
    phoneNumber: { type: Number, unique: true },
    dob: { type: Date },
    gender: { type: String, min: 1, max: 1 },
    maritalStatus: { type: String, min: 3, max: 10 },
    city: { type: String, min: 1, max: 15 },
    bloodGroup: { type: String, min: 1, max: 4 },
    height: { type: Number, min: 50, max: 250 },
    weight: { type: Number, min: 15, max: 200 },
},
    { _id: false }
);

const User = mongoose.model('User', userSchema);
export default User;