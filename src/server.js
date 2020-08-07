// Server
const express = require('express');
const server = express();

const { pageLanding, pageStudy, pageGiveClasses } = require('./pages')

// Configure nunjucks (template engine)
const nunjucks = require ('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Configure statics files(CSS, scripts, images)
server.use(express.static("public")) // Setting to read the "public folder"
// Application routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)