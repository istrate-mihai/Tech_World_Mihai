import {projects, skills} from './data.js'

const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
  //Sections Active
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from the other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  //Toggle theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

PageTransitions();

let projectsArea = document.getElementsByClassName("portfolios")[0];
let nrOfProjects = projects.length;
let projectsInserted = "";
let skillsArea = document.getElementsByClassName("progress-bars")[0];
let nrOfSkills = skills.length;
let skillsInserted = "";

for (let i = 0; i < nrOfProjects; i++) {
  projectsInserted += `       
                        <div class="portfolio-item">
                          <h2 class="item-header">${projects[i].name}</h2>
                          <div class="image">
                            <img src="./images/${projects[i].img}" alt="portfolioImage" />
                          </div>
                          <div class="hover-items">
                            <h3>Project Source</h3>
                            <div class="icons">
                              <a href="${projects[i].github}" target="_blank" class="icon">
                                <i class="fab fa-github"></i>
                              </a>
                              <a href="${projects[i].website}" target="_blank" class="icon">
                                <i class="fa-solid fa-eye"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      `;
}

for (let i = 0; i < nrOfSkills; i++) {
  skillsInserted += `                
                      <div class="progress-bar">
                        <p class="prog-title">${skills[i].skillTitle}</p>
                        <div class="progress-con">
                          <p class="prog text">${skills[i].skillPercentage}</p>
                          <div class="progress">
                            <span class="css"></span>
                          </div>
                        </div>
                      </div>
                    `;
}

projectsArea.innerHTML = projectsInserted;
skillsArea.innerHTML = skillsInserted;
