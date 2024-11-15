import {
  educationList,
  workList,
  awardList,
  certificateList,
  skillList,
  designList,
  electronicList,
  webDevelopmentList,
  AIApplicationList,
  puzzleList,
  drawingList
} from "./data.js";

import {
  staticLanguageContentIndex,
  staticLanguageContentArduino,
  staticLanguageSelectorContent,
  staticLanguageContentRoboSpider,
  staticLanguageContentD2LineFollower,
  staticLanguageContentRoboticsSection,
  staticLanguageContentPortfolioSection
} from "./languages.js";

let sections       = $(".section");
let sectBtns       = $(".controlls");
let sectBtn        = $(".control-js");
let allSections    = $(".main-content");
let tabLinks       = $(".tablinks");
let downloadCVLink = $(".download-CV");
let langKey        = "english";
let jsLogicLangArr = {
  "english": "Responsibilities",
  "german": "Verantwortlichkeiten"
};
let validLanguages = ['en', 'de'];

function setMainPhotoPopup() {
  let modal = $("#mainPhotoModal");
  let overlay = $(".overlay");
  let img = $("#main-photo");
  let modalImg = modal.find('img');
  let closeBtn = $(".btn-close");
  let sectBtns = $(".controlls");

  img.click(function () {
    overlay.removeClass("isHidden");
    modal.removeClass("isHidden");
    modalImg.attr("src", this.src);
    sectBtns.addClass("isHidden");
  });

  closeBtn.click(function () {
    modal.addClass("isHidden");
    overlay.addClass("isHidden");
    sectBtns.removeClass("isHidden");
  });
}

function setTechnicalDrawingModal() {
  let designItemList = $(".design-item img");

  designItemList.click(function () {
    let modal      = $("#cadCamTechnicalDrawingModal");
    let modalImage = modal.find('img');
    let overlay    = $(".overlay");
    let closeBtn = $(".btn-close");

    overlay.removeClass("isHidden");
    modal.removeClass("isHidden");
    modalImage.attr("src", $(this).attr('src'));
    sectBtns.addClass("isHidden");

    closeBtn.click(function () {
      modal.addClass("isHidden");
      overlay.addClass("isHidden");
      sectBtns.removeClass("isHidden");
    });
  });
}

