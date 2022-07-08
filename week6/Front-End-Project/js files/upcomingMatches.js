const upcomingMatchesURL = `https://vlrggapi.herokuapp.com/match/upcoming`;
const matchPage = document.getElementById('newMatches');

const upcomingMatches = async () => {
    const newMatches = await fetch(upcomingMatchesURL)
    const schedJson = await newMatches.json()
    console.log(schedJson)
    for (index in schedJson.data.segments){
        var matches = schedJson.data.segments[index]
        console.log(matches)
        const newMatches = document.createElement('p')
        newMatches.classList = 'matchPage'
        matchPage.append(newMatches)
        for (var item of Object.keys(schedJson.data.segments[index])){
            newMatches.append(schedJson.data.segments[index][item] + " | ")
        }
    }
}
upcomingMatches()