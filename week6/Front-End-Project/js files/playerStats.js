// api info: 
// need to put ${region} and ${timespan} in url (make this attached to input field. Look at weather app for reference)
// statsJson.data.segments

const btn = document.getElementById('btn')
const container = document.getElementById('container')
const statsPage = document.getElementById('statsPage')

console.log(inputField.value)


const getPlayerStats = async () =>{
    const inputField = document.getElementById('inputField').value;
    const statsURL = `https://vlrggapi.herokuapp.com/stats/${inputField}`;
    const stats = await fetch(statsURL)
    const statsJson = await stats.json()
    console.log(statsJson)
    console.log(inputField)
    for (index in statsJson.data.segments){
        var players = statsJson.data.segments[index];
        console.log(players)
        const playerStats = document.createElement('p')
        playerStats.classList = 'playerStats'
        statsPage.append(playerStats)
        for (var item of Object.keys(statsJson.data.segments[index])){
            playerStats.append(statsJson.data.segments[index][item] + ' | ')
        }
    }
}
btn.onclick = getPlayerStats