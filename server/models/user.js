const Mongoose = require('mongoose');
const UserSchema = new Mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
});
const User = Mongoose.model('User', UserSchema);
module.exports = User;