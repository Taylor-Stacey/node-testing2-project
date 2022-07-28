const express = require('express');
const Users = require('./users-model');

const router = express.Router();



router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        sageAdvice: 'Finding the real error is 90% of the bug fix',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router