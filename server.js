const express = require('express')
// ! require router initialized in the routes folder
const articleRouter = require('./routes/articles')
const app = express();

// set the view engine
app.set('view engine', 'ejs')

// let the app use router
app.use('/articles', articleRouter)

// routes
app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description'
    }]
    // ! render accesses the index file inside of the views folder
    res.render('index', { articles: articles })
})
app.listen(5000)