import data from "./projects.json" assert { type: "json" };
// console.log(data);

let tag = "All";
let projectsElement = document.getElementById("projects");
projectsElement.innerHTML = "";
let projectSelectorElement = document.getElementById("page-selector");

function changeState(state) {
  let buttons = document.getElementsByClassName("selective");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("focused");
  }

  buttons[state].classList.add("focused");

  tag = buttons[state].innerHTML;

  console.log(tag);
}

function fillProjects(start, end) {
  for (let i = start; i < end; i++) {
    let divBoxProject = document.createElement("div");
    divBoxProject.classList.add("box");
    divBoxProject.classList.add("project");

    /*FIGURE PART*/
    let divFigure = document.createElement("div");
    divFigure.classList.add("figure");

    let img = document.createElement("img");
    img.classList.add("img-fluid");
    img.alt = data["projects"][i]["alt"];
    img.src = "images/" + data["projects"][i]["image"];
    divFigure.appendChild(img);

    /*DESCRIPTION PART*/
    let divProject_desc = document.createElement("div");
    divProject_desc.classList.add("project-desc");

    let pTags = document.createElement("p");
    pTags.classList.add("tags");
    for (let j = 0; j < data["projects"][i]["tags"].length; j++) {
      let span = document.createElement("span");
      span.innerHTML = "#" + data["projects"][i]["tags"][j];
      pTags.appendChild(span);
    }
    divProject_desc.appendChild(pTags);

    let h2Title = document.createElement("h2");
    h2Title.classList.add("title");
    h2Title.innerHTML = data["projects"][i]["name"];
    divProject_desc.appendChild(h2Title);

    let pSubtext = document.createElement("p");
    pSubtext.classList.add("subtext");
    pSubtext.innerHTML = data["projects"][i]["description"];
    divProject_desc.appendChild(pSubtext);

    let divBtns = document.createElement("div");
    divBtns.classList.add("btns");

    let divBtn_filled = document.createElement("a");
    divBtn_filled.classList.add("btn-filled");
    divBtn_filled.classList.add("btn");
    divBtn_filled.innerHTML = "Demo";
    divBtn_filled.href = data["projects"][i]["demoLink"];

    let divBtn_solid = document.createElement("a");
    divBtn_solid.classList.add("btn-solid");
    divBtn_solid.classList.add("btn");
    divBtn_solid.innerHTML = "Code";
    divBtn_solid.href = data["projects"][i]["code"];

    divBtns.appendChild(divBtn_filled);
    divBtns.appendChild(divBtn_solid);
    divProject_desc.appendChild(divBtns);

    /*SHADOW*/
    let divShadow_box = document.createElement("div");
    divShadow_box.classList.add("shadow-box");

    divBoxProject.appendChild(divFigure);
    divBoxProject.appendChild(divProject_desc);
    divBoxProject.appendChild(divShadow_box);

    projectsElement.appendChild(divBoxProject);
  }
}

fillProjects(0, 3);

function createPageSelector() {}
