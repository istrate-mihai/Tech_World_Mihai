import { projects, skills, educations, works } from "./data.js";

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
let educationsArea = document.getElementsByClassName("timeline")[1];
let nrOfEducations = educations.length;
let educationsInserted = "";
let worksArea = document.getElementsByClassName("timeline")[2];
let nrOfWorks = works.length;
let worksInserted = "";

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
                                <i class='fas fa-desktop'></i>
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

for (let i = 0; i < nrOfEducations - 1; i++) {
  educationsInserted += `       
                          <div class="timeline-item">
                            <div class="tl-icon">
                              <i class="fa fa-briefcase"></i>
                            </div>
                            <p class="tl-duration">${educations[i].duration}</p>
                            <h5>
                              ${educations[i].educationTitle}
                              <span>
                                -
                                <a href="${educations[i].link}" target="blank">
                                  ${educations[i].institutionTitle}
                                </a>
                              </span>
                            </h5>
                            <p>${educations[i].institutionDescription}</p>
                          </div>
                        `;
}

let otherEducationLinks = "";
let nrOfotherEducationLinks =
  educations[nrOfEducations - 1].educationTitle.length; /*
                                                          Accessing the last object of educations array to get 
                                                          all the links of it's educationTitle property
                                                        */
for (let i = 0; i < nrOfotherEducationLinks; i++) {
  otherEducationLinks += `
                            <p class="otherCertificate">
                              <a href="${
                                educations[nrOfEducations - 1].educationTitle[i]
                                  .otherEducationLink
                              }" target="_blank">
                              ${
                                educations[nrOfEducations - 1].educationTitle[i]
                                  .otherEducationTitle
                              }
                              </a>
                            </p>
                          `;
}

educationsInserted += `
                        <div class="timeline-item">
                          <div class="tl-icon">
                            <i class="fa fa-briefcase"></i>
                          </div>
                          <p class="tl-duration">Other Certificates</p>
                          ${otherEducationLinks}
                        </div>
                        `;

for (let i = 0; i < nrOfWorks; i++) {
  // Getting all the elements of the responsabilities array property for each work object and inserting them in the template
  let workListItems = "";
  let responsabilities = works[i].responsabilities;
  let nrOfWorkListItems = responsabilities.length;

  for (let j = 0; j < nrOfWorkListItems; j++) {
    workListItems += `<li>${responsabilities[j]}</li>`;
  }

  worksInserted += `       
                    <div class="timeline-item">
                      <div class="tl-icon">
                        <i class="fa fa-briefcase"></i>
                      </div>
                      <p class="tl-duration">${works[i].duration}</p>
                      <h5>${works[i].title}</h5>
                      <p>Responsibilities:</p>
                      <p>
                        <ul>
                          ${workListItems}
                        </ul>
                      </p>
                    </div>
                  `;
}

projectsArea.innerHTML = projectsInserted;
skillsArea.innerHTML = skillsInserted;
educationsArea.innerHTML = educationsInserted;
worksArea.innerHTML = worksInserted;
