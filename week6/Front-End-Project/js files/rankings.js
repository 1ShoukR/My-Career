const container = document.getElementById('container')
const searchButton = document.getElementById('searchButton');
const teamPages = document.getElementById('teamPages');


const getTeam = async ()=>{
    teamPages.innerHTML = null
    const inputField = document.getElementById('inputField').value
    const rankingsURL = `https://vlrggapi.herokuapp.com/rankings/${inputField}`;
    const stats = await fetch(rankingsURL)
    const statsJson = await stats.json()
    console.log(statsJson)
    console.log(inputField)
    for (index in statsJson.data){
        var team = statsJson.data[index]
        console.log(team)
        const teamPage = document.createElement('p')
        const teamLogo = document.createElement('img')
        teamLogo.classList = 'teamLogo'
        teamLogo.src = statsJson.data[index].logo
        teamPage.classList = 'teamPage'
        teamPages.append(teamPage, teamLogo)
        // need to fix something in this loop
        for (var item of Object.keys(statsJson.data[index])){
            teamPage.append(statsJson.data[index][item] + ' | ' )
        }
    }
}
searchButton.onclick = () =>  getTeam()