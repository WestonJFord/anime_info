
// getAnime getter, to allow additional information to be passed to main if possible
export const getAnime = (animeName) => {
    let anime = fetchAnime(animeName);
    return anime;
}

export const getSpotLightCharacter = (anime) => {
    return fetchSpotlightCharacter(anime)
}

// fetch anime from Anilist API
const fetchAnime = async (animeName) => {
    // Here we define our query as a multi-line string
    // Storing it in a separate .graphql/.gql file is also possible
    let query = `
    query ($search: String) { # Define which variables will be used in the query (id)
    Media (search: $search, type: ANIME, isAdult: false) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
        id
        title {
        romaji
        english
        native
        }
        coverImage {
            extraLarge
        }
        characters {
            edges {
                node {
                    id
                }
            }
        }
    }
    }
    `;

    // Define our query variables and values that will be used in the query request
    let variables = {
        search: animeName
    };

    // Define the config we'll need for our Api request
    let url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };

    // Make the HTTP Api request
    let response = await fetch(url, options);
    if (response.ok) {
        return await response.json()
    }
}

const fetchSpotlightCharacter = async (anime) => {
    let characters = anime.data.Media.characters.edges;
    console.log(characters);
    let max = characters.length;
    let spotlightCharacter = characters[randInt(0,max)].node.id;
    console.log(spotlightCharacter);
    // Here we define our query as a multi-line string
    // Storing it in a separate .graphql/.gql file is also possible
    let query = `
    query ($id: Int) { # Define which variables will be used in the query (Int)
        Character(id: $id) {
            name {
              first
              middle
              last
              full
              native
              userPreferred
            }
            image {
                large
            }
          }
        }
    `;

    // Define our query variables and values that will be used in the query request
    let variables = {
        id: spotlightCharacter
    };

    // Define the config we'll need for our Api request
    let url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };

    // Make the HTTP Api request
    let response = await fetch(url, options);
    if (response.ok) {
        return await response.json()
    }
}

let randInt = (min, max) => {
    return Math.floor(Math.random() * (max - min +1)) + min
}