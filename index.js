// alert("test");
// get main div and clear it out
// make sure ids are unique

// NODE GETTERS
const mainDiv = () => document.getElementById("main");
const scienceFictionLink = () => document.getElementById("ScienceF");

// EVENT LISTENERS

function attachScienceFictionCLickEvent() {
  scienceFictionLink().addEventListener("click", renderScienceFictionPage);
}

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, {
    direction: "left",
  });
  instances.open();
});

// EVENT HANDLERS

function renderHomePage() {
  // create the html elements for the home page
  resetMainDiv();

  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.innerText = "Books by Subject Homepage";
  p.innerText =
    "Minim quis consequat enim pariatur esse consectetur consequat ullamco ad aute fugiat ea esse. Culpa nulla ipsum deserunt ut amet in voluptate fugiat ullamco sunt nisi consequat. Eu ut incididunt aliqua culpa aliquip. Non magna ea elit magna nisi sit quis sunt enim ut et. Nisi sit duis cupidatat consectetur nostrud eu eiusmod enim ex quis. Sunt deserunt ipsum mollit esse nisi laboris est anim sunt aliqua cillum incididunt amet. Aute aute id excepteur mollit sit adipisicing aliquip.";

  mainDiv().appendChild(h1);
  mainDiv().appendChild(p);
}

function renderScienceFictionPage() {
  resetMainDiv();

  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const button = document.createElement("button");

  h1.innerText = "Science Fiction";
  p.innerText = "Use button to select year";
  button.innerText = "Years";

  h1.style.marginTop = "0";
  p.style.marginTop = "0";
  button.style.marginTop = "0";

  mainDiv().appendChild(h1);
  mainDiv().appendChild(p);
  mainDiv().appendChild(button);
}

// HELPERS
function resetMainDiv() {
  mainDiv().innerHTML = "";
}
// cleans up code because you will be using it often

// DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", () => {
  renderHomePage();
  attachScienceFictionCLickEvent();
});

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

// document.addEventListener("click", (event) => {
//   if (event.target.matches("dropdown")) {
//     event.target.style.color = "red";
//   }
// });

// document.addEventListener("change", (event) => {
//   if (event.target.matches("#subject-dropdown")) {
//     const ul = document.querySelector("#subject-dropdown");
//     ul.innerHTML = "";
//     const filteredSubjects = subjects.filter(
//       (subject) => subject[0] === event.target.value
//     );
//     addSubjectNamesToDom(filteredSubjects);
//   }
// });

// getSubjects();
// getSubjectNames();
// addSubjectNamesToDom();
