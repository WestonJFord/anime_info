/* Declare and initialize global variables */

const animeFeature = document.getElementById('animeFeature');
// const animeQuotes = [];

/* async displayAnimes Function */

const displayAnimes = (animes) => {
};

// getAnimeQuote using animeQuotes API

const getAnimeQuote = async (animeName) => {
    let response = await fetch(`https://animechan.xyz/api/random/anime?title=${animeName}`);
    console.log(await response.json())
}

/*get list of animes with quotes available*/
const getAvailableQuotes = async () => {
    fetch('https://animechan.vercel.app/api/available/anime')
    .then(response => response.json())
    .then(animes => console.log(animes))
    // let response = await fetch('');
    // if (response.ok) {
    //     console.log(await response.json())
    //     // availableQuotesList.push(await response.json());
    // }
}
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
            getAnimeQuote(animeName);
            break;
        case 'blackClover':
            var animeName = 'black-clover';
            getAnimeQuote(animeName);
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

getAvailableQuotes()

/* Event Listener */

document.querySelector("#selectAnime").addEventListener("change", () => {
    selectAnime()
});