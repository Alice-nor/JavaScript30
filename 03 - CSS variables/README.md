
# 03 CSS variables
( 2021/6/22 DONE ) 做出可以讓使用者調整照片邊框間距、顏色與圖片模糊度的網站。
成果：[CSS variables](https://alice-nor.github.io/JavaScript30/03%20-%20CSS%20variables/index.html) 

## CSS 筆記 ##

**CSS Variable** - 

可以看這一篇： [原生 CSS 變數運用技巧（CSS Variables）](https://w3c.hexschool.com/blog/21985acb)。我一直以為只有 Sass、Less 等預處理器才可使用變數，原來在幾年前 CSS 就已經可以增加它原生的變數了，練習到這邊真的是長知識！

一些重點整理：
* 建議定義在最高層級的 :root 中
* 宣告變數時是 --變數名稱，例如：--color: brown;
* 取值時要加入 var，，使用範例：body { background: var(--color) };

## JavaScript 筆記 ##

```JavaScript
        const inputs = document.querySelectorAll('.controls input');
```

要注意的是，這邊的 inputs 看起來或許很像 array（陣列），然而它並不是，實際上他是 NodeList。（可以從右鍵檢查裡的 _proto_ 發現他寫的是 NodeList，實際點開 NodeList 也會發現裡頭缺少了 array 會有的一些方法，像是 reduce、map 等等，但這邊並不會有，所以可以知道 inputs 確實不是 array。

**dataset** - 

[dataset](https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLOrForeignElement/dataset)  就是在 JavaScript #01 第一天時有用到的 data-* ，讓程式設計師可自定義的屬性， dataset 就代表自定義屬性的集合，例如我在一個元件中給它加上屬性 data-size、data-name，我試著印出 dataset 時就會出現 data-size、data-name 這兩個我自定義的屬性！

因此這邊的 dataset 是取得 data-sizing="px" 中 px。

## 延伸練習 ##

我覺得這個練習很有趣！還蠻意猶未盡的，所以就想多做一個類似的，可以讓使用者自己調整設計的介面網站。以設計出一幅畫的概念，做出這個網站，畫裡的設計元素為我喜歡的素材做出來的，使用者可以調整字體大小、顏色、背景顏色等等。成果：[CSS variables #extend](https://alice-nor.github.io/JavaScript30/03%20-%20CSS%20variables/painting.html)

延伸網站示意圖如下，歡迎來玩看看：）（但我沒做 RWD 手機版....）

![image](https://github.com/Alice-nor/JavaScript30/blob/main/img/designPainting.jpg)
