const User = require('../models/user');

const register = async (req, res) => {
    const { username, password } = req.body;
    if (password.length < 6) {
        return res.status(400).json({ message: "Password less than 6 characters" })
    }
    try{
        await User.create({ username, password }).then((user) => {
            res.status(201).json({ message: "User created successfully", user });
    });
} catch (error) {
    res.status(401).json({
        message: "User not successful created",
        error: error.mesage,
    });
}
};

module.exports = { register };