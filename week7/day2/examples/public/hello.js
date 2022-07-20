console.log("im on the client")

const button = document.getElementById("button")


const sendData = async () => {
    const input = document.getElementById('input').value;
    const data = {
        message: input,
    }
    const dataWeAreSending = await fetch('http://localhost:3001/home', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    console.log(dataWeAreSending);
    const json = await dataWeAreSending.json()
    console.log(json)
}

button.onclick = () => sendData()


const firstPage = async () => {
    const input = document.getElementById('input').value;
    const myMessage = {
        message: input, 
    }
    const dataIAmSending = await fetch('http://localhost:3001/firstPage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myMessage),
    });
    console.log(dataIAmSending)
    const json = await dataIAmSending.json()
    console.log(json)
}

button.onclick = () => firstPage()