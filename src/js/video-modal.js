// Video Modal
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');

let videoSrc;

if (videoBtn) {
  videoBtn.addEventListener('click', () => {
    videoSrc = videoBtn.getAttribute('data-bs-src');
  });
}

if (videoModal) {
  videoModal.addEventListener('shown.bs.modal', () => {
    video.setAttribute('src', videoSrc + '?autoplay=1;modestbranding=1;showInfo=0')
  });

  videoModal.addEventListener('hide.bs.modal', () => {
    video.setAttribute('src', videoSrc);
  })
}
