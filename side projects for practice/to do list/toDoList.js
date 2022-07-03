const container = document.getElementsByClassName("container")
const submit = document.getElementById("submit")
const submitBtn = document.getElementById("button")


const toDoItemsContainer = document.getElementById("todoitems")


submit.onclick = () =>{
        const todoitem = document.getElementById('input').value
        const list = document.createElement('li');
        const check = document.createElement('button');
        const remove = document.createElement('button');
        check.classList = 'check-button';
        remove.classList = 'remove-button';
        check.innerText = 'done';
        remove.innerText = 'remove';
        list.innerText = todoitem;
        toDoItemsContainer.append(list, check, remove);
}

// submit.onclick = addToList

// const doneButton = () =>{
//     const removeBtn = document.getElementById("remove-button")

// }