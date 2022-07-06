// alert("test");
// get main div and clear it out
// make sure ids are unique

const mainDiv = () => document.getElementById("main");

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

function resetMainDiv() {
  mainDiv().innerHTML = "";
}
// cleans up code because you will be using it often

document.addEventListener("DOMContentLoaded", () => renderHomePage());
