
# 19 - Webcam Fun
> 2021/9/10 DONE  
取得視訊鏡頭的影像，並透過 canvas 達成拍攝與濾鏡的效果。
成果：[19 - Webcam Fun](https://alice-nor.github.io/JavaScript30/18%20-%20Adding-Up-Times-with-Reduce/index.html) 

## local server 筆記 ##

這天的練習需要使用到 local server，  
作者有推薦可以使用 browser-sync，  
可以使用 npm 去安裝，它會再啟網站時建置小伺服器。  
> npm install browser-sync
> 推薦閱讀：[Gulp 前端自動化 - Browsersync 瀏覽器同步測試工具](https://awdr74100.github.io/2020-01-14-gulp-browsersync/) 

雖然我的電腦有自己的 local server 可以開，  
不過為了跟著一起練習，所以也會使用 browser-sync。  

## JavaScript 筆記 ##

#### 取得 li 並轉換成陣列

我們先抓取畫面上的 li，接著要使用 map() 去歷遍內容，  
但這時發現了一個問題，我們會遇到一個 error 説 map 不是一個 function，  
會有這個錯誤是因為我們誤以為 li 是一個大陣列，  
但事實是他其實是物件，所以我們需要先把它變成陣列，  
可以使用的兩種方法如下。

```JavaScript
    const timeNodes = [...document.querySelectorAll('[data-time]')]; // 方法1 
    const timeNodes = Array.from(document.querySelectorAll('[data-time]')); // 方法2
```
