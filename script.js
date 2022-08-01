const USER_API = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser('uimkatali');

async function getUser(user) {
  const response = await fetch(USER_API + user);
  const data = await response.json();

  createUserCard(data);
}

function createUserCard(user) {

  const cardContent = `
        <div class="glassmorphism-info-card">
        <div class="card">
            <div class="image-container">
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.html_url}</p>
                
                <ul class="info">
                    <li>${user.company}</li>
                    <li>${user.location}</li>
                    <li>${user.public_repos}</li>
                </ul>
            </div>
        </div>

        </div>
       
    `;

  main.innerHTML = cardContent;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
