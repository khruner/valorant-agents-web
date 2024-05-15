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
                <div class="tooltip">
                    <img class="agent-ability-icon" src="${agent.abilities[0].displayIcon}">
                    <span class="tooltiptext">${agent.abilities[0].displayName}</span>
                </div>
            </div>
            <div class="ability">
                <div class="tooltip">
                    <img class="agent-ability-icon" src="${agent.abilities[1].displayIcon}">
                    <span class="tooltiptext">${agent.abilities[1].displayName}</span>
                </div>
            </div>
            <div class="ability">
                <div class="tooltip">
                    <img class="agent-ability-icon" src="${agent.abilities[2].displayIcon}">
                    <span class="tooltiptext">${agent.abilities[2].displayName}</span>
                </div>
            </div>
            <div class="ability">
                <div class="tooltip">
                    <img class="agent-ability-icon" src="${agent.abilities[3].displayIcon}">
                    <span class="tooltiptext">${agent.abilities[3].displayName}</span>
                </div>
            </div>
        </div>
    </div>`;
}