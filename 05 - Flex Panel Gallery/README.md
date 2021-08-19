
# 05 - Flex Panel Gallery
( 2021/6/25 & 6/28 DONE ) 整齊排列的物件被點選時，會有一些動畫效果，並把元件放大，其中的文字可以顯現。
成果：[05 - Flex Panel Gallery](https://alice-nor.github.io/JavaScript30/05%20-%20Flex%20Panel%20Gallery/index.html) 

## CSS 筆記 ##

**flex** - 

如果是針對 flex 的部分不太清楚的話，可以看這邊：[圖解：CSS Flex 屬性一點也不難](https://wcc723.github.io/css/2017/07/21/css-flex/)。

我這邊想提的 flex 跟上面連結的不一樣，這裡的 flex 是縮寫，包含了 flex-grow、flex-shrink、flex-basis ，只設定一個值則為 flex-grow。這三個部份我總是搞不太清楚，因此以下是一些整理。

* [flex-grow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow) 代表元件的伸展性，指定 flex 容器中剩餘空間有剩餘時當前元件的伸展性。預設為 0 ，設置為 0 則不會縮放。
* [flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink) 代表元件的收縮性，當空間分配不足時當前元件的收縮性。預設為 1 ，設置為 1 則不會縮放。
* [flex-basis](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis) 代表元件的基準值。如果不使用 box-sizing，這個屬性決定了 flex 元素的內容盒子的尺寸。

來自 [《卡斯伯 Flex 空間計算規則》](https://wcc723.github.io/css/2020/03/08/flex-size/) 的一點小節：
* flex-grow 是分配剩餘的空間。
* flex-grow 與 flex-shrink 運作上相反， flex-shrink 是將超出的部分重新分配，確保元素不會被裁切。

我自己的解釋：
* flex-grow 是在容器內依照比例分配給元件而不會超出。
* flex-shrink 在元件超出容器時使用，可以讓元件依照比例刪除多餘的部分，而讓元件能裝在容器內不會超出。

**flex : 直接加上數字** - 

一開始作者在父輩的時候加上了 flex: 1，這是預設，代表說會把多餘的空間平均分配給每一個物件，後來作者使用了 flex: 5，當其他物件平均分配是一個量時，則這邊代表了五個量，是平均的五倍。

**CSS 組合式宣告** - 

作者沒挑出來講，因為這是比較基礎的部分，但我之前比較少這樣使用，因此一開始 CSS 會失效。那麼來說什麼是 CSS 組合式宣告，它不像階層式的告訴你 —— 先到 cointainer 裡的 wrap，再到 wap 裡的 itemA： 

```html
    <div class="container">
        <div class="wrap">
            <div class="itemA">
                
            </div>
        </div>
    </div>
```
```css
    .container .wrap .itemA { }
```

組合式宣告則是，同時符合這些條件的選項，沒有階層的概念，不是一層一層下去找，而是同時有這些條件。舉例來說是 —— 我要選到 itemA，接著選到同時是 itemA，也是 wrap，注意！這時候 **每個選取器之間是沒有空格的！**

```html
    <div class="itemA wrap"></div>
```
```css
    .itemA.wrap { }
```

**box-shadow : inset** - 

因為並沒有照著打，是憑感覺抓自己想要的 CSS，因此打到 box-shadow 時很自然的沒有打上 inset，赫然發現圖片邊邊會出現一點圖片，這讓我覺得很是奇怪，比對之下才發現作者的 box-shadow 有打上 inset。

[box-shadow](https://developer.mozilla.org/zh-TW/docs/Web/CSS/box-shadow) 的 inset，MDN 的英文解釋比較好理解：

> The presence of the inset keyword changes the shadow to one inside the frame (as if the content was depressed inside the box). Inset shadows are drawn inside the border (even transparent ones), above the background, but below content.

它的意思為，inset 是在 border 之內的（即使是透明的 box-shadow），並在背景之下，在內容下面。

因此作者這邊的使用方式就會變成， box-shadow 很像是在內容裡多了一層半透明的邊框，不會影響圖片原本的大小與格式，可以讓每個元件間有個半透明去區分，又不會太過突兀。

## JavaScript 筆記 ##

**若這次點擊與上次點擊不同，則關閉上次點擊** - 

發現有一個問題，當我點擊現在的 panel 時，接著點擊下一個 panel，上一個已經開啟的 panel 並不會關閉。

我發現有這個問題，沒想到我參照的一位台灣的工程師有寫出他的解法，這邊是他的連結 [05 - Flex Panel Gallery](https://github.com/guahsu/JavaScript30/tree/master/05_Flex-Panel-Gallery) 

## 延伸練習 ##

想說試著做一個延伸練習，雖然感覺不是很成功，但或許以後會再修改，還是先放上來。[Flex Panel Gallery #extend](https://alice-nor.github.io/JavaScript30/05%20-%20Flex%20Panel%20Gallery/M%E1%BB%B9ThoGuide.html)

