const allPokemonURL = "https://pokeapi.co/api/v2/pokemon/";

// Function for making Requests
const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

// Get All the pokemons
getAllPokemons();
async function getAllPokemons() {
  const { results } = await fetchData(allPokemonURL);

  getOnePokemonAtATime(results);
}

// Get One pokemon details
function getOnePokemonAtATime(pokemons) {
  pokemons.forEach(async (pokemon) => {
    const data = await fetchData(pokemon.url);

    // console.log(data);
    showDataInDOM(data);
  });
}

function showDataInDOM(data) {
  
}
