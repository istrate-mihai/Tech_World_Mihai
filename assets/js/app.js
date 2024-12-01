import { utils } from './utils.js';
import { portfolio } from './portfolio.js';

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
  portfolio.setPortfolioLogo(),
  portfolio.setDesignListNavigation();
  portfolio.setModalNavigationByKeyboard();
});
