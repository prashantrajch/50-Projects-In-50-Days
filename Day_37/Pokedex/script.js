const pokeContainer = document.getElementById("container");
const colors = {
  fire: "#fddfdf",
  grass: "#defde0",
  electric: "#fcf7de",
  water: "#def3fd",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#f5f5f5",
  fighting: "#e6e0d4",
  normal: "#f5f5f5",
};

const mainTypes = Object.keys(colors);

const batchSize = 20; // Number of Pokémon to load per batch
let currentBatchStart = 1; // Track the current start of the batch
const totalPokemon = 150; // Total Pokémon to load
let isFetching = false; // Prevent duplicate API calls during batch load

// First Method
// const fetchPokemons = async () => {
//     // Fetch all Pokémon data in parallel
//     const promises = Array.from({ length: pokemonCount }, (_, i) =>
//       getPokemon(i + 1)
//     );
//     const pokemons = await Promise.all(promises);

//     // Create all Pokémon cards in a single operation
//     const pokemonCards = pokemons.map(createPokemonCard).join("");
//     pokeContainer.innerHTML = pokemonCards;
//   };

//Second Methoc
const fetchPokemonBatch = async (start, end) => {
  const promises = [];
  for (let i = start; i <= end; i++) {
    promises.push(getPokemon(i));
  }
  const pokemons = await Promise.all(promises);
  pokemons.forEach((pokemon) => {
    const pokemonCard = createPokemonCard(pokemon);
    pokeContainer.insertAdjacentHTML("beforeend", pokemonCard);
  });
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  return res.json();
};

const createPokemonCard = (pokemon) => {
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, "0");

  const pokeTypes = pokemon.types.map((type) => type.type.name);
  const type = mainTypes.find((type) => pokeTypes.includes(type));
  const color = colors[type];

  return `
    <div class="pokemon" style="background-color: ${color}">
      <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
      </div>
      <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
      </div>
    </div>
  `;
};

// Load the initial batch of Pokémon
const loadInitialData = async () => {
  const end = Math.min(batchSize, totalPokemon);
  await fetchPokemonBatch(currentBatchStart, end);
  currentBatchStart += batchSize;
};

// Infinite scroll logic
const handleScroll = async () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 10 && !isFetching) {
    // Fetch the next batch if scrolling near the bottom
    isFetching = true;

    if (currentBatchStart <= totalPokemon) {
      const end = Math.min(currentBatchStart + batchSize - 1, totalPokemon);
      await fetchPokemonBatch(currentBatchStart, end);
      currentBatchStart += batchSize;
    } else {
      console.log("All Pokémon have been loaded!");
    }

    isFetching = false;
  }
};

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  loadInitialData(); // Load the initial batch of Pokémon
  window.addEventListener("scroll", handleScroll); // Set up infinite scroll
});
