const pokemonsDiv = document.querySelector(".pokemons");

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
  const colors = [
    { f: "#e6e6ea", s: "#f4b6c2" },
    { f: "#b3cde0", s: "#651e3e" },
    { f: "#dec3c3", s: "#fe8a71" },
    { f: "#4b86b4", s: "#f9caa7" },
    { f: "#54b2a9", s: "#ee4035" },
    { f: "#d0e1f9", s: "#aaaaaa" },
    { f: "#fce9db", s: "#96ceb4" },

    { f: "#708090", s: " #fff4e6" },

    { f: "#8b9dc3", s: "#3b5998 " },

    { f: "#3385c6", s: "#ffd3b6" },
  ];
  pokemons.forEach(async (pokemon, index) => {
    const data = await fetchData(pokemon.url);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    showDataInDOM(data, index, randomColor);
  });
}

function showDataInDOM(data, index, randomColor) {
  const div = document.createElement("div");

  div.classList.add("pokemon");
  div.classList.add("card");
  div.classList.add("flex");

  const { f, s } = randomColor;
  console.log(f, s);
  //
  div.style.background = `linear-gradient(to right, ${f}, ${s})`;

  const { name, id, types } = data;
  let type;

  // background: linear-gradient(to right, #d1d1b8, #f58093);

  function setType() {
    type = types[0].type.name;
  }

  setType();

  let element = `
      <div class="avatar">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${id}.png" alt=""/>
      </div>

      <div class="info flex">
        <h3>#${index + 1}</h3>  

        <h4>${name}</h4>
        <div class="type flex">
          <h5>Type:&nbsp;</h5>
          <span>${type}</span>
        </div>
      </div>
  `;
  div.innerHTML = element;
  pokemonsDiv.appendChild(div);
}
