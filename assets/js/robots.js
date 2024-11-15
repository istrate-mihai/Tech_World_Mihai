$(document).ready(() => {
  $('.logo-container').css('background-image', 'url(../../assets/images/robots-collection.jpg)');
  let videoList = $('video');
  let config    = {
    rootMargin: '0px 0px 200px 0px',
    threshold: 0
  };

  let observer = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
      let video       = $(entry.target);
      video.attr('src', video.data('src'));
      video.removeAttr('data-src');
      self.unobserve(entry.target);
    });
  }, config);

  videoList.each((index, video) => {
    observer.observe(video);
  });
});
