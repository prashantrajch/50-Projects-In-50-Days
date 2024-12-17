const userList = document.getElementById("result");
const search = document.getElementById("search");
const listItems = [];

const URL = "https://randomuser.me/api?results=50";

async function fetchRamdomUser() {
  const res = await fetch(URL);
  const { results } = await res.json();

  // Clear result
  userList.innerHTML = "";

  results.forEach((user) => {
    let liElm = document.createElement("li");

    listItems.push(liElm);
    liElm.innerHTML = `
              <img src="${user.picture.large}" alt="${user.name.first}"/>
              <div class="user-info">
                  <h4>${user.name.first}&nbsp;${user.name.last}</h4>
                  <p>${user.location.city},${user.location.country}</p>
              </div>
          `;
    userList.append(liElm);
  });
}

fetchRamdomUser();

search.addEventListener("input", (e) => filterDate(e.target.value));

function filterDate(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
