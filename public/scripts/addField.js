// Search button to add fields
document.querySelector("#add-time")
.addEventListener('click', cloneField)
// Quando clicar no botão

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
