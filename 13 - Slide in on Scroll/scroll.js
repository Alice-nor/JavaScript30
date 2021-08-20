const sliderImages = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        console.log(context);
        console.log(args);
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
        // scroll 到圖片的一半時要開始載入圖片

        // 取得圖片一半的定位點 - 一半的圖片高度
        const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);
        // 取得圖片的底部定位點
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        // 判斷視窗是否已經超過圖片的一半
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        // 判斷滾動範圍是否已經超過圖片的底部
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide));