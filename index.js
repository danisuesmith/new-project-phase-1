// alert("test");

// NODE GETTERS
const mainDiv = () => document.getElementById("main");
const homePageLink = () => document.getElementById("homepage-link");
const randomPoemLink = () => document.getElementById("random-poem-link");
const poemList = () => document.getElementById("poem-list");

// EVENT LISTENERS

function attachHomePageLink() {
  homePageLink().addEventListener("click", renderHomePage);
}

function attachRandomPoemClickEvent() {
  randomPoemLink().addEventListener("click", fetchRandomPoemPage);
}

function attachPoemListLink() {
  poemList().addEventListener("click", fetchPoemListPage);
}

// EVENT HANDLERS

function renderHomePage() {
  resetMainDiv();
  const h1 = document.createElement("h1");

  const p = document.createElement("p");

  h1.innerText = "About 'Poem a Day' App";
  p.innerText =
    "Use this website to find your poem for the day. Maybe it gives you inpiration for your workday or leads you to new incredible writers. I hope you enjoy!";

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

  h1.innerText = "Poem of the Day";
  h2.innerText = data.title;

  p1.innerText = data.poet.name;

  ul.innerText = data.content;

  p2.innerText = data.poet.url;

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

  mainDiv().appendChild(h1);
  mainDiv().appendChild(h2);
  mainDiv().appendChild(p1);
  mainDiv().appendChild(ul);
  mainDiv().appendChild(p2);
}

function renderPoemListPage() {
  resetMainDiv();

  const h1 = document.createElement("h1");

  h1.innerText = "Poem List";

  h1.style.marginTop = "20px";

  mainDiv().appendChild(h1);
}

const fetchRandomPoemPage = () => {
  fetch("https://www.poemist.com/api/v1/randompoems")
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data[0].poet.url);
      renderRandomPoemPage(data[0]);
    });
};

const fetchPoemListPage = () => {
   fetch
}

// HELPERS
function resetMainDiv() {
  mainDiv().innerHTML = "";
}
// cleans up code because you will be using it often

// DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", () => {
  renderHomePage();
  attachRandomPoemClickEvent();
  attachHomePageLink();
  attachPoemListLink();
});
