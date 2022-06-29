
// submit = document.getElementById("submit")

const container = document.getElementById("todoitems")

const addToList = () =>{
    const userInput = document.getElementById("input").value
    console.log(userInput)
    const list = document.createElement("P")
    console.log(list)
    list.classList = "list-text"
    console.log(list)
    const removeButton = document.createElement("button")
    removeButton.classList = "remove-button"
    const checkOffButton = document.createElement("button")
    checkOffButton.classList = "check-off-button"
    console.log(removeButton)
    console.log(checkOffButton)
    checkOffButton.innerText = "Check"
    removeButton.innerText = "remove"
    console.log(checkOffButton)
    console.log(removeButton)
    list.innerText = userInput
    container.append(list, checkOffButton, removeButton)
}
submit.click = addToList // ask about this













// submitButton = document.getElementById("button")
// todoList = document.getElementById("items")
// submit = document.getElementById("submit")

// So, did some research and turns out you dont need the above code? Only the one below? 
// And by research, I looked at the code and was like "I am not using these. Huh.."

// const container = document.getElementById("todoitems")


// const addToList = () =>{
//     const userInput = document.getElementById("input").value
//     console.log(userInput)
//     const paragraph = document.createElement("p")
//     console.log(paragraph)
//     const removeButton = document.createElement("button")
//     console.log(removeButton)
//     const checkButton = document.createElement("button")
//     console.log(checkButton)
//     removeButton.classList = "remove-button"
//     checkButton.classList = "check-button"
//     checkButton.innerText = "check off item"
//     removeButton.innerText = "remove off list"
//     paragraph.innerText = userInput
//     console.log(userInput)
//     container.append(paragraph, checkButton, removeButton)
// }



// submit.onclick = addToList