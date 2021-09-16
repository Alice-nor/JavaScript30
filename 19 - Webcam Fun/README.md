
# 19 - Webcam Fun
> 2021/9/10 & 15 DONE  
取得視訊鏡頭的影像，並透過 canvas 達成拍攝與濾鏡的效果。  
成果：[19 - Webcam Fun](https://alice-nor.github.io/JavaScript30/19%20-%20Webcam%20Fun/index.html) 

## local server 筆記 ##

這天的練習需要使用到 local server，  
作者有推薦可以使用 browser-sync，  
可以使用 npm 去安裝，它會再啟網站時建置伺服器。  
> npm install browser-sync

> 推薦閱讀：[Gulp 前端自動化 - Browsersync 瀏覽器同步測試工具](https://awdr74100.github.io/2020-01-14-gulp-browsersync/) 

雖然我的電腦有自己的 local server 可以開，  
不過為了跟著一起練習，所以也會使用 browser-sync。

## JavaScript 筆記 ##

#### 取得視訊的影像

這邊使用的方法是 [MediaDevices.getUserMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia) 。  

> The MediaDevices.getUserMedia() method prompts the user for permission to use a media input which produces a MediaStream with tracks containing the requested types of media.

> It returns a Promise that resolves to a MediaStream object. If the user denies permission, or matching media is not available, then the promise is rejected with NotAllowedError or NotFoundError respectively.

這個方法包含兩個參數，一個是影像檔，一個是聲音檔，  
用 true 或 false 去表示是否需要取得這個資料，  
除了 true 與 false，也可以去規定需要的資料....。
這邊的練習我們只需要影片檔，聲音則不需要。

```JavaScript
    // 範例程式碼如下
    { 
        // 音檔與影片檔都需要
        audio: true, video: true 
    } 

    {
        // 音檔需要，影片檔大小為 1280 x 720
        audio: true,
        video: { width: 1280, height: 720 }
    }
```

#### 把視訊的影像提供給`video`

```JavaScript

    /* 
        video.src = localMeidaStream;  
        上面的方式是無法使用的
        因為 localMeidaStream 是物件
        但 video.src 給的應該要是影片連結
        所以要使用 srcObject 這個方法！
    */
    video.srcObject = localMediaStrean;

```

[URL.createObjectURL()](https://developer.mozilla.org/zh-TW/docs/Web/API/URL/createObjectURL)。 
> `objectURL = URL.createObjectURL(blob)`

> 用於建立一個帶有 URL 的 DOMString 以代表參數中所傳入的物件. 該URL的生命週期與創造它的 window 中的 document一致。這個新的物件 URL 代表了所指定的 File 物件 或是 Blob 物件。 

原本作者是使用以下的方法，  
但主要的瀏覽器像是 Chrome 和 Firefox **已經棄用這個方法了！**
> 來源：[URL.createObjectURL()](https://developer.mozilla.org/zh-TW/docs/Web/API/URL/createObjectURL)

> Note: As of March 2020, only Safari supports setting objects other than MediaStream. Until other browsers catch up, for MediaSource, Blob and File, consider falling back to creating a URL with `URL.createObjectURL()` and assign it to `HTMLMediaElement.src`. 

#### 把視訊的影像輸出在 canvas 畫布上

1. 把 canvas 長寬設定為影片長寬
2. 每 16 毫秒會更新一次 canvas 畫布

```JavaScript

    function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    setInterval(() => {
            ctx.drawImage(video, 0, 0, width, height);
        }, 16);
    }

```

作者有提到可以使用 [Window.requestAnimationFrame()](https://developer.mozilla.org/zh-TW/docs/Web/API/window/requestAnimationFrame)，  
不過作者沒有寫出來，我就研究了一下這個方法，  
發現這個方法比原本的 `setTimeout()` 跟 `setInterval()` 效率都要好。  
以下是 `requestAnimationFrame()` 的重點。  

>  1. 就算很多個requestAnimationFrame()要執行，瀏覽器只要通知一次就可以了。而setTimeout是多個獨立繪製。
> 2. 一旦頁面不出於當前頁面(比如：頁面最小化了)，頁面是不會進行重繪的，自然requestAnimationFrame也不會觸發(因為沒有通知)。頁面繪製全部停止，資源高效利用。

> 來源：[深入理解requestAnimationFrame的動畫迴圈](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/260087/)。  

```JavaScript

    // 建立迴圈要把呼叫連起來
    function drawFrame() {
    window.requestAnimationFrame(drawFrame);
    // animation code...
    }
    window.requestAnimationFrame(drawFrame);

```

實作後，用 `requestAnimationFrame()` 的寫法如下，操作成功。

```JavaScript

    function paintToCanvas() {
        const width = video.videoWidth;
        const height = video.videoHeight;
        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(video, 0, 0, width, height);
        requestAnimationFrame(paintToCanvas);

    }

    // 不過後面程式碼會自動一直呼叫，所以下面這段可以省略
    requestAnimationFrame(paintToCanvas);

```

#### 視訊影像已緩衝好時，將自動播放

這邊用到了一個叫 `canplay` 的 event。

> The `canplay` event is fired when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.

> 來源：[HTMLMediaElement: canplay event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplay_event)

流程大概是這樣的 ->  
一開始會先呼叫 `getVideo` 這個方法，  
方法裡有呼叫影片的程式碼 `video.play()`，  
那麼當影片開始跑之後，就會觸發 `canplay` 這個 event，  
接著執行 `paintToCanvas` 這個方法，畫面也就被繪製出來了。

#### 製作拍照功能，並提供下載功能

這部分有幾個方法要來看一下 ->

1. [HTMLCanvasElement.toDataURL()](https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLCanvasElement/toDataURL)
> canvas.toDataURL(type, encoderOptions);

> 方法回傳含有圖像和參數設置特定格式的 data URIs (預設 PNG). 回傳的圖像解析度為 96 dpi

從 canvas 取得資料並把它轉換成連結，  
這邊設定為 `image/jpeg`，則下載的圖片就會是 jpeg 檔。

2. [Element.setAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
> Element.setAttribute(name, value);

這邊寫成 `link.setAttribute('download', 'download')`，  
因此此連結是可以下載的，下載後的檔名會是 download。  
如果看 HTML 的話，就是在 `a` 超連結裡頭有個 download 的屬性，  
一整串是 `download="download"`。

3. [Node.insertBefore()](https://developer.mozilla.org/zh-TW/docs/Web/API/Node/insertBefore)