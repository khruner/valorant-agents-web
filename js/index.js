var agentes = [];
var agentesDisplay = [];
var selectedRole = "Empty";
let renderHTML = '';

const roleSelected = document.querySelector(".catButton");

const valoApiUrl = 'https://valorant-api.com/v1/agents?language=es-MX&isPlayableCharacter=true';

fetch(valoApiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    agentes = data.data;
    agentesDisplay = [... agentes];
    //let agentsHTML = renderAgents(data.data);
    //let agentsHTML = filterByRole(roleSelected, agentesDisplay);

    //renderiza todos los agentes
    document.getElementById('content').innerHTML = renderAgents(agentes);;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });



// Función para renderizar los agentes

let filterByRole = (element) => {
    let role = element.dataset.agentRole;
    
    if (selectedRole == role) {
        agentesDisplay = agentes;
        selectedRole = "Empty";
    } else {
        agentesDisplay = agentes.filter((agent) => agent.role.displayName == role);
        console.log(agentesDisplay);
        selectedRole = role;
    }

   
    // renderiza agentes filtrados
    document.getElementById('content').innerHTML = renderAgents(agentesDisplay);;
}

let renderAgents = (agents) => {
    let resultHTML = "";
    console.log(agents);
    for (let index = 0; index < agents.length; index++) {
      let agent = agents[index];
      let nombreComponent = renderAgentCard(agent);
      resultHTML = resultHTML.concat(nombreComponent);
    }
    return resultHTML;
  }

let buttons = document.getElementsByClassName("catButton");
for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.addEventListener("click", () => filterByRole(element));
}