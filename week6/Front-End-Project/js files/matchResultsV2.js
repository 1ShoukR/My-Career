const matchResultsURL = `https://vlrggapi.herokuapp.com/match/results`;
const resultsPage = document.getElementById('matchPage');

const getMatchResults = async () => {
  const data = await fetch(matchResultsURL);
  const jsonData = await data.json();
  console.log(jsonData);
  for (index in jsonData.data.segments) {
    var resultsObj = jsonData.data.segments[index];
    console.log(resultsObj);
    const newMatch = document.createElement('p');
    const tournamentIcon = document.createElement('img')
    tournamentIcon.classList = 'tournamentIcon'
    tournamentIcon.src = resultsObj.tournament_icon
    newMatch.classList = 'matchArticles';


    console.log("\tRANK STARTING")
    console.log("\t\t", Object.keys(resultsObj.team1))
    console.log("\t\t", resultsObj.team1)
    newMatch.innerHTML = `
    ${resultsObj.tournament_name}
    ${resultsObj.team1}: 
    ${resultsObj.score1} | 
    ${resultsObj.team2}: 
    ${resultsObj.score2} |
    Match was played ${resultsObj.time_completed}
    `;
    
    matchPage.append(newMatch);
  }
};
getMatchResults();
