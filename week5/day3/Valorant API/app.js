// global variables
// const dropDown = document.getElementById('agent');
// const valorantCard = document.getElementsByClassName('valorant-card');
// const agentName = document.getElementsByClassName('agentName')[0];
// const agentDescription = document.getElementsByClassName('agentDescription')[0];
// const ability_1_Description = document.getElementsByClassName('ability_1_Description')[0];
// const ability_2_Description = document.getElementsByClassName('ability_2_Description')[0];
// const ultimate = document.getElementsByClassName('ultimate')[0];
// const grenade = document.getElementsByClassName('grenade')[0];



// const agentChoice = async (agent) =>{
//     // api info
//     const url = `https://valorant-api.com/v1/agents`;
//     // console.log(url)
//     const agentData = await fetch(url)
//     const json = await agentData.json()
//     console.log(json)

    // grabbing stuff for the html

    // const agentName = document.createElement('p')
    // agentName.classList = 'agentName'
    // const agentIcon = document.createElement('img')
    // agentIcon.classList = 'agentIcon'
    // const agentDescription = document.createElement('p')
    // agentDescription.classList = 'agentDesc'
    // const agentAbility1 = document.createElement('p')
    // agentAbility1.classList = 'ability1'
    // const agentAbility2 = document.createElement('p')
    // agentAbility2.classList = 'ability2'
    // const grenade = document.createElement('p')
    // grenade.classList = 'grenade'
    // const agentAbility1_icon = document.createElement('img')
    // agentAbility1_icon.classList = 'ability1_icon'
    // const agentAbility2_icon = document.createElement('img')
    // agentAbility2_icon.classList = 'ability2_icon'

    // appending elements to HTML doc

//     if (agent == 'Brimstone') {
//         agentName.innerText = json.data[13].displayName;
//         agentDescription.innerText = json.data[13].description;
//         ability_1_Description.innerText = json.data[13].abilities[1].displayName
//         ability_2_Description.innerText = json.data[13].abilities[2].displayName
//         ultimate.innerText = json.data[13].abilities[3].displayName
//         grenade.innerText = json.data[13].abilities[0].displayName
//       // agentIcon
//         console.log(agentName);} 
//         else if (agent == 'Viper'){
//         agentName.innerText = json.data[10].displayName
//         agentDescription.innerText = json.data[10].description;
//         ability_1_Description.innerText = json.data[10].abilities[1].displayName;
//         ability_2_Description.innerText = json.data[10].abilities[2].displayName;
//         ultimate.innerText = json.data[10].abilities[3].displayName;
//         grenade.innerText = json.data[10].abilities[0].displayName;
//     }
//         else if (agent == 'Omen'){
//             agentName.innerText = json.data[18].displayName
//             agentDescription.innerText = json.data[18].description;
//             ability_1_Description.innerText = json.data[18].abilities[1].displayName;
//             ability_2_Description.innerText = json.data[18].abilities[2].displayName;
//             ultimate.innerText = json.data[18].abilities[3].displayName;
//             grenade.innerText = json.data[18].abilities[0].displayName;}
//         else if (agent == 'Killjoy'){
//             agentName.innerText = json.data[9].displayName
//             agentDescription.innerText = json.data[9].description;
//             ability_1_Description.innerText = json.data[9].abilities[1].displayName;
//             ability_2_Description.innerText = json.data[9].abilities[2].displayName;
//             ultimate.innerText = json.data[9].abilities[3].displayName;
//             grenade.innerText = json.data[9].abilities[0].displayName;
//             }
//         else if (agent == 'Cypher'){
//             agentName.innerText = json.data[6].displayName
//             agentDescription.innerText = json.data[6].description;
//             ability_1_Description.innerText = json.data[6].abilities[1].displayName;
//             ability_2_Description.innerText = json.data[6].abilities[2].displayName;
//             ultimate.innerText = json.data[6].abilities[3].displayName;
//             grenade.innerText = json.data[6].abilities[0].displayName;}
//         else if (agent =='Sova'){
//             agentName.innerText = json.data[8].displayName
//             agentDescription.innerText = json.data[8].description;
//             ability_1_Description.innerText = json.data[8].abilities[1].displayName;
//             ability_2_Description.innerText = json.data[8].abilities[2].displayName;
//             ultimate.innerText = json.data[8].abilities[3].displayName;
//             grenade.innerText = json.data[8].abilities[0].displayName;
//         }
//         else if (agent == 'Sage'){
//             agentName.innerText = json.data[16].displayName
//             agentDescription.innerText = json.data[16].description;
//             ability_1_Description.innerText = json.data[16].abilities[1].displayName;
//             ability_2_Description.innerText = json.data[16].abilities[2].displayName;
//             ultimate.innerText = json.data[16].abilities[3].displayName;
//             grenade.innerText = json.data[16].abilities[0].displayName;
//         }
//         else if (agent == 'Phoenix'){
//             agentName.innerText = json.data[11].displayName}
//         else if (agent == 'Jett'){
//             agentName.innerText = json.data[19].displayName}
//         else if (agent == 'Reyna'){
//             agentName.innerText = json.data[17].displayName}
//         else if (agent == 'Raze'){
//             agentName.innerText = json.data[2].displayName}
//         else if (agent == 'Breach'){
//             agentName.innerText = json.data[1].displayName}
//         else if (agent == 'Skye'){
//             agentName.innerText = json.data[5].displayName}
//         else if (agent == 'Yoru'){
//             agentName.innerText = json.data[15].displayName}
//         else if (agent == 'Astra') {
//             agentName.innerText = json.data[12].displayName}
//         else if (agent == 'KAY/O'){
//             agentName.innerText = json.data[4].displayName} 
//         else if (agent == 'Chamber'){
//             agentName.innerText = json.data[3].displayName}
//         else if (agent == 'Neon'){
//             agentName.innerText = json.data[14].displayName} 
//         else if (agent == 'Fade'){
//             agentName.innerText = json.data[0].displayName
//         }
// }
// // dropDown.onchange = (e) => pokemonChoice(e.target.value)
// dropDown.onchange = (e) => agentChoice(e.target.value)






const dropDown = document.getElementById('agents')
const container = document.getElementsByClassName('valorant-card')[0];
const url = `https://valorant-api.com/v1/agents`;

const apiData = async () =>{
    const agentData = await fetch(url)
    const json = await agentData.json();
    console.log(json)
    agentName()
}

const agentName = async (agents) =>{
    container.innerHTML = null
    const agentData = await fetch(url)
    const json = await agentData.json();
    console.log(json)
    const charName = document.createElement('p')
    charName.classList = "char-Name"
    if (agents === 'Brimstone') {
        charName.innerText = json.data[13].displayName;
        agentAbilities()
        container.append(charName);
    } else if (agents === 'Viper'){
        charName.innerText = json.data[10].displayName;
        container.append(charName);
    } else if (agents === 'Omen'){
        charName.innerText = json.data[18].displayName;
        container.append(charName);
    }
}


const agentAbilities = (agents) =>{
    abilityOne = document.createElement('p')
    abilityOne.classList = 'abilityOne'
    console.log(abilityOne)
    if (agents === 'Brimstone') {
        abilityOne.innerText = json.data[13].abilities[1].displayName;
        console.log(abilityOne)
        container.append(abilityOne)
    } else {

    }

}
dropDown.onchange = (e) => agentName(e.target.value)





