
# 02 CSS + JavaScript Clock 
( 2021/06/21 & 6/22 DONE ) 做出一個擺針依照時間會移動的時鐘。
成果：[JavaScript Clock](https://alice-nor.github.io/JavaScript30/02%20-%20CSS%20+%20JavaScript%20Clock/index.html) 調整版：[JavaScript Clock #modify](https://alice-nor.github.io/JavaScript30/02%20-%20CSS%20+%20JavaScript%20Clock/modify.html)

## CSS 筆記 ##

**transform-origin** - 

為了讓指針轉動，我們需要使用 transform rotate 這個屬性，然而 transform 這個屬性實際上是旋轉自己。但根據真正時鐘的指針，轉的只有一邊，另一邊是定在原地不動的，因此旋轉自己這樣的效果並不是我們想要的。

這時我們就需要 transform-origin 這個屬性，這個屬性可以設定元素變化的原點。default 的 transform-origin 是 50%，這邊我們設定 transform-origin  = 100%。

( 這邊可參考 MDN 關於 [transform-origin](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform-origin)  的操作，就可以理解為何是 100%！若用正方形來表示，transform-origin  = 0% 中心點是正方形左邊豎著那條線的中間，transform-origin  = 50% 是正方形的正中央，transform-origin  = 0% 則是正方形右邊數著那條線的中間。transform-origin 也可用 center, top left 等其他方式去使用。)

**transform: rotate(90deg)** - 

為何要設定這個呢？這是因為物件都是 block，他只會左右顯示，並不會跑到 12 點的地方豎著顯示的，所以乾脆在一開始的時候就讓他處在 12 點豎著的位置。

**模仿時鐘擺針擺動的模樣** - 

這邊要加上 transition，因為實際上的時鐘擺針擺動的模樣都是照著時間慢慢移動的，若不加上 transition，則擺針會直接飛躍的前進，那非常的不自然也不符合常理。

**transition-timing-function** - 

可以調整 transition 的樣式，還可手動調整成一些奇妙的效果。作者實際上是使用 transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1)，這樣會有類似擺針彈跳的滴滴滴——效果（這是作者原音效XD）。

**如何讓指針跟時鐘外圍不要黏在一起？** - 

看前半部作者沒說到，研究了一下才知道它的原理。它先是在 .clock 的爺爺輩先給 padding， .clock-face 的父輩時即使長寬都是 100%，但因為 padding，所以與爺爺輩沒有黏在一起，接著把父輩也加上 position: relative，即使父輩位子沒有絲毫改變，但因為子輩的 .hand 有 position: absolute，所以子輩參照到了父輩，即使 left 設為 0，指針所在的子輩也不會跟爺爺輩黏在一起了

（ 若在子輩設 margin 或 padding 都不行，雖然這樣設置不會讓子輩與爺爺輩黏在一起，但指針就不是擺在正中央了。擺動時與其他指針交疊時會在後方出現一小腳，除非這是想要的效果再這樣設置會比較好。以下為圖片解說 ）

 ![image](https://github.com/Alice-nor/JavaScript30/blob/main/img/clock.jpg)

## JavaScript 筆記 ##

**setInterval** - 

與 [setTimeout](https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) 的不同之處在於，setTimeout 是在一段時間後執行一次，結束就沒了，但 [setInterval](https://developer.mozilla.org/zh-TW/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) 是每一次間隔一段延遲的時間，會執行，這個動作會一直持續，不會間斷。

**如何把秒數轉換成畫面上的傾斜角度？** - 

觀念：取得現在的秒數後，要先除以 60，就會在知道目前秒數在 一分鐘 60 秒鐘占了多少位子，接著乘以 360，因為一整個圓為 360度，讓秒數可以依所佔的空間平均分配在一整個圓當中。 

實作： 

        const now = new Date();
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

* 取得現有秒數
* ( 現有秒數 / 60 ) * 360
* 取得畫面中代表秒針的物件，並設定 style.transfrom 中的 rotate 為現有秒數在圓中所佔的空間 * secondsDegrees 需要加 90 是因為我們原本預設 CSS 樣式為 90deg，現在要多加上 90deg 它實際上呈現的才會是真正時鐘會呈現的樣子（可以用檢查多試試看就知道原理了）

**指針超過12點石，會有個奇怪的跳躍？** - 

這是因為我們在 CSS 有設定 transition: all .05s ，所以有這個奇怪的跳躍感，只要把它刪掉就好了！

## 其他自行修改的部分 ##

新增 modify.html。
我覺得時針分針跟秒針都一樣長短不是很好辨認，因此多一個檔案更改為比較接近我理想中的畫面。另外我對於沒有數字的時鐘也有點看不太懂....所以給時鐘多了有數字的背景圖。調整版成果：[JavaScript Clock #modify](https://alice-nor.github.io/JavaScript30/02%20-%20CSS%20+%20JavaScript%20Clock/modify.html)


