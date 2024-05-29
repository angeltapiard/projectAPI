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

    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');
        characterCard.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
           
        `;
        appContainer.appendChild(characterCard);
    });
}

displayCharacters();

