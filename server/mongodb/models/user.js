const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    avatar: { type: String },
    allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
    googleId: { type: String, unique: true },
}, { collection: 'Users' });


const UserModel = mongoose.model('User',UserSchema);

module.exports = UserModel;