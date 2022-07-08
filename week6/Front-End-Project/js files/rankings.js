const container = document.getElementById('container')
const searchButton = document.getElementById('searchButton');


const getTeam = async ()=>{
    const inputField = document.getElementById('inputField').value
    const rankingsURL = `https://vlrggapi.herokuapp.com/rankings/${inputField}`;
    const stats = await fetch(rankingsURL)
    const statsJson = await stats.json()
    console.log(statsJson)
    console.log(inputField);
}
searchButton.onclick = () =>  getTeam()