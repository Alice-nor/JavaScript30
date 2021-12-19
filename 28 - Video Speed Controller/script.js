const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', function(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4; // 設定最小值
    const max = 4; // 設定最大值
    const height = Math.round(percent * 100) + '%';

    // 以下為數學計算，讓最小值等於 0.4，最大值等於 4
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
});