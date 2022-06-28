// elements to grab from HTML
userList = []

const userInput = document.getElementById("input")
const submitButton = document.getElementById("submitButton")
const newItem = document.getElementById("input").value
const removeButton = document.getElementById("remove")
const scratchOver = document.getElementById("scratch")








// functions
submitButton.addEventListener("click", () =>{
    const input = document.getElementById('input')
    const newList = document.createElement("li")
    newList.innerHTML = input.value
    const list = document.getElementById("contents")
    list.appendChild(newList)
})

removeButton.addEventListener("click", () =>{
    removeButton.parentNode.removeChild
})










