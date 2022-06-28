// getting the elements

const heading = document.getElementById("heading")
const burger = document.getElementById("burger")
const buns = document.createElement('li')



//changing stuff in the element

// header text
heading.innerHTML = "<H1>Toppings</H1>"

// adding a class to burger
burger.classList.add("list-item")

// creating a new list item within original list 
buns.appendChild(document.createTextNode('buns'))
document.querySelector('ul').appendChild(buns)












