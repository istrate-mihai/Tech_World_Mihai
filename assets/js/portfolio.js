import { designList } from "./data.js";

let modal      = $("#cadCamTechnicalDrawingModal");
let leftArrow  = modal.find('.arrow-left');
let rightArrow = modal.find('.arrow-right');
let closeBtn   = modal.find('.btn-close');

function setPortfolioLogo() {
  $('.logo-container').css('background-image', 'url(../assets/images/portfolio-collection.jpeg)');
}

function setDesignListNavigation() {

  let designMediaList = designList.map(design => design.img || design.video);
  let lowerNavLimit   = 0;
  let upperNavLimit   = designMediaList.length - 1;
  let modalImage      = modal.find('img');
  let modalVideo      = modal.find('video');

  leftArrow.on('click', function() {

    let currentImgSrc = modalImage.attr("src");
    let currentVidSrc = modalVideo.attr("src");

    let currentMediaIndex = -1;
    if (currentImgSrc != '') {
      currentMediaIndex = designMediaList.indexOf(currentImgSrc);
    }

    if (currentVidSrc != '') {
      currentMediaIndex = designMediaList.indexOf(currentVidSrc);
    }

    let prevMediaIndex = undefined;
    let prevMediaSrc   = '';

    if (currentMediaIndex == lowerNavLimit) {
      prevMediaIndex = upperNavLimit;
    }

    if (currentMediaIndex > lowerNavLimit) {
      prevMediaIndex = currentMediaIndex - 1;
    }

    prevMediaSrc               = designMediaList[prevMediaIndex];
    let mediaNameComponentList = prevMediaSrc.split('.');
    let previousMediaExt       = mediaNameComponentList[mediaNameComponentList.length - 1];

    if (previousMediaExt != 'mp4') {
      modalImage.attr('src', prevMediaSrc);
      modalImage.css("display", "inline");

      modalVideo.attr("src", "");
      modalVideo.css("display", "none");
    }

    if (previousMediaExt == 'mp4') {
      modalImage.attr('src', "");
      modalImage.css("display", "none");

      modalVideo.attr("src", prevMediaSrc);
      modalVideo.css("display", "inline");
    }
  });

  rightArrow.on('click', function() {
    console.log('rightArrow Click');

    let currentImgSrc = modalImage.attr("src");
    let currentVidSrc = modalVideo.attr("src");

    let currentMediaIndex = -1;
    if (currentImgSrc != '') {
      currentMediaIndex = designMediaList.indexOf(currentImgSrc);
    }

    if (currentVidSrc != '') {
      currentMediaIndex = designMediaList.indexOf(currentVidSrc);
    }

    let nextMediaIndex = undefined;
    let nextMediaSrc   = '';

    if (currentMediaIndex == upperNavLimit) {
      nextMediaIndex = lowerNavLimit;
    }

    if (currentMediaIndex < upperNavLimit) {
      nextMediaIndex = currentMediaIndex + 1;
    }

    nextMediaSrc               = designMediaList[nextMediaIndex];
    let mediaNameComponentList = nextMediaSrc.split('.');
    let nextMediaExt           = mediaNameComponentList[mediaNameComponentList.length - 1];

    if (nextMediaExt != 'mp4') {
      modalImage.attr('src', nextMediaSrc);
      modalImage.css("display", "inline");

      modalVideo.attr("src", "");
      modalVideo.css("display", "none");
    }

    if (nextMediaExt == 'mp4') {
      modalImage.attr('src', "");
      modalImage.css("display", "none");

      modalVideo.attr("src", nextMediaSrc);
      modalVideo.css("display", "inline");
    }
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

function setDesignListVideo() {

  let videoList = $('video');
  let observer  = new IntersectionObserver((entries, self) => {
    $(entries).each((index, entry) => {
      if (entry.isIntersecting) {
        let video = $(entry.target);
        video.attr('src', video.data('src'));
        video.removeAttr('data-src');
        self.unobserve(entry.target);
      }
    });
  });

  videoList.each((index, video) => {
    observer.observe(video);
  });
};

export const portfolio = {
  setPortfolioLogo,
  setDesignListNavigation,
  setModalNavigationByKeyboard,
  setDesignListVideo,
};
