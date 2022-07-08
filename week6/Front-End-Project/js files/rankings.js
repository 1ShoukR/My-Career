const container = document.getElementById('container')
const searchButton = document.getElementById('searchButton');
const teamPages = document.getElementById('teamPages');


const getTeam = async ()=>{
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
        teamLogo.src = statsJson.data.logo
        teamPage.classList = 'teamPage'
        teamPages.append(teamPage, teamLogo)
        for (var item of Object.keys(statsJson.data[index])){
            let contentSpace = ' '
            teamPage.append(statsJson.data[index][item] + contentSpace, teamLogo)
        }
        // teamPage.append(' ' + statsJson.data[index].team)
    }
}
searchButton.onclick = () =>  getTeam()