const script = document.createElement('script');
script.innerText = `
window.addEventListener('keydown', function (e) {
  const player = document.querySelector('ytd-player').getPlayer();
  const seconds = 2;
  if (e.ctrlKey) {
    if (e.keyCode === 37) {
      player.seekToStreamTime(player.getCurrentTime() - seconds)
    }
    else if (e.keyCode === 39) {
      player.seekToStreamTime(player.getCurrentTime() + seconds)
    }
  }
})
`
document.body.append(script);
console.log('youtube-seconds extension loaded.');