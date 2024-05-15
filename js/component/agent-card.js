var renderAgentCard = (agent) => {
    return `<div class="agent-card">
        <div class="agent-portrait">
            <div>
                <img class="agent-portrait-bust" src="${agent.bustPortrait}" alt="${agent.displayName} - image">
            </div>
            <div class="agent-name">${agent.displayName}</div>
        </div>
        <div class="agent-abilities">
            <div class="ability">
                <img class="agent-ability-icon" src="${agent.abilities[0].displayIcon}">
            </div>
            <div class="ability">
                <img class="agent-ability-icon" src="${agent.abilities[1].displayIcon}">
            </div>
            <div class="ability">
                <img class="agent-ability-icon" src="${agent.abilities[2].displayIcon}">
            </div>
            <div class="ability">
                <img class="agent-ability-icon" src="${agent.abilities[3].displayIcon}">
            </div>
        </div>
    </div>`;
}