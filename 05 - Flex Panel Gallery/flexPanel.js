const panels = document.querySelectorAll('.panel');
let lastClickPanel = document.querySelector('.panels');

function toggleOpen() {
    // 檢查這次的物件與上次進入的物件是否相同
    // 若不同的話，讓上次的物件關閉
    // 並把 lastClickPanel 變成這次的物件
    if (this !== lastClickPanel) {
        lastClickPanel.classList.remove('open');
        lastClickPanel = this;
    }
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }

}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));