const User = require('../../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
    create,
}

async function create (req, res) {
    try {
        const user = await User.create(req.body)
        // token will be a string
        const token = createJWT(user);
        // yes, we can serialize a string
        res.json(token);
    } catch { err } {
        // Probably a duplicate email
        res.status(400).json(err);
    }
}

// Helper function

function createJWT(user) {
    return jwt.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}

