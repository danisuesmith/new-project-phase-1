// alert("test");

// NODE GETTERS
const mainDiv = () => document.getElementById("main");
const homePageLink = () => document.getElementById("homepage-link");
const randomPoemLink = () => document.getElementById("random-poem");
const contactLink = () => document.getElementById("contact");

// EVENT LISTENERS

function attachHomePageLink() {
  homePageLink().addEventListener("click", renderHomePage);
}

function attachRandomPoemLink() {
  randomPoemLink().addEventListener("click", renderRandomPoemPage);
}

// EVENT HANDLERS

function renderHomePage() {
  resetMainDiv();
  const h1 = document.createElement("h1");

  const p = document.createElement("p");

  h1.innerText = "About: Random Poem App";
  p.innerText =
    "Use this website to find your poem for the day. Maybe it gives you inpiration for your workday or leads you to new incredible writers. I hope you enjoy!";

  mainDiv().appendChild(h1);
  mainDiv().appendChild(p);
}

// make an "my picks book page?"
function renderRandomPoemPage() {
  resetMainDiv();

  const h1 = document.createElement("h1");

  h1.innerText = "POEM OF THE DAY";

  h1.style.marginTop = "0";

  mainDiv().appendChild(h1);
}

// HELPERS
function resetMainDiv() {
  mainDiv().innerHTML = "";
}
// cleans up code because you will be using it often

// DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", () => {
  renderHomePage();
  attachHomePageLink();
  renderRandomPoemPage();
  attachRandomPoemLink();
});
