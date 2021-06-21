
# 02 CSS + JavaScript Clock ( 2021/06/21 DONE )
做出一個擺針依照時間會移動的時鐘。

##CSS 筆記##

**transform-origin** - 為了讓指針轉動，我們需要使用 transform rotate 這個屬性，然而 transform 這個屬性實際上是旋轉自己。但根據真正時鐘的指針，轉的只有一邊，另一邊是定在原地不動的，因此旋轉自己這樣的效果並不是我們想要的。

這時我們就需要 transform-origin 這個屬性，這個屬性可以設定元素變化的原點。default 的 transform-origin 是 50%，這邊我們設定 transform-origin  = 100%。

( 這邊可參考 MDN 關於 [transform-origin](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform-origin)  的操作，就可以理解為何是 100%！若用正方形來表示，transform-origin  = 0% 中心點是正方形左邊豎著那條線的中間，transform-origin  = 50% 是正方形的正中央，transform-origin  = 0% 則是正方形右邊數著那條線的中間。transform-origin 也可用 center, top left 等其他方式去使用。)

**transform: rotate(90deg)** - 為何要設定這個呢？這是因為物件都是 block，他只會左右顯示，並不會跑到 12 點的地方豎著顯示的，所以乾脆在一開始的時候就讓他處在 12 點豎著的位置。

**模仿時鐘擺針擺動的模樣** - 這邊要加上 transition，因為實際上的時鐘擺針擺動的模樣都是照著時間慢慢移動的，若不加上 transition，則擺針會直接飛躍的前進，那非常的不自然也不符合常理。

**transition-timing-function** - 可以調整 transition 的樣式，還可手動調整成一些奇妙的效果。

作者實際上是使用 transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1)，這樣會有類似擺針彈跳的滴滴滴——效果（這是作者原音效XD）。

**如何讓指針跟時鐘外圍不要黏在一起？** - 看前半部作者沒說到，研究了一下才知道它的原理。它先是在 .clock 的爺爺輩先給 padding， .clock-face 的父輩時即使長寬都是 100%，但因為 padding，所以與爺爺輩沒有黏在一起，接著把父輩也加上 position: relative，即使父輩位子沒有絲毫改變，但因為子輩的 .hand 有 position: absolute，所以子輩參照到了父輩，即使 left 設為 0，指針所在的子輩也不會跟爺爺輩黏在一起了

（ 若在子輩設 margin 或 padding 都不行，雖然這樣設置不會讓子輩與爺爺輩黏在一起，但指針就不是擺在正中央了。擺動時與其他指針交疊時會在後方出現一小腳，除非這是想要的效果再這樣設置會比較好。以下為圖片解說 ）

 ![image](https://github.com/Alice-nor/JavaScript30/blob/main/02%20-%20CSS%20%2B%20JavaScript%20Clock/clock.jpg)

##JavaScript 筆記##




