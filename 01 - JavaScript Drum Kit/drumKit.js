function removeTransition(e) {
    // 篩選屬性為 transform 的屬性，避免出現多餘的東西
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    // 傳遞事件中被按下的按鍵
    // 尋找按鍵的 keyCode 與 HTML 中 audio 的 keyCode 吻合
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // 抓取被按下按鍵的方框，後續做一些動畫效果
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // 若沒有吻合的，則直接結束

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

}



// 抓取每一個 class 名稱為 key 的物件
const keys = Array.from(document.querySelectorAll('.key'));
// 歷遍每個物件。為何不用 keys.addEventListener？
// 這是因為 keys 是個物件，沒辦法這樣使用
keys.forEach(function(key) {
    // 不太習慣使用箭頭函式，所以這邊還是老方法
    key.addEventListener('transitionend', removeTransition);
});
window.addEventListener('keydown', playSound);