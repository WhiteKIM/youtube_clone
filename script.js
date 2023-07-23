function changeVideo(videoUrl) {
  const videoElement = document.querySelector('video');
  videoElement.src = videoUrl;
  videoElement.load();
}
