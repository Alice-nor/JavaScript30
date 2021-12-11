const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    // 按下滑鼠左鍵
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log(startX);
});
slider.addEventListener('mouseleave', () => {
    // 滑鼠離開
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    // 放開滑鼠
    isDown = false;
    slider.classList.remove('active');

});
slider.addEventListener('mousemove', (e) => {
    // 滑鼠移動
    if (!isDown) return; // 若只是在移動則停止此方法
    // 當滑鼠按下並移動時才執行以下內容
    e.preventDefault(); // 以防瀏覽器以為你要滑動任何 text 或什麼...
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
});