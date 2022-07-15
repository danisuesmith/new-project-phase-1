// alert("test");

// dark mode button
window.addEventListener("load", () => {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
  }

  const themeSelector = document.querySelector("#themeSelector");
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeSelector.textContent = "☀️";
  } else {
    themeSelector.textContent = "🌙️";
  }

  themeSelector.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "light") {
      localStorage.setItem("theme", "dark");
      themeSelector.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeSelector.textContent = "🌙️";
    }

    document.body.classList.toggle("dark");
  });
});

// NODE GETTERS
const mainDiv = () => document.getElementById("main");
const homePageLink = () => document.getElementById("homepage-link");
const randomPoemLink = () => document.getElementById("random-poem-link");
const poemList = () => document.getElementById("poem-list");

let poems = [];

// EVENT LISTENERS

function attachHomePageLink() {
  homePageLink().addEventListener("click", renderHomePage);
}

function attachRandomPoemClickEvent() {
  randomPoemLink().addEventListener("click", fetchRandomPoemPage);
}

function attachPoemListLink() {
  poemList().addEventListener("click", renderPoemListPage);
}

// EVENT HANDLERS

function renderHomePage() {
  resetMainDiv();
  const h1 = document.createElement("h1");

  const p = document.createElement("p");

  h1.innerText = "About 'Poem a Day' App";
  p.innerText =
    "Use this website to find your poem for the day. Maybe it gives you inspiration for your workday or leads you to new incredible writers. I hope you enjoy!";

  mainDiv().appendChild(h1);
  mainDiv().appendChild(p);
}

function renderRandomPoemPage(data) {
  resetMainDiv();

  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const p1 = document.createElement("p1");
  const ul = document.createElement("ul");
  const p2 = document.createElement("p2");
  const btn = document.createElement("button");

  h1.innerText = "Poem of the Day";
  h2.innerText = data.title;

  p1.innerText = data.poet.name;

  ul.innerText = data.content;

  p2.innerText = data.poet.url;

  btn.innerText = "Favorite ♥️";

  h1.style.textAlign = "left";
  h1.style.fontSize = "40px";

  h2.style.textAlign = "left";
  h2.style.fontSize = "20px";

  p1.style.textAlign = "left";
  p1.style.fontSize = "20px";

  ul.style.textAlign = "left";
  ul.style.fontSize = "15px";
  ul.style.paddingLeft = "50px";

  p2.style.textAlign = "left";
  p2.style.fontSize = "15px";
  p2.style.paddingLeft = "50px";

  btn.classList.add("btn");
  btn.style.display = "block";
  btn.style.background = "#006bb3";
  btn.style.marginLeft = "50px";
  btn.style.marginTop = "10px";

  btn.addEventListener("click", () => favoritePoem(data));

  mainDiv().appendChild(h1);
  mainDiv().appendChild(h2);
  mainDiv().appendChild(p1);
  mainDiv().appendChild(ul);
  mainDiv().appendChild(p2);
  mainDiv().appendChild(btn);
}

function renderPoemListPage() {
  resetMainDiv();

  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.innerText = "Poem List";
  p.innerText = "Here are a list of favorited poems. Enjoy!";

  h1.style.marginTop = "20px";

  p.style.textAlign = "left";
  p.style.fontSize = "20px";

  mainDiv().appendChild(h1);
  mainDiv().appendChild(p);

  renderPoems();
}
const renderPoems = () => {
  // const ul = document.createElement("ul");
  // poems.forEach((data) => renderPoem(data, ul));
  // mainDiv().appendChild(ul);

  const ul = document.createElement("ul");
  // const span = document.createElement("span");
  poems.forEach((data) => renderPoem(data, ul));

  // span.classList.add("");
  ul.classList.add("card");

  ul.style.display = "block";
  ul.style.background = "#ebf4f4";
  ul.style.marginLeft = "70px";
  ul.style.marginRight = "70px";
  ul.style.marginTop = "10px";

  mainDiv().appendChild(ul);
  // span.appendChild(ul);
};

const renderPoem = (data, ul) => {
  const li1 = document.createElement("li1");
  const li2 = document.createElement("li2");
  const li3 = document.createElement("li3");
  const li4 = document.createElement("li4");

  li1.innerText = data.poems.title;
  li2.innerText = data.poems.poet.name;
  li3.innerText = data.poems.content;
  li4.innerText = data.poems.url;

  li1.style.textAlign = "center";
  li1.style.display = "block";

  li2.style.textAlign = "center";
  li2.style.display = "block";

  li3.style.textAlign = "center";
  li3.style.display = "block";

  li4.style.textAlign = "center";
  li4.style.display = "block";
  li4.style.marginBottom = "20px";

  li1.classList.add("card-title");
  li2.classList.add("card-title");
  li3.classList.add("card-content");
  li4.classList.add("card-content");

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
};

const fetchRandomPoemPage = () => {
  fetch("https://www.poemist.com/api/v1/randompoems")
    .then((resp) => resp.json())
    .then((data) => {
      renderRandomPoemPage(data[0]);
    });
};

const fetchPoemListPage = () => {
  fetch("http://localhost:3000/liked-poems")
    .then((resp) => resp.json())
    .then((data) => (poems = data));
};

const favoritePoem = (data) => {
  fetch("http://localhost:3000/liked-poems", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ poems: data }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      poems.push(data);
      renderPoemListPage();
    });
};

// HELPERS
function resetMainDiv() {
  mainDiv().innerHTML = "";
}
// cleans up code because you will be using it often

// DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", () => {
  renderHomePage();
  fetchPoemListPage();
  attachRandomPoemClickEvent();
  attachHomePageLink();
  attachPoemListLink();
});
