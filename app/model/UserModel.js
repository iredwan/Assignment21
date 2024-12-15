import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    firstName: {type: 'string', required: true},
    lastName: {type: 'string', required: true},
    NIDNumber: {type: 'string', required: true},
    phoneNumber: {type: 'string', required: true},
    password: {type: 'string', required: true},
    bloodGroup: {type: 'string', required: true}
}, {
    timestamps: true
});


const UserModel = mongoose.model('users', DataSchema)

export default UserModel;