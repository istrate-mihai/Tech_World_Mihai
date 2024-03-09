// TODO

// let otherEducationLinks = "";
// let nrOfotherEducationLinks =
//   educations[nrOfEducations - 1].educationTitle.length; /*
//                                                           Accessing the last object of educations array to get
//                                                           all the links of it's educationTitle property
//                                                         */
// for (let i = 0; i < nrOfotherEducationLinks; i++) {
//   otherEducationLinks += `
//                       <p class="otherCertificate">
//                         <a href="${
//   educations[nrOfEducations - 1].educationTitle[i]
//       .otherEducationLink
//   }" target="_blank">
//                         ${
//   educations[nrOfEducations - 1].educationTitle[i]
//       .otherEducationTitle
//   }
//                         </a>
//                       </p>
//                     `;
// }

// educationsInserted += `
//   <div class="timeline-item">
//     <div class="tl-icon">
//       <i class="fa fa-briefcase"></i>
//     </div>
//     <p class="tl-duration">Other Certificates</p>
//     ${otherEducationLinks}
//   </div>
//   `;


import { educationList, awardList, workList, skillList, designList, webDevelopmentList } from "./data.js";

let sections     = $(".section");
let sectBtns     = $(".controlls");
let sectBtn      = $(".control");
let allSections  = $(".main-content");
let tabLinks     = $(".tablinks");
let isLightMode  = false;

$(document).ready(function() {
    setPageTransitions();
    setMainPhotoPopup();
    setTabLinks();
    createSectionList();
});

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
  // Button click active class
  sectBtn.click(function() {
      let currentBtn = $(".active-btn");
      currentBtn.removeClass("active-btn");
      $(this).addClass("active-btn");
  });

  // Sections Active
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

  // Toggle theme
  const themeBtn = $(".theme-btn");
  themeBtn.click(function() {
    $("body").toggleClass("light-mode");
    isLightMode = !isLightMode;

    if (isLightMode) {
        $(this).attr('title', 'Dark Mode');
    } else {
        $(this).attr('title', 'Light Mode');
    }

    tabLinks.first().click();
  });
}

function setTabLinks() {
  tabLinks.on('click', function(event) {
    event.preventDefault();
    let tabId = $(this).data("tab");
    $(".tabcontent").css("display", "none");
    $(".tablinks").css("background-color", "");
    $("#" + tabId).css("display", "grid");
    if (isLightMode) {
      $(event.currentTarget).css("background-color", "rgb(30, 144, 255)");
    }
    else {
      $(event.currentTarget).css("background-color", "rgb(39, 174, 96)");
    }
  });
  tabLinks.first().click();
};

function createSectionList() {
  let sectionList = [
    {
      selector: $('#educationList'),
      content: getSectionTemplate('Education')
    },
    {
      selector: $('#awardList'),
      content: getSectionTemplate('Award')
    },
    {
      selector: $("#workList"),
      content: getSectionTemplate('Work')
    },
    {
      selector: $("#skillList"),
      content: getSectionTemplate('Skill')
    },
    {
      selector: $("#designList"),
      content: getSectionTemplate('Design')
    },
    {
      selector: $("#webDevelopmentList"),
      content: getSectionTemplate('Web Development')
    },
  ];

  for (let i = 0; i < sectionList.length; i++) {
    sectionList[i].selector.html(sectionList[i].content);
  }
}

function getSectionTemplate(name) {
  let sectionTemplate  = '';

  switch(name) {
    case 'Education':

      for (let i = 0; i < educationList.length; i++) {
        sectionTemplate += getEducationTemplate(educationList[i]);
      }
      break;

    case 'Award':
      for (let i = 0; i < awardList.length; i++) {
        sectionTemplate += getAwardTemplate(awardList[i]);
      }
      break;

    case 'Work':

      for (let i = 0; i < workList.length; i++) {
        sectionTemplate += getWorkTemplate(workList[i]);
      }
      break;

    case 'Skill':

      for (let i = 0; i < skillList.length; i++) {
        sectionTemplate += getSkillTemplate(skillList[i]);
      }
      break;

    case 'Design':

      for (let i = 0; i < designList.length; i++) {
        sectionTemplate += getDesignTemplate(designList[i]);
      }
    break;

    case 'Web Development':

      for (let i = 0; i < webDevelopmentList.length; i++) {
        sectionTemplate += getWebDevelopmentTemplate(webDevelopmentList[i]);
      }
    break;
  }

  return sectionTemplate;
}

function getEducationTemplate(educationData) {
  return  `
            <div class="timeline-item">
              <div class="tl-icon">
                <i class="fa fa-briefcase"></i>
              </div>
              <p class="tl-duration">${educationData.duration}</p>
              <h5>
                ${educationData.educationTitle}
                <span>
                  -
                  <a href="${educationData.link}" target="blank">
                    ${educationData.institutionTitle}
                  </a>
                </span>
              </h5>
              <p>${educationData.institutionDescription}</p>
            </div>
          `;
}

function getAwardTemplate(awardData) {
  return `
          <div class="timeline-item">
            <div class="tl-icon">
              <i class="fa fa-briefcase"></i>
            </div>

            <p class="tl-duration">${awardData.date}</p>
            <h5>${awardData.name}</h5>

            <p>${awardData.description}</p>
          </div>
        `;
}

function getWorkTemplate(workData) {
  let taskList = '';

  for (let i = 0; i < workData.taskList.length; i++) {
    taskList += `<li>${workData.taskList[i]}</li>`;
  }

  return `
          <div class="timeline-item">
            <div class="tl-icon">
              <i class="fa fa-briefcase"></i>
            </div>

            <p class="tl-duration">${workData.duration}</p>
            <h5>${workData.title}</h5>

            <p>Responsibilities:</p>

            <p>
              <ul>
                ${taskList}
              </ul>
            </p>
          </div>
        `;
}

function getSkillTemplate(skillData) {
  return `
          <div class="progress-bar">
            <p class="prog-title">${skillData.title}</p>

            <div class="progress-con">
              <p class="prog text">${skillData.percentage}</p>

              <div class="progress">
                <span class="${skillData.class}"></span>
              </div>
            </div>
          </div>
        `;
}

function getDesignTemplate(designData) {
  return `
          <div class="portfolio-item">
            <h2 class="item-header">${designData.name}</h2>

            <div class="image">
              <img src="${designData.img}" alt="portfolioImage" />
            </div>

            <div class="hover-items">
              <h3>Project Source</h3>

              <div class="icons">
                <a href="${designData.download}" target="_blank" class="icon" download>
                  <i class="fas fa-download"></i>
                </a>
              </div>
            </div>
          </div>
        `;
}

function getWebDevelopmentTemplate(webDevelopmentData) {
  return `
          <div class="portfolio-item">
            <h2 class="item-header">${webDevelopmentData.name}</h2>

            <div class="image">
              <img src="${webDevelopmentData.img}" alt="portfolioImage" />
            </div>

            <div class="hover-items">
              <h3>Project Source</h3>

              <div class="icons">
                <a href="${webDevelopmentData.github}" target="_blank" class="icon">
                  <i class="fab fa-github"></i>
                </a>

                <a href="${webDevelopmentData.website}" target="_blank" class="icon">
                  <i class='fas fa-desktop'></i>
                </a>
              </div>
            </div>
          </div>
        `;
}
