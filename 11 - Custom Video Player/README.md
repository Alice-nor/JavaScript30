
# 11 - Custom Video Player
( 2021/8/18 DONE ) 自訂影片控制器。
成果：[11 - Custom Video Player](https://alice-nor.github.io/JavaScript30/11%20-%20Custom%20Video%20Player/index.html) 

## CSS 筆記 ##

**:fullscreen** -

[:fullscreen](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:fullscreen) 應用為使用全螢幕模式的時候。

**::-webkit-slider-runnable-track** -

[::-webkit-slider-runnable-track](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-slider-runnable-track) 在 type 為 range 的 input 標籤內中的，可滑動的區域。使用方法如下：

```JavaScript
    input[type=range]::-webkit-slider-runnable-track {
        // 想要修改滑動區域的 code.....
    }
```

特別的地方在於，這是 chrome/ safari 瀏覽器內核特有的。其他瀏覽器功能類似的偽類為： ::-ms-track、::moz-range-track 。


**::-webkit-slider-thumb** -

[::-webkit-slider-thumb](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-slider-thumb) 是針對拉霸按鈕，重點在一定要跟 ::-webkit-slider-runnable-track 一起搭配使用，否則會沒有效果。使用方法如下：

```JavaScript
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none; // 把原本預設樣式消除
        // 其他的 code....
    }
```

這個偽類別也是 chrome/ safari 瀏覽器內核特有的。其他瀏覽器功能類似的偽類為： ::-moz-range-thumb、::-ms-thumb 。

以上幾個偽類別可搭配此篇文章服用：[改變 HTML5 range 樣式的兩種方法](https://www.oxxostudio.tw/articles/201503/html5-input-range-style.html)



## JavaScript 筆記 ##

**確認影片是播放中還是暫停中** -

JavaScript 沒有屬性去檢驗影片是否播放中，但相反的有檢驗是否暫停中的屬性：[HTMLMediaElement.paused](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/paused)，這個屬性會去分辨現在影片是否是 paused （暫停中）的，並會返回一個 boolean 值。

我覺得這個方法真的不是很直覺，有點難閱讀跟看懂，所以我使用的是比較簡單的方法，但，以下是作者的寫法：

```JavaScript
    function togglePlay() {
        const method = video.paused ? 'play' : 'pause';
        video[method]();
    }
```

更換 icon 的方式有比較簡潔的做法，因為我不是很喜歡 innerHTML 這個使用方法，所以改寫成比較冗長一點的（可點程式碼看），下面是我原本寫的方式：

```JavaScript
    function togglePlay() {
        const icon = video.paused? `<i class="icon fa fa-play">` : `<i class="icon fa fa-pause">`
        if (video.paused) {
            video.play();
            toggle.innerHTML = icon;
        } else {
            video.pause();
            toggle.innerHTML = icon;
        }
    }
```


**不論是按箭頭或是影片本身，都可以操控播放或暫停** -

這是為了使用者習慣，不論是按下這邊為 toggle 的箭頭按鍵，或是影片的畫面，都可以操控影片的播放或暫停，比較方便也直覺。（所以 video 與 toggle 都要監聽並使用 togglePlay 方法）

**變更影片屬性（聲音與影片快慢）** -

這個部分有點疑惑的話，可以看 w3school 關於 video 的屬性。才發現原來影片本來就有這些屬性可以使用，真的非常方便！[HTML Audio/Video DOM Reference](https://www.w3schools.com/tags/ref_av_dom.asp)。

### 小挑戰 ###

**如何讓影片全螢幕顯示？** -

原來影片本來就有請求全螢幕的方法！所以這個小挑戰其實不難，可看這邊：[使用全螢幕模式](https://developer.mozilla.org/zh-TW/docs/Web/API/Fullscreen_API)。離開全螢幕的方式，可以使用這個：[Document.exitFullscreen()](https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen)，但其實使用者或許會習慣直接按 esc 退出，這個方法經操作是可行的！進入全螢幕時，若想離開全螢幕，直接點選預設操作介面上的按鍵也是可以自行退出的，所以這個方法在這個練習裡看來是比較雞肋的？

## 延伸練習 ##

看到有台灣的網友的延伸練習覺得很實用，所以也來做做看。類似 youtube 現在用鍵盤上的左鍵或右鍵時，也可以達到前進後退的功能，也跟 JavaScript 30 Day1 的內容是相似的。（左鍵 keycode 是 37，右鍵 keycode 是 39）
