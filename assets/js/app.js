import { utils } from './utils.js';

$(document).ready(function () {
  utils.setWebsiteLanguage();
  utils.setPageTransitions();
  utils.setMainPhotoPopup();
  utils.setTabLinks();
  utils.createSectionList();
  utils.setTabLinkOnSectionOpen();
  utils.setToggleSection();
  utils.setTechnicalDrawingModal();
  utils.setFullTextToggle();
  utils.setDownloadCVLink();
  utils.setLanguageSelector();
});