function setPageTransitions() {
  // Button click active class
  sectBtn.click(function () {
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
}

function setTabLinks() {
  tabLinks.on('click', function (event) {
    event.preventDefault();
    let tabId = $(this).data("tab");

    $(".tabcontent").css("display", "none");
    $(".tablinks").css("background-color", "");
    $("#" + tabId).css("display", "grid");

    if (tabId === 'artisticDrawingList') {
      $('#puzzle-gallery-list').css("display", "none");
    }
  });
  $('.tablinks:first').trigger('click');
};

function setTabLinkOnSectionOpen() {
  let tabPuzzleList      = $("#tab-puzzleList")
  let tabPuzzleTitleList = $(".puzzleTab");

  $('#hobbys-control').on('click', function () {
    tabPuzzleList.on('click', function () {
      $(".puzzleTab").on('click', function (e) {
        let currentPuzzleTitleLink = $(e.currentTarget);
        let puzzleId               = currentPuzzleTitleLink.data('tab');
        let puzzleGallerySelector  = $('#puzzle-gallery-list');

        tabPuzzleTitleList.removeClass('active-puzzle-tab active-puzzle-tab-light');
        let puzzleGalleryDisplay = puzzleGallerySelector.css('display');
        if (puzzleGalleryDisplay === 'none') {
          puzzleGallerySelector.css('display', 'grid');
        }
        puzzleGallerySelector.html(getPuzzleImgList(puzzleId));
      });
    });
    tabPuzzleList.click();
  });
}

function createSectionList() {
  let sectionList = [
    {
      selector: $('#educationList'),
      content:  getSectionTemplate('Education')
    },
    {
      selector: $("#workList"),
      content:  getSectionTemplate('Work')
    },
    {
      selector: $('#awardList'),
      content:  getSectionTemplate('Award')
    },
    {
      selector: $('#certificateList'),
      content:  getSectionTemplate('Certificate')
    },
    {
      selector: $("#skillList"),
      content:  getSectionTemplate('Skill')
    },
    {
      selector: $("#webDevelopmentList"),
      content:  getSectionTemplate('Web Development')
    },
    {
      selector: $("#ai-applications"),
      content:  getSectionTemplate('Machine Learning')
    },
    {
      selector: $("#designList"),
      content: getSectionTemplate('Design')
    },
    {
      selector: $("#electronics"),
      content: getSectionTemplate('Electronics')
    },
    {
      selector: $("#puzzleList"),
      content:  getSectionTemplate('Puzzle List')
    },
    {
      selector: $("#artisticDrawingList"),
      content:  getSectionTemplate('Drawing List')
    },
  ];

  for (let i = 0; i < sectionList.length; i++) {
    sectionList[i].selector.html(sectionList[i].content);
  }
}

function getSectionTemplate(name) {
  let sectionTemplate = '';

  switch (name) {
    case 'Education':
      for (let i = 0; i < educationList.length; i++) {
        sectionTemplate += getEducationTemplate(educationList[i]);
      }
      break;

    case 'Work':
      for (let i = 0; i < workList.length; i++) {
        sectionTemplate += getWorkTemplate(workList[i]);
      }
      break;

    case 'Award':
      for (let i = 0; i < awardList.length; i++) {
        sectionTemplate += getAwardTemplate(awardList[i]);
      }
      break;

    case 'Certificate':
      for (let i = 0; i < certificateList.length; i++) {
        sectionTemplate += getCertificateTemplate(certificateList[i]);
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
      
    case 'Electronics':
      for (let i = 0; i < electronicList.length; i++) {
        sectionTemplate += getElectronicTemplate(electronicList[i]);
      }
      break;

    case 'Web Development':
      for (let i = 0; i < webDevelopmentList.length; i++) {
        sectionTemplate += getWebDevelopmentTemplate(webDevelopmentList[i]);
      }
      break;

    case 'Machine Learning':
      for (let i = 0; i < AIApplicationList.length; i++) {
        sectionTemplate += getAIApplicationListTemplate(AIApplicationList[i]);
      }
      break;

    case 'Puzzle List':
      for (let i = 0; i < puzzleList.length; i++) {
        sectionTemplate += getPuzzleListTemplate(puzzleList[i]);
      }
      break;

    case 'Drawing List':
      for (let i = 0; i < drawingList.length; i++) {
        sectionTemplate += getDrawingListTemplate(drawingList[i]);
      }
      break;
  }

  return sectionTemplate;
}

function getEducationTemplate(educationData) {
  return `
          <div class="timeline-item">
            <div class="tl-icon">
              <i class="${educationData.icon}"></i>
            </div>
            <p class="tl-duration">${educationData.duration}</p>
            <h5>
              ${educationData.educationTitle[langKey]}
              <span>
                -
                <a href="${educationData.link}" target="blank">
                  ${educationData.institutionTitle[langKey]}
                </a>
              </span>
            </h5>
            <p>${educationData.institutionDescription[langKey]}</p>
          </div>
        `;
}

function getAwardTemplate(awardData) {
  return `
        <div class="timeline-item">
          <div class="tl-icon">
            <i class="${awardData.icon}"></i>
          </div>

          <p class="tl-duration">${awardData.date}</p>
          <h5>${awardData.name[langKey]}</h5>

          <p>${awardData.description[langKey]}</p>
        </div>
      `;
}

function getCertificateTemplate(certificateData) {
  return `
        <div class="timeline-item">
          <div class="tl-icon">
            <i class="${certificateData.icon}"></i>
          </div>

          <p class="tl-duration">${certificateData.date}</p>
          <h5>${certificateData.name[langKey]}</h5>
          <p>By: ${certificateData.provider}</p>
        </div>
      `;
}

function getWorkTemplate(workData) {
  let taskList = '';
  
  for (let i = 0; i < workData.taskList[langKey].length; i++) {
    taskList += `<li>${workData.taskList[langKey][i]}</li>`;
  }

  return `
        <div class="timeline-item">
          <div class="tl-icon">
            <i class="${workData.icon}"></i>
          </div>

          <p class="tl-duration">${workData.duration[langKey]}</p>
          <h5>${workData.title[langKey]}</h5>

          <p>${jsLogicLangArr[langKey]}:</p>

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
          <p class="prog-title">${skillData.title[langKey]}</p>

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
        <div class="portfolio-item design-item">
          <h3 class="item-header">${designData.name[langKey]}</h3>

          <div class="image">
            <img src="${designData.img}" alt="portfolioImage" loading="lazy" />
          </div>

          <div>
            <div class="icons">
              <a href="${designData.href}" target="_blank" class="icon" download="${designData.download[langKey]}">
                <i class="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      `;
}

function getElectronicTemplate(electronicData) {
  return  `
            <div class="portfolio-item">
              <h3 class="item-header">${electronicData.name[langKey]}</h3>

              <div class="image">
                <a href="${electronicData.link}">
                  <img src="${electronicData.img}" alt="portfolioImage" loading="lazy" />
                </a>
              </div>
            </div>
          `;
}

function getWebDevelopmentTemplate(webDevelopmentData) {
  let projectCommonLabel = 'Project Source';

  if (langKey === 'german') {
    projectCommonLabel = 'Projektquelle';
  }

  return `
        <div class="portfolio-item">
          <h3 class="item-header">${webDevelopmentData.name[langKey]}</h3>

          <div class="image">
            <img src="${webDevelopmentData.img}" alt="portfolioImage" loading="lazy" />
          </div>

          <div class="hover-items">
            <h3>${projectCommonLabel}</h3>

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

function getAIApplicationListTemplate(aiApplicationData) {
  return `
          <div class="portfolio-item">
            <h3 class="item-header">${aiApplicationData.name[langKey]}</h3>

            <div class="image">
              <a href="${aiApplicationData.link}" target="_blank">
                <img src="${aiApplicationData.img}" alt="portfolioImage" loading="lazy" />
              </a>
            </div>
          </div>
        `;
}

function getPuzzleListTemplate(puzzleData) {
  return `
          <div>
            <a href="#" class="main-btn puzzleTab" id="tab-${puzzleData.id}" data-tab="${puzzleData.id}">
                <span class="btn-text">
                  ${puzzleData.title[langKey]}
                </span>
            </a>
          </div>
          `;
}

function getDrawingListTemplate(drawingData) {
  return   `
            <div class="drawingContainer">
              <h3>${drawingData.name[langKey]}</h3>
              <a href="${drawingData.download}" target="_blank" download="${drawingData.name[langKey]}.jpg" title="Download ${drawingData.name}">
                <img src="${drawingData.img}" alt="Drawing Image" loading="lazy" />
              </a>
            </div>
          `;
}

function setToggleSection() {
  let toggleSpeed       = 400;
  let statementToggle   = $("#toggle-statement");
  let educationToggle   = $("#toggle-education");
  let workToggle        = $("#toggle-work-experience");
  let awardToggle       = $("#toggle-award");
  let certificateToggle = $("#toggle-certificate");
  let skillToggle       = $("#toggle-skills");
  let toggleList        = [
    [statementToggle, $("#statement")],
    [educationToggle, $("#educationList")],
    [workToggle, $("#workList")],
    [awardToggle, $("#awardList")],
    [certificateToggle, $("#certificateList")],
    [skillToggle, $("#skillList")]
  ];

  for (let index in toggleList) {
    toggleList[index][0].on('click', function () {
      toggleList[index][1].slideToggle(toggleSpeed, "linear", function() {
        toggleList[index][0].find('.toggle-label').toggleClass('isHidden');
      });
    });
  }
}

function getPuzzleImgList(puzzleId) {
  let currentPuzzle = puzzleList.find(puzzle => puzzle.id === puzzleId);
  let imgList       = currentPuzzle.imgList;
  let content       = '';
  let imgListLength = imgList.length;

  for (let i = 0; i < imgListLength; i++) {
    content += `
      <div class="puzzle-gallery">
        <img src="${imgList[i]}" alt="Puzzle Image" loading="lazy" />
      </div>
    `;
  }

  return content;
}

function setFullTextToggle() {
  $(".showFullText").on("click", function(ev) {
    let currentTarget  = $(ev.currentTarget);
    let textId         = currentTarget.attr("textId");
    let shortparagraph = currentTarget.parent();
    let fullParagraph  = $("#fullText" + textId);
    shortparagraph.toggleClass("isHidden");
    fullParagraph.toggleClass("isHidden");
  });
}

function setDownloadCVLink() {
  let downloadLink = "assets/cv/Istrate_Mihai_Septimius_Software_Developer_CV.pdf";

  if (langKey === "german") {
    downloadLink = "assets/cv/Istrate_Mihai_Septimius_Softwareentwickler_Lebenslauf.pdf";
  }

  downloadCVLink.attr('href', downloadLink)
}

function getUrlParameter(name) {
  let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function setWebsiteLanguage() {
  let urlLanguage   = getUrlParameter('lang');
  let languageToUse = 'en';

  if (urlLanguage && validLanguages.includes(urlLanguage)) {
    if (urlLanguage === 'en') {
      langKey       = "english";
      languageToUse = urlLanguage;
    }
  
    if (urlLanguage === 'de') {
      langKey       = "german";
      languageToUse = urlLanguage;
    }
  }
  else {
    // Retrieve the saved language from localStorage, or default to 'en'
    let savedLanguage = localStorage.getItem('selectedLanguage') || languageToUse;

    if (savedLanguage === 'en') {
      langKey       = "english";
      languageToUse = savedLanguage;
    }

    if (savedLanguage === 'de') {
      langKey       = "german";
      languageToUse = savedLanguage;
    }
  }

  localStorage.setItem('selectedLanguage', languageToUse);
  $('#language-select').val(languageToUse);

  let $langPlaceholderListIndex            = $(".language-content");
  let $langPlaceholderListArduino          = $(".language-content-arduino");
  let $langPlaceholderListRoboSpider       = $(".language-content-robo-spider");
  let $langPlaceholderListD2LineFollower   = $(".language-content-d2-line-follower");
  let $langPlaceHolderListRoboticsSection  = $(".language-content-robotics-section");
  let $langPlaceHolderListLanguageSelector = $(".language-content-selector");
  let $langPlaceHolderPortfolioSection     = $(".language-content-portfolio-section");

  $langPlaceholderListIndex.each(function(index) {
    if (index < staticLanguageContentIndex[langKey].length) {
      if ($(this).hasClass('control') || $(this).hasClass('contact-method')) {
        $(this).attr('title', staticLanguageContentIndex[langKey][index]);
      }

      if (!$(this).hasClass('control') && !$(this).hasClass('contact-method')) {
        $(this).text(staticLanguageContentIndex[langKey][index]);
      }
    }
  });

  $langPlaceholderListArduino.each(function(index) {
    if (index < staticLanguageContentArduino[langKey].length) {
      $(this).text(staticLanguageContentArduino[langKey][index]);
    }
  });

  $langPlaceholderListRoboSpider.each(function(index) {
    if (index < staticLanguageContentRoboSpider[langKey].length) {
      $(this).text(staticLanguageContentRoboSpider[langKey][index]);
    }
  });

  $langPlaceholderListD2LineFollower.each(function(index) {
    if (index < staticLanguageContentD2LineFollower[langKey].length) {
      $(this).text(staticLanguageContentD2LineFollower[langKey][index]);
    }
  });

  $langPlaceHolderListRoboticsSection.each(function(index) {
    if (index < staticLanguageContentRoboticsSection[langKey].length) {
      $(this).text(staticLanguageContentRoboticsSection[langKey][index]);
    }
  });

  $langPlaceHolderListLanguageSelector.each(function(index) {
    if (index < staticLanguageSelectorContent[langKey].length) {
      $(this).text(staticLanguageSelectorContent[langKey][index]);
    }
  });

  $langPlaceHolderPortfolioSection.each(function(index) {
    if (index < staticLanguageContentPortfolioSection[langKey].length) {
      $(this).text(staticLanguageContentPortfolioSection[langKey][index]);
    }
  });

  // Update dynamic sections with content
  createSectionList();
  setTechnicalDrawingModal();
  setDownloadCVLink();
}

function setLanguageSelector() {
  $("#language-select").on("change", function() {
    let selectedLanguage = $(this).val();

    if (selectedLanguage === 'en') {
      langKey = 'english';
    }

    if (selectedLanguage === 'de') {
      langKey = 'german';
    }

    if (validLanguages.includes(selectedLanguage)) {
      let newUrl = new URL(window.location.href);
      newUrl.searchParams.set('lang', selectedLanguage);
      window.history.pushState({ path: newUrl.href }, '', newUrl.href);

      setWebsiteLanguage();
    }
  });
}

export const utils = {
  setMainPhotoPopup,
  setTechnicalDrawingModal,
  setPageTransitions,
  setTabLinks,
  setTabLinkOnSectionOpen,
  createSectionList,
  getSectionTemplate,
  getEducationTemplate,
  getAwardTemplate,
  getCertificateTemplate,
  getWorkTemplate,
  getSkillTemplate,
  getDesignTemplate,
  getElectronicTemplate,
  getWebDevelopmentTemplate,
  getAIApplicationListTemplate,
  getPuzzleListTemplate,
  getDrawingListTemplate,
  setToggleSection,
  getPuzzleImgList,
  setFullTextToggle,
  setDownloadCVLink,
  setWebsiteLanguage,
  setLanguageSelector,
};
