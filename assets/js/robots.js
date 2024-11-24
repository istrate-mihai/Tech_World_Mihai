$(document).ready(() => {
  $('.logo-container').css('background-image', 'url(../../assets/images/robots-collection.jpg)');

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
});
