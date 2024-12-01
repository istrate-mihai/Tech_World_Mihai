import { designList } from "./data.js";

let modal      = $("#cadCamTechnicalDrawingModal");
let leftArrow  = modal.find('.arrow-left');
let rightArrow = modal.find('.arrow-right');
let closeBtn   = modal.find('.btn-close');

function setPortfolioLogo() {
  $('.logo-container').css('background-image', 'url(../assets/images/portfolio-collection.jpeg)');
}

function setDesignListNavigation() {
  let designImgList = designList.map(design => design.img);
  let lowerNavLimit = 0;
  let upperNavLimit = designImgList.length - 1;
  let modalImage    = modal.find('img');

  leftArrow.on('click', function() {
    let currentImgSrc   = modalImage.attr("src");
    let currentImgIndex = designImgList.indexOf(currentImgSrc);
    let prevImgIndex    = undefined;
    let prevImgSrc      = '';

    if (currentImgIndex == lowerNavLimit) {
      prevImgIndex = upperNavLimit;
    }

    if (currentImgIndex > lowerNavLimit) {
      prevImgIndex = currentImgIndex - 1;
    }

    prevImgSrc = designImgList[prevImgIndex];
    modalImage.attr('src', prevImgSrc);
  });

  rightArrow.on('click', function() {
    let currentImgSrc   = modalImage.attr("src");
    let currentImgIndex = designImgList.indexOf(currentImgSrc);
    let nextImgIndex    = undefined;
    let mextImgSrc      = '';

    if (currentImgIndex == upperNavLimit) {
      nextImgIndex = lowerNavLimit;
    }

    if (currentImgIndex < upperNavLimit) {
      nextImgIndex = currentImgIndex + 1;
    }

    mextImgSrc = designImgList[nextImgIndex];
    modalImage.attr('src', mextImgSrc);
  });
}

function setModalNavigationByKeyboard() {
  $(document).on('keydown', function(e) {
    if (modal.is(':visible')) {
      if (e.key === 'ArrowLeft') {
        leftArrow.trigger('click');
      }

      if (e.key === 'ArrowRight') {
        rightArrow.trigger('click');
      }

      if (e.key === 'Escape') {
        closeBtn.trigger('click');
      }
    }
  });
}

export const portfolio = {
  setPortfolioLogo,
  setDesignListNavigation,
  setModalNavigationByKeyboard,
};
