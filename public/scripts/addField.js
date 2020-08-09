// Search button to add fields
document.querySelector("#add-time")
// When click on button
.addEventListener('click', cloneField)


// Function to duplicate the fields
function cloneField() {
    // Duplicate fields
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Get the fields
    const fields = newFieldContainer.querySelectorAll('input')
    
    // To clean each field
    fields.forEach(function(field) {
        // Get the current fields and clean them
        field.value = ""
    })

    // Put the new fields on the page
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}


document.querySelector("#create-proffy")
.addEventListener('click', redirectToSucessPage)


// Function responsible to redirect to sucess page after register a new proffy
function redirectToSucessPage() {
    window.location.href = "http://localhost:5500/success"
    console.log('cheguei aqui') 
    setTimeout(function () {
        window.location.href = "http://localhost:5500/study"
    }, 2000)
}


