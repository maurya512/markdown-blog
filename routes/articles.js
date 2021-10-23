// ! all routes related to the article
const express = require('express')
const router = express.Router();

// ! this route is relative to the initial route defined in the server
router.get('/', (req, res) => {
    res.send('Inside articles')
})

// ! new article route
router.get('/', (req, res) => {
    res.render('articles/new')
})

module.exports = router