const btn = document.getElementById('btn');
const container = document.getElementById('container');
const statsPage = document.getElementById('statsPage');

console.log(inputField.value);

const getPlayerStats = async () => {
  const inputField = document.getElementById('inputField').value;
  const statsURL = `https://vlrggapi.vercel.app/stats/${inputField}/30`;
  const stats = await fetch(statsURL);
  const statsJson = await stats.json();
  console.log(statsJson);
  console.log(inputField);
  for (index in statsJson.data.segments) {
    var playersObj = statsJson.data.segments[index];
    console.log(playersObj);
    const playerStats = document.createElement('p');
    playerStats.classList = 'playerStats';
    console.log('\tRANK STARTING');
    console.log('\t\t', Object.keys(playersObj.player));
    console.log('\t\t', playersObj.player);
    const valPlayers = document.createElement('p')
    valPlayers.classList = 'valPlayers'
    valPlayers.innerHTML =
    // make a table using the table tag. figure it out later.
        `
            Player: ${playersObj.player} 
            | Org: ${playersObj.org} 
            | KPR: ${playersObj.kills_per_round} 
            | K/D: ${playersObj.kill_deaths}
            | HS%: ${playersObj.headshot_percentage}
            | FK: ${playersObj.first_kills_per_round}
            | FD: ${playersObj.first_deaths_per_round}
            | Clutch %: ${playersObj.clutch_success_percentage}
            | ADR: ${playersObj.average_damage_per_round}
            | ACS: ${playersObj.average_combat_score}
            | Assist: ${playersObj.assists_per_round}
        `
    statsPage.append(valPlayers)
  }
};
btn.onclick = getPlayerStats;
