const API_URL = "https://api.github.com/users/";

const form = document.getElementById("form");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problem fetching repos");
  }
}

function createUserCard(user) {
  const cardHTML = `
         <div class="card">
        <div class="left-side">
          <img
            src="${user.avatar_url}"
            alt="${user.name}"
            class="avatar"
          />
        </div>
        <div class="right-side">
          <h1 class="user-title">${user.name}</h1>
          <p>
          ${user.bio}
          </p>
          <ul>
            <li class="followers">
              <span>${user.followers}</span>
              <strong>Followers</strong>
            </li>
            <li class="following">
              <span>${user.following}</span>
              <strong>Following</strong>
            </li>
            <li class="repos">
              <span>${user.public_repos}</span>
              <strong>Repos</strong>
            </li>
          </ul>
          <div id="repos">
          </div>
        </div>
      </div>`;
  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class='card'>
    <h1>${msg}</h1>
    </div>
    `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposElem = document.getElementById("repos");
  repos.slice(0, 10).forEach((repo) => {
    const repoElem = document.createElement("a");
    repoElem.classList.add("repo");
    repoElem.href = repo.html_url;
    repoElem.target = "_blank";
    repoElem.innerText = repo.name;
    reposElem.append(repoElem);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = e.target[0].value;
  if (user) {
    getUser(user);
    e.target[0].value = "";
  }
});
