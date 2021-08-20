
# 13 - Slide in on Scroll
( 2021/8/20 DONE ) 畫面滑到定點時，圖片會以動畫的方式滑入。
成果：[13 - Slide in on Scroll](https://alice-nor.github.io/JavaScript30/13%20-%20Slide%20in%20on%20Scroll/index.html) 


## JavaScript 筆記 ##

**使用 scroll 去觸發事件** -

但畫面滾動時，大量的事件會被觸發，而這會造成效能上的耗損，所以作者多做了一個方法，使觸發時會間隔一點才被觸發，，降低事件被監聽的頻率。


```JavaScript
    // wait 與 immediate 為自創的，後方的參數為若沒給值時的預設
    function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
    var context = this, args = arguments;
    var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
}
```

**滑動的尺寸計算** -

計算 scrollY、offsetTop 等東西的程式碼看得很茫然，看了好一會才比較了解，覺得這一篇中的圖片很好理解，所以分享：[13 - Slide in on Scroll](https://github.com/soyaine/JavaScript30/tree/master/13%20-%20Slide%20in%20on%20Scroll) 。以下是我這一部分的程式碼。

```JavaScript
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
```

