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

let projects = [
  {
    name: "Javascript Game Area",
    img: "Javascript-Games.png",
    github: "https://github.com/Istrate-Mihai/Javascript-Games/tree/master",
    website: "https://javascript-game-area.netlify.app/",
  },

  {
    name: "Lord of The Rings Area",
    img: "Lord-Of-The-Rings-Area.png",
    github: "https://github.com/Istrate-Mihai/Lord-Of-The-Rings-Area",
    website: "https://lord-of-the-rings-area.netlify.app/",
  },
  {
    name: "Computer History",
    img: "Computer-History.png",
    github: "https://github.com/Istrate-Mihai/My-First-Website",
    website: "https://computer-history.netlify.app/",
  },

  {
    name: "Link Academy Portfolio",
    img: "digital_portfolio.jpg",
    github: "https://github.com/Istrate-Mihai/Link-Academy-Portfolio",
    website: "portfolio_and_cv/Portfolio-Istrate_Mihai_Septimius.7z",
  },

  {
    name: "Notebook App",
    img: "your_notebook.png",
    github: "https://github.com/Istrate-Mihai/Notebook-App",
    website: "https://yournotebookapp.000webhostapp.com/index.php",
  },
];

let projectsArea = document.getElementsByClassName("portfolios")[0];
let nrOfProjects = projects.length;
let projectsInserted = "";

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

projectsArea.innerHTML = projectsInserted;
