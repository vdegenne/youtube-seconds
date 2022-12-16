const script = document.createElement('script');
script.innerText = `
function getPlayerElement() {
    var ytd_player = document.getElementsByTagName("ytd-player");
    for (var player of ytd_player) {
        if (player.getPlayer() && player.className.indexOf('preview') == -1) {
            return player;
        }
    }
}
window.addEventListener('keydown', function (e) {
  const player = getPlayerElement().getPlayer();
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
