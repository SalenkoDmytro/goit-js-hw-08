import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
var throttle = require('lodash.throttle');

const onTimeupdateTrottle = throttle(videoCurrentTime, 1000);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', onTimeupdateTrottle);

function videoCurrentTime(data) {
  localStorage.setItem('videoplayer-current-time', Math.floor(data.seconds));
}
