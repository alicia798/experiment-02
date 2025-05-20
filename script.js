const audio = document.getElementById('audio');
const playButton = document.getElementById('play-audio');

playButton.addEventListener('click', () => {
  audio.play();
});