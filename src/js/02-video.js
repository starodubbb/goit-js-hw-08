import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player');

setPlayerTime();
player.on('timeupdate', throttle(timeUpdateHandler, 1000, { trailing: false }));
player.on('ended', endedHandler);

function timeUpdateHandler(event) {
  const currentTime = event.seconds;
  localStorage.setItem(STORAGE_KEY, currentTime);
}

function endedHandler(event) {
  localStorage.removeItem(STORAGE_KEY);
}

function setPlayerTime() {
  const currentTime = localStorage.getItem(STORAGE_KEY);
  if (!currentTime) {
    player.setCurrentTime(0);
    return;
  }
  player.setCurrentTime(currentTime);
}
