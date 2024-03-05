import { projects, skills, educations, works } from "./data.js";

$(document).ready(function() {
    const sections    = $(".section");
    const sectBtns    = $(".controlls");
    const sectBtn     = $(".control");
    const allSections = $(".main-content");

    let isLightMode   = false;
    function setMainPhotoPopup() {
      let modal       = $("#mainPhotoModal");
      let img         = $("#main-photo");
      let modalImg    = $("#modal-image");
      let captionText = $("#caption");
      let sectBtns    = $(".controlls");

      img.click(function() {
          modal.css("display", "block");
          modalImg.attr("src", this.src);
          captionText.html('');
          sectBtns.css("display", "none");
      });

      let span = $(".close").eq(0);

      span.click(function() {
          modal.css("display", "none");
          sectBtns.css("display", "flex");
      });
    }

    function setPageTransitions() {
      //Button click active class
      sectBtn.click(function() {
          let currentBtn = $(".active-btn");
          currentBtn.removeClass("active-btn");
          $(this).addClass("active-btn");
      });

      //Sections Active
      allSections.on("click", (e) => {
          const id = $(e.target).data("id");
          if (id) {
              //remove selected from the other btns
              sectBtns.removeClass("active");
              $(e.target).addClass("active");
              //hide other sections
              sections.removeClass("active");
              $("#" + id).addClass("active");
          }
      });

      //Toggle theme
      const themeBtn = $(".theme-btn");
      themeBtn.click(function() {
          $("body").toggleClass("light-mode");
          isLightMode = !isLightMode;

          if (isLightMode) {
              $(this).attr('title', 'Dark Mode');
          } else {
              $(this).attr('title', 'Light Mode');
          }
      });
  }

    setPageTransitions();
    setMainPhotoPopup();

    let projectsArea       = $(".portfolios").eq(0);
    let nrOfProjects       = projects.length;
    let projectsInserted   = "";
    let skillsArea         = $(".progress-bars").eq(0);
    let nrOfSkills         = skills.length;
    let skillsInserted     = "";
    let educationsArea     = $(".timeline").eq(1);
    let nrOfEducations     = educations.length;
    let educationsInserted = "";
    let worksArea          = $(".timeline").eq(2);
    let nrOfWorks          = works.length;
    let worksInserted      = "";

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
              <span class="${skills[i].cls}"></span>
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
      let workListItems     = "";
      let responsabilities  = works[i].responsabilities;
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

    projectsArea.html(projectsInserted);
    skillsArea.html(skillsInserted);
    educationsArea.html(educationsInserted);
    worksArea.html(worksInserted);
});
