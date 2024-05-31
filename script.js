const apiUrl = 'https://rickandmortyapi.com/api/character/';

async function fetchCharacters() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function displayCharacters() {
    const characters = await fetchCharacters();
    const appContainer = document.getElementById('app');
    const rowsContainer = document.createElement('div');
    rowsContainer.classList.add('rows-container');

    let row;
    characters.forEach((character, index) => {
        // Crear una nueva fila cada 5 personajes
        if (index % 5 === 0) {
            row = document.createElement('div');
            row.classList.add('character-row');
            rowsContainer.appendChild(row);
        }

        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');
        characterCard.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
        `;
        row.appendChild(characterCard);
    });

    appContainer.appendChild(rowsContainer);
}

displayCharacters();
