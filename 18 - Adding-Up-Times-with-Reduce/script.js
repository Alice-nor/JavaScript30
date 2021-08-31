const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const seconds = timeNodes
    .map(node => node.dataset.time) // 取得所有陣列之時間值
    .map(timecode => {
        const [mins, secs] = timecode.split(':').map(parseFloat);
        return mins * 60 + secs;
    })
    .reduce((total, seconds) => total += seconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600); // 取得小時
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60); // 取得分鐘
secondsLeft = secondsLeft % 60; // 取得秒數