const apiUrl = 'https://api.pokemontcg.io/v1/cards?name=tyranitar'

const cardsElement = document.querySelector('#cards');

async function getCards() {

    const response = await fetch(apiUrl);
    const json = await response.json();

    json.cards.forEach((card) => {
        const image = document.createElement('img');
        image.src = card.imageUrl;
        cardsElement.append(image);
    });
};

getCards();