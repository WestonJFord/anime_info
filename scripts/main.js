/* Declare and initialize global variables */

const animeFeature = document.getElementById('animeFeature');
const animeQuotes = [];

/* async displayAnimes Function */

const displayAnimes = (animes) => {
};

// getAnimeFact using animeFacts API

const getAnimeFact = async (animeName) => {
    let response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/:${animeName}`);
    console.log(await response.json())
}

/* async getAnimes Function using fetch()*/

// const getAnimes = async () => {
//     let response = await fetch('');
//     if (response.ok) {
//         await response.json().forEach(anime => {
//             animeList.push(anime)
//         });
        
//     };
// };

/* reset Function */

function reset() {
    animeFeature.innerHTML = '';
};

/* selectAnime Function */

function selectAnime(animes) {
    reset();
    let filter = document.querySelector('#selectAnime');
    switch(filter.value) {
        case 'bleach':
            var animeName = 'bleach';
            return(animeName);
            break;
        case 'blackClover':
            var animeName = 'black-clover';
            return(animeName)
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

// getAnimes();

/* Event Listener */

document.querySelector("#selectAnime").addEventListener("change", () => {
    // selectAnime()
    getAnimeFact(selectAnime())
});