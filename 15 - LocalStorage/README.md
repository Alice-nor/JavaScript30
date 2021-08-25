
# 15 - LocalStorage
( 2021/8/23 DONE ) 實作模擬菜單的網頁，可在頁面中新增項目，頁面重整後也不會清空。  
成果：[15 - LocalStorage](https://alice-nor.github.io/JavaScript30/14%20-%20JavaScript%20References%20VS%20Copying/index.html) 


## HTML 筆記 ##

#### SVG

> SVG 是以形狀、路徑、文字和濾鏡效果描繪影像的向量格式。  
> 這種格式所產生的檔案是壓縮式的，不論是在網路上、列印中，  
> 甚至是在資源有限的環境中，  或是在手持裝置上，都能提供高品質的圖像。  
> 使用者可以在螢幕上放大 SVG 影像的檢視畫面，而不會減損其銳利度、細部或清晰度....  

> SVG 格式是完全以 XML 為基礎，並且提供許多優點給開發人員及使用者。  
> 透過 SVG，您可以使用 XML 和 JavaScript，建立回應使用者動作的網頁圖形，  
> 並為圖形加上複雜效果，例如反白、工具提示、音效和動畫等。  
> 來源：[關於 SVG](https://helpx.adobe.com/tw/illustrator/using/svg.html) 


## CSS 筆記 ##

#### SVG fill

第一次知道有這個屬性。fill 是屬於 SVG 向量圖形的屬性。  
與普通的 jpg、gif 等圖片不同的地方在於，  
它可以很輕易的改變顏色而不需要每個顏色都各有一張圖片。

> The fill property in CSS is for filling in the color of a SVG shape.
> Remember:
> * This will override a presentation attribute <path fill="#fff" ... />
> * This will not override an inline style e.g. <path style="fill: #fff;" ... />
> 來源：[fill](https://css-tricks.com/almanac/properties/f/fill/) 

## JavaScript 筆記 ##

#### 防止表單送出

用 console 想要抓取表單的資料，  
代因為一個表單的預設就是會重整頁面，  
所以按下表單的 submit 後，頁面會重整且看不到 console，  
這時就可以使用 `Event.preventDefault()`。  

[Event.preventDefault()](https://developer.mozilla.org/zh-TW/docs/Web/API/Event/preventDefault) 可以取消事件預設的行為，但並不會影響事件傳遞。  
像是這邊的表單使用 `Event.preventDefault()` 的話，就會取消頁面重整。



