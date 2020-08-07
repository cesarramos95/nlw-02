const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Insert data

    proffyValue = {
        name: "César Ramos",
        avatar: "https://avatars0.githubusercontent.com/u/41995703?s=460&u=e79d6900cae07be99d738d5388709b275f752356&v=4",
        whatsapp: "35998759059",
        bio: "Instrutor de português",
    }
    
    classValue = {
        subject: "Português",
        cost: "20",
        // The proffy id will be generated for the database
    }

    classScheduleValues = [
        // class_id will be generated for the database after we register a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues })

    // Read entered data
})