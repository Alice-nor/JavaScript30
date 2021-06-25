
# 05 - Flex Panel Gallery
( 2021/6/25 DONE ) 今天要來練習 array 的一些方法。
成果：[Flex Panel Gallery](https://alice-nor.github.io/JavaScript30/04%20-%20Array%20Cardio%20Day%201/index.html) 

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

（ 這邊原作者並沒有比較特別的使用這個屬性，不用 flex 也可以使用其他方式達到這個效果 ）

## JavaScript 筆記 ##

**console.table()** - 

第一次知道還有 [Console.table()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/table) 的用法，實在非常的酷！這個發法會以表格的方式印出結果。

**dArray.prototype.reduce()** - 

！ 這邊提醒，影片中輸出值為 523，但在 github 複製他給予的資料時，結果會是 861 哦！
