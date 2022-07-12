const container = document.getElementById('container');
const searchButton = document.getElementById('searchButton');
const teamPages = document.getElementById('teamPages');

const getTeam = async () => {
  teamPages.innerHTML = null;
  const inputField = document.getElementById('inputField').value;
  const rankingsURL = `https://vlrggapi.herokuapp.com/rankings/${inputField}`;
  const stats = await fetch(rankingsURL);
  const statsJson = await stats.json();
  console.log(statsJson);
  console.log(inputField);
  for (index in statsJson.data) {
    var teamObj = statsJson.data[index];
    console.log(teamObj);
    const teamPage = document.createElement('p');
    const teamLogo = document.createElement('img');
    teamLogo.classList = 'teamLogo';
    teamLogo.setAttribute("alt", "team logo missing")
    teamLogo.src = teamObj.logo;
    teamPage.classList = 'teamPage';
    // teamLogo.setAttribute("height", "16px")
    // teamLogo.setAttribute("width", "14px")
    // need to fix something in this loop
    console.log("\tRANK STARTING")
    console.log("\t\t", Object.keys(teamObj.rank))
    console.log("\t\t", teamObj.rank)
    const teamRank = document.createElement('p')
    teamRank.classList = 'teamRank'
    teamRank.innerHTML = `Rank:  ${teamObj.rank} | ${teamObj.team}  ${teamLogo.outerHTML} 
    | Country: ${teamObj.country}  `;
    console.log(teamRank)
    teamPages.append(teamPage, teamRank);
  }
};
searchButton.onclick = () => getTeam();
