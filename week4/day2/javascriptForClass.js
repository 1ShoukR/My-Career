console.log("hi")
console.log(document)
// document.
// getLementById
const numbersToCalc = []
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const calc = document.getElementById("calculate")
const addition = document.getElementById("addition");
const input = document.getElementById("textbox")
const container = document.getElementById("container")
let answer = ""


// this adds a function to a button
// can also do:




const sum = () =>{
    console.log("this os thje sum", Total)
}


const getButtonValue = (buttonInntertext) =>{
    if(buttonInntertext.id === "addition"){
        console.log("dont make it a parse")
        let mathSign = buttonInntertext.innerText;
        numbersToCalc.push(mathSign)
    } else {

        const innerTextToInt = parseInt(buttonInntertext.innerText)
        numbersToCalc.push(innerTextToInt)
        console.log(numbersToCalc)
    }
}

const doMath = () =>{
    const firstVal = numbersToCalc[0]
    const mathSign = numbersToCalc[2]
    const secondVal = numbersToCalc[3]

    if(mathSign === "+"){
        answer = firstVal + secondVal
        input.value = answer
    }
}


calc.onclick = doMath
button1.onclick = (e) => getButtonValue(e.target)
button2.onclick = (e) => getButtonValue(e.target)
addition.onclick = (e) => getButtonValue(e.target)
const bigAnswer = document.createElement("h1")
bigAnswer.innerText = "cowboy"
container.append(bigAnswer)



// addition.onclick = () => console.log("I was clicked")

// addition.addEventListener("click", (e) => console.log(e))




const buttons = document.getElementsByTagName("button")
console.log(buttons[0])
for (const button of buttons) {
    console.log(button.innerText)
}



