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
  poemList().addEventListener("click", renderPoemListPage);
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
  const p = document.createElement("p");

  h1.innerText = "Poem of the Day";
  p.innerText = data;

  h1.style.marginTop = "20px";

  mainDiv().appendChild(h1);
  mainDiv().appendChild(p);
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
    .then(function (response) {
      response.json().then(function (data) {
        console.log(data);
      });
    })
    .catch(function (error) {
      console.log("Fetch Error:", error);
    });
};
// fetch returns a promise

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
