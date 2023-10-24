/* W05: Programming Tasks */

/* Declare and initialize global variables */

const animeFeature = document.getElementById('animeFeature');
const animeQuotes = [];

/* async displayAnimes Function */

const displayAnimes = (animes) => {
    animes.forEach(anime => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = anime.animeName;
        let img = document.createElement('img');
        img.src = anime.imageUrl;
        img.alt = anime.animeName;
        article.appendChild(h3);
        article.appendChild(img)
        animeFeature.appendChild(article);
    });
    // console.log(animeFeature)
};

/* async getAnimes Function using fetch()*/

const getAnimes = async () => {
    let response = await fetch('');
    if (response.ok) {

        animeList.push(await response.json());
        
    };
};

/* reset Function */

function reset() {
    animeFeature.innerHTML = '';
};

/* sortBy Function */

function sortBy(animes) {
    reset();
    let filter = document.querySelector('#sortBy');
    switch(filter.value) {
        case 'bleach':
            break;
        case 'blackClover':
            break;
        case 'dragonBall':
            break;
        case 'jujutsuKaisen':
            break;
        case 'fMABrotherhood':
            break;
        case 'naruto':
            break;
        case 'random':
            break;
    };
};

getAnimes();

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList[0]) });