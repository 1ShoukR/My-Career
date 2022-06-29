const submitButton = document.getElementById("button")
const todoList = document.getElementById('items');
const submit = document.getElementById("submit")

// add item to the todolist

const container = document.getElementById("todoitems")

const addToList = () => {
    const todoitem = document.getElementById("input").value
    console.log(todoitem)
    const paragraph = document.createElement("p")
    const check = document.createElement("button")
    const remove = document.createElement("button")
    check.classList = "check-button"
    remove.classList = "remove-button"
    check.innerText = "done"
    remove.innerText = "remove"
    console.log(paragraph)
    paragraph.innerText = todoitem
    console.log(todoitem)
    container.append(paragraph, check, remove)
}







submit.onclick = addToList

