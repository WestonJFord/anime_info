import { getAnime, getSpotLightCharacter } from "./modules/aniListApi.js";

/* Declare and initialize global variables */

const animeFeature = document.getElementById('animeFeature');
// const animeQuotes = [];

/* async displayAnimes Function */

const displayAnime = async (animeName) => {
    let anime = await getAnime(animeName);
    // console.log(anime.data.Media.coverImage.extraLarge);
    let h1 = document.createElement('h1');
    h1.textContent = anime.data.Media.title.english;
    let img = document.createElement('img');
    img.src = anime.data.Media.coverImage.extraLarge;
    animeFeature.appendChild(h1);
    animeFeature.appendChild(img);

    let spotlightCharacter = await getSpotLightCharacter(anime);
    let spotLightNameH2 = document.createElement('h2')
    spotLightNameH2.textContent = `${spotlightCharacter.data.Character.name.first} ${spotlightCharacter.data.Character.name.last}`;
    let spotlightimg = document.createElement('img');
    spotlightimg.src = spotlightCharacter.data.Character.image.large;
    animeFeature.appendChild(spotLightNameH2);
    animeFeature.appendChild(spotlightimg)
};

// //getAnime from Anilist API

// const getAnime = async (animeName) => {
//     // Here we define our query as a multi-line string
//     // Storing it in a separate .graphql/.gql file is also possible
//     let query = `
//     query ($search: String) { # Define which variables will be used in the query (id)
//     Media (search: $search, type: ANIME, isAdult: false) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
//         id
//         title {
//         romaji
//         english
//         native
//         }
//         coverImage {
//             extraLarge
//         }
//     }
//     }
//     `;

//     // Define our query variables and values that will be used in the query request
//     let variables = {
//         search: animeName
//     };

//     // Define the config we'll need for our Api request
//     let url = 'https://graphql.anilist.co',
//         options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             },
//             body: JSON.stringify({
//                 query: query,
//                 variables: variables
//             })
//         };

//     // Make the HTTP Api request
//     fetch(url, options).then(handleResponse)
//                     .then(handleData)
//                     .catch(handleError);
// }

// function handleResponse(response) {
//     return response.json().then(function (json) {
//         return response.ok ? json : Promise.reject(json);
//     });
// }

// function handleData(data) {
//     console.log(data);
// }

// function handleError(error) {
//     alert('Error, check console');
//     console.error(error);
// }

/* reset Function */

function reset() {
    animeFeature.innerHTML = '';
};

/* selectAnime Function */

function selectAnime(animes) {
    reset();
    let filter = document.querySelector('#selectAnime');
    switch(filter.value) {
        case 'ascendanceOfABookworm':
            displayAnime('Ascendance of a Bookworm');
            break;
        case 'mushokuTensei':
            displayAnime('Mushoku Tensei');
            break;
        case 'dragonBall':
            displayAnime('Dragon Ball')
            break;
        case 'jujutsuKaisen':
            displayAnime('Jujutsu Kaisen')
            break;
        case 'fMABrotherhood':
            displayAnime('Full Metal Alchemist: Brotherhood')
            break;
        case 'naruto':
            displayAnime('Naruto')
            break;
        case 'random':
            break;
    };
};

/* Event Listener */

document.querySelector("#selectAnime").addEventListener("change", () => {
    selectAnime()
});