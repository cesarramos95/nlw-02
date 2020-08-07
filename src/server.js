const proffys = [
    // Application data
    {
        name: "César Augusto",
        avatar: "https://avatars0.githubusercontent.com/u/41995703?s=460&u=e79d6900cae07be99d738d5388709b275f752356&v=4",
        whatsapp: "35998758762",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Daniela Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "98678657",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Artes",
    "Ciências",
    "Educação",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// Functions

// Function responsible for return the subjects 
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1 // The signal "+" is to ensure that will return a number
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html") // Concatenation to find the home page file
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    // If have data
    const isNotEmpty = Object.keys(data).length > 0
    if(isNotEmpty) {
        data.subject = getSubject(data.subject)
        // Add data to list of proffys
        proffys.push(data)
        return res.redirect("/study")
    }
    
    // If not, show the page
    return res.render("give-classes.html", { subjects, weekdays } )
}

// Server
const express = require('express')
const server = express()

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