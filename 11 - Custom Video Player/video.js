/* get our elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.fullscreen');


/* build out functions */
function togglePlay() {
    // 若目前播放中，則暫停，反之則相反
    const icon = player.querySelector('.icon');
    if (video.paused) {
        video.play();
        icon.classList.add('fa-pause');
        icon.classList.remove('fa-play');

    } else {
        video.pause();
        icon.classList.add('fa-play');
        icon.classList.remove('fa-pause');
    }
}


// 往前 10 秒或往後 25 秒
function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

// 更改聲音與影片快慢
function handleRangeUpload() {
    video[this.name] = this.value;
}

// 更改時間條
function handleProgress() {
    let precent = (100 * video.currentTime / video.duration);
    progressBar.style['flex-basis'] = `${precent}%`;
}

// 可抓取時間條更改影片的時間
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function fullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
}



/* hook up the event listeners */
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpload));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpload));
video.addEventListener('timeupdate', handleProgress);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub());
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreen.addEventListener('click', fullscreen);