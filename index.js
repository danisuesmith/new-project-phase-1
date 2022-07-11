// alert("test");

// NODE GETTERS
// const mainDiv = () => document.getElementById("main");
// const homePageLink = () => document.getElementById("homepage-link");
// const scienceFictionLink = () => document.getElementById("fav-books");

// // EVENT LISTENERS
const spellList = document.getElementById("spellList");
const searchBar = document.getElementById("searchBar");

let hpSpells = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredSpells = hpSpells.filter((spell) => {
    return (
      spell.spell.toLowerCase().includes(searchString) ||
      spell.use.toLowerCase().includes(searchString)
    );
  });
  displaySpells(filteredSpells);
});

const loadSpells = async () => {
  try {
    const res = await fetch(
      "https://fedeperin-harry-potter-api-en.herokuapp.com/spells"
    );
    

const displaySpells = (spellList) => {
  const htmlString = hpSpells
    .map((htmlString) => {
      return `
            <li class="Book">
                <h2>${htmlString.spell}</h2>
                <p>House: ${htmlString.use}</p>
            </li>
        `;
    })
    .join("");
  spellList.innerHTML = htmlString;
};

loadSpells();
displaySpells();

// function attachHomePageLink() {
//   homePageLink().addEventListener("click", renderHomePage);
// }

// function attachScienceFictionCLickEvent() {
//   scienceFictionLink().addEventListener("click", renderScienceFictionPage);
// }

// EVENT HANDLERS

// function renderHomePage() {
//   // create the html elements for the home page
//   resetMainDiv();
// }

// // make an "my picks book page?"
// function renderScienceFictionPage() {
//   resetMainDiv();

//   const h1 = document.createElement("h1");
//   const p = document.createElement("p");
//   const ul = document.createElement("ul");

//   h1.innerText = "Science Fiction";
//   p.innerText = "Use button to select years";
//   ul.innerText = "1500-1600 1700-1800";

//   h1.style.marginTop = "0";
//   p.style.marginTop = "0";

//   mainDiv().appendChild(h1);
//   mainDiv().appendChild(p);
//   mainDiv().appendChild(ul);
// }

// // HELPERS
// function resetMainDiv() {
//   mainDiv().innerHTML = "";
// }
// cleans up code because you will be using it often

// // DOM CONTENT LOADED
// document.addEventListener("DOMContentLoaded", () => {
//   renderHomePage();
//   attachHomePageLink();
//   attachScienceFictionCLickEvent();
// });

// not working and messed up button
// drop down button

// let subjects = [];

// function getSubjects() {
//   const imgUrl = "https://covers.openlibrary.org/b/isbn/9780385533225-S.jpg";
//   return fetch(imgUrl)
//     .then((response) => response.json())
//     .then((response) => {
//       console.log("response", response.message);
//       const subjectImgContainer = document.getElementById("main");
//       response.message.forEach((url) => {
//         const img = document.createElement("img");
//         img.src = url;
//         subjectImgContainer.append(img);
//       });
//     });
// }

// function getSubjectNames() {
//   const subjectUrl = "http://openlibrary.org/subjects.json?published_in=any";
//   fetch(subjectUrl)
//     .then((response) => response.json())
//     .then((response) => {
//       subjects = Object.key(response.message);
//       addSubjectNamesToDom(subjects);
//     });
// }

// function addSubjectNamesToDom(covers) {
//   const ul = document.querySelector("#subject-dropdown");
//   covers.map((subjects) => {
//     const li = document.createElement("li");
//     li.textContent = subjects;
//     ul.append(li);
//   });
// }

// getSubjects();
// getSubjectNames();
// addSubjectNamesToDom();
