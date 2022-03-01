const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST /api/users this is our starts with path
router.post('/', usersCtrl.create);

module.exports = router;