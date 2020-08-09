const subjects = [
    "Artes",
    "Biologia",
    "Artes",
    "Ciências",
    "Educação Física",
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

function convertHoursToMinutes(time) {
    const [hours, minutes] = time.split(":")
    return Number((hours * 60) + minutes) // To enure that be a number
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}