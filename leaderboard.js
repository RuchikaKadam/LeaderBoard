const PlayerList = [];

function createButton(text, clickHandler) {
    const button = document.createElement('button');
    button.innerHTML = text;
    button.onclick = () => clickHandler();
    return button;
}

function displayErrorMessage(message) {
    const errorDiv = document.getElementById('error_message');
    errorDiv.innerText = message;
}

function addPlayer(event) {
    event.preventDefault();

    const playerList = document.getElementById('player_list');
    const elements = ['first_name', 'last_name', 'country', 'score'];

    if (elements.some(element => !document.getElementById(element).value)) {
        displayErrorMessage('All fields are required');
        return;
    }

    const playerData = {
        name: `${document.getElementById(elements[0]).value} ${document.getElementById(elements[1]).value}`,
        country: document.getElementById(elements[2]).value,
        score: Number(document.getElementById(elements[3]).value)
    };

    PlayerList.push(playerData);
    PlayerList.sort((player1, player2) => player2.score - player1.score);

    displayErrorMessage('');

    refreshList();
}

function increaseScoreHandler(index) {
    PlayerList[index].score += 5;
    refreshList();
}

function decreaseScoreHandler(index) {
    PlayerList[index].score -= 5;
    refreshList();
}

function deletePlayerHandler(index) {
    PlayerList.splice(index, 1);
    refreshList();
}

function refreshList() {
    const playerList = document.getElementById('player_list');
    PlayerList.sort((player1, player2) => player2.score - player1.score);
    playerList.innerHTML = '';

    PlayerList.forEach((player, index) => {
        const liEl = document.createElement('li');

        ['name', 'country', 'score'].forEach(contentElement => {
            const span = document.createElement('span');
            span.innerText = player[contentElement];
            liEl.appendChild(span);
        });

        ['🗑️', '+5', '-5'].forEach(action => {
            const button = createButton(action, () => {
                if (action === '🗑️') deletePlayerHandler(index);
                else if (action === '+5') increaseScoreHandler(index);
                else if (action === '-5') decreaseScoreHandler(index);
            });
            liEl.appendChild(button);
        });

        playerList.appendChild(liEl);
    });
}
