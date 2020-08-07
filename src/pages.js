const { subjects, weekdays, getSubject } = require('./utils/format')

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

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}