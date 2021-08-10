
# 10 - Hold Shift and Check Checkboxes
( 2021/8/10 DONE ) 勾選一個項目，接著按著 shift 時，不管點選項目上或下的其他項目，都可以全部選取到，類似 gmail 會有的功能。
成果：[10 - Hold Shift and Check Checkboxes](https://alice-nor.github.io/JavaScript30/08%20-%20Fun%20with%20HTML5%20Canvas/index.html) 

## CSS 筆記 ##

**text-decoration : line-through** -

才發現 text-decoration 有 line-through 這個方法可以使用，它的功用就是在文字上增加刪除線的效果。項目結束時用刪除線標示為已完成的效果。


## JavaScript 筆記 ##

**確認是否有按下 shift 鍵** -

JavaScript 有個屬性可以知道目前是否有按下 shift 鍵： [MouseEvent.shiftKey](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/shiftKey)。使用方法是傳遞事件（假設為 e ）並檢驗 e.shiftKey 為 true 或 false。true 就是正按下 shift 鍵，false 則是沒有。

**選取第一個項目與最後一個項目中的所有項目** -

這是按下 shift 後該有的效果，但該怎麼選取中間的項目呢，這邊給出的解決不走的想法如下：

1. 檢查所有項目，找到第一個被選取的項目
2. 接著把中間項目的變數 inBetween 都設定為 checked
3. 直到碰到了最後一個被選取的項目，inBetween 結束
4. 選單中若有剩下其他項目，因 inBetween 都為 false，因此不 checked
5. 結束


