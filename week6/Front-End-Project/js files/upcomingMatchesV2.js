const upcomingMatchesURL = `https://vlrggapi.herokuapp.com/match/upcoming`;
const matchPage = document.getElementById('newMatches');

const upcomingMatches = async () => {
  const newMatches = await fetch(upcomingMatchesURL);
  const schedJson = await newMatches.json();
  console.log(schedJson);
  for (index in schedJson.data.segments) {
    var matchesObj = schedJson.data.segments[index];
    console.log(matchesObj);
    const newMatches = document.createElement('p');
    const logo = document.createElement('img')
    logo.setAttribute("height", "10px")
    logo.setAttribute("width", "13px")
    logo.classList = 'logo'
    logo.src = matchesObj.tournament_icon
    console.log('\tRANK STARTING');
    console.log('\t\t', Object.keys(matchesObj.team1));
    console.log('\t\t', matchesObj.team1);
    const schedMatches = document.createElement('p')
    schedMatches.classList = "schedMatches"
    schedMatches.innerHTML = `
    Tournament Name: ${matchesObj.tournament_name} 
    | ${logo.outerHTML}  
    | 
    ${matchesObj.round_info}
    | 
    Team 1: ${matchesObj.team1}
    | 
    Team 2: ${matchesObj.team2}
    | 
    Time until match start: ${matchesObj.time_until_match}
    |
    `
    newMatches.classList = 'matchPage';
    matchPage.append(newMatches, schedMatches);
  }
};
upcomingMatches();
