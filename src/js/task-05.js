

const inputName= document.getElementById("name-input")
const guestName = document.getElementById("name-output")

inputName.addEventListener("input", (event) => {
    if (event.currentTarget.value !== "")
     {guestName.textContent = event.currentTarget.value
} else {
    guestName.textContent = "Anonymous"
            }
        })