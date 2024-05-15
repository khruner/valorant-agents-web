var renderAgentCard = (agent) => {
    return `<div class="agent-card">
        <div class="agent-portrait">
            <div>
                <img class="agent-portrait-background" src="${agent.background}" alt="" srcset="">
            </div>
            <div>
                <img class="agent-portrait-bust" src="${agent.bustPortrait}" alt="" srcset="">
            </div>
        </div>
        <div class="nombre-agente">${agent.displayName}</div>
    </div>`;
}