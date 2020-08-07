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
        subject: 1,
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

    // All proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // Read the classes data of a specific teacher and get the teacher's data
    const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = 1
    AND class_schedule.weekday = 0
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300"
    `)

    // console.log(selectClassesSchedules)

})