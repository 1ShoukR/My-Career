const submitButton = document.getElementsByTagName("button");
const todoList = document.getElementById("items");
const submit = document.getElementById("submit");
const submit1 = document.getElementById("submit1");
let counter = 0;

const deleteTodo = (todo) => {
  const AllTodos = document.querySelector(`.${todo}`);
  AllTodos.innerHTML = "";
};

const checkTodo = (todo) => {
  const AllTodos = document.querySelector(`.${todo}`);
  AllTodos.classList = "strike";
};

const addTodo = () => {
  counter++;
  const todoItem = document.getElementById("input").value;

  const todoContainer = document.createElement("div");
  const todoListItem = document.createElement("li");

  todoContainer.classList = `todoItem-${counter}`;
  const check = document.createElement("button");
  const remove = document.createElement("button");
  check.classList = "check-button";
  check.onclick = () => checkTodo(todoContainer.className);
  remove.onclick = (e) => deleteTodo(todoContainer.className);
  check.innerText = "✔️";
  remove.innerText = "❌";

  todoListItem.innerText = todoItem;
  todoContainer.append(todoListItem, check, remove);
  todoList.append(todoContainer);
};
// selelct the div that you want to put the todo in
const container = document.getElementById("todoitems");
//
const addTodoItem = () => {
  const inputField = document.getElementById("input").value;
  const paragraph = document.createElement("p");
  paragraph.innerText = inputField;
  container.append(paragraph);
};
console.log(container);

submit.onclick = addTodo;
submit1.onclick = addTodoItem;
