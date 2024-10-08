const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=91b594ce0703dd57859b36eaefe71018&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?&api_key=91b594ce0703dd57859b36eaefe71018&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementsByTagName("main")[0];

//Get initial movies
getMovies(API_URL);

console.log(process.env);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieElement = document.createElement("div");
    movieElement.setAttribute("class", "movie");
    movieElement.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <div class='movie-info'>
        <h3>${title}</h3>
        <span class=${getClassByRating(
          vote_average.toFixed(1)
        )}>${vote_average.toFixed(1)}</span>
        </div>
        <div class='overview'>
        <h3>Overview</h3>
        ${overview}
        </div>
        `;
    main.append(movieElement);
  });
}

function getClassByRating(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
