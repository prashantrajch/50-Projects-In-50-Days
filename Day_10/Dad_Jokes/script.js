const jokesDiv = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

async function generateJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "Application/json",
    },
  });
  const result = await response.json();
  jokesDiv.innerText = result.joke;
}

jokeBtn.addEventListener("click", generateJoke);
