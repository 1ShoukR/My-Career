const matchResultsURL = `https://vlrggapi.herokuapp.com/match/results`;
const resultsPage = document.getElementById('matchPage');

const getMatchResults = async () =>{
    const data = await fetch(matchResultsURL)
    const jsonData = await data.json()
    console.log(jsonData)
    for (index in jsonData.data.segments){
        var results = jsonData.data.segments[index]
        console.log(results)
        const newMatch = document.createElement('p')
        newMatch.classList = 'matchArticles'
        matchPage.append(newMatch)
        for (var item of Object.keys(jsonData.data.segments[index])){
            newMatch.append(jsonData.data.segments[index][item] + " | ")
        }
    }
}
getMatchResults()


