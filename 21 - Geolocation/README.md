
# 21 - Geolocation
> 2021/9/16 DONE  
取得裝置的地理位置與速率。
成果：[21 - Geolocation](https://alice-nor.github.io/JavaScript30/21%20-%20Geolocation/index.html) 


#### 感知速度與方向

這邊作者有提到，電腦並不帶有速度與方向感知的功能，  
`heading` 與 `speed` 的值均為 null，  
所以作者使用 ios 的模擬器，用 mac 裡的 Xcode 做測試，  
或是可以用手機測試，  然後帶著手機實際走看看有沒有發生改變 XD

## JavaScript 筆記 ##

#### 瀏覽器內建之語音辨識

作者這邊使用 [Geolocation.watchPosition()](https://developer.mozilla.org/zh-TW/docs/Web/API/Geolocation/watchPosition) 這個方法取取得裝置的位置資料，  
這個方法是當使用者位置有更新時，就會被自動呼叫的方式，  
還有另一個方法也可以取得裝置位置資料：[Geolocation.getCurrentPosition()](https://developer.mozilla.org/zh-TW/docs/Web/API/Geolocation/getCurrentPosition)，  
但 `getCurrentPosition` 只會給一次位置資料而已，  
但我們這邊的需求是位置資料會一直被更新，所以使用 `watchPosition()`。
