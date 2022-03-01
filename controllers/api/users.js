

module.exports = {
    create,
}

function create (req, res) {
    // baby steps... no more res.render
    res.json({
        user: {
            name: req.body.name,
            email: req.body.email
        }
    });
}