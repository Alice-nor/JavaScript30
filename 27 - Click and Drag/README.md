
# 27 - Click and Drag
> 2021/12/11 DONE  
可以以X軸拖曳移動的內容物。
成果：[27 - Click and Drag](https://alice-nor.github.io/JavaScript30/26%20-%20Stripe%20Follow%20Along%20Nav/) 

## CSS 筆記 ##

#### white-space:nowrap

CSS 的部分，先是讓若內容物有超過的話，  
X 軸的部分或有卷軸可以使用，但 Y 軸的部分則隱藏，  
接著搭配 `white-space:nowrap`，讓內容物不會換行，  
這樣的話包覆在裡頭的內容不會換行、搭配 X 軸捲軸去移動。  
其他 `white-space` 的使用可看此：[CSS white-space用法及代碼示例](https://vimsky.com/zh-tw/examples/usage/css-white-space-property.html)

#### user-select

這也是我第一次看到的的方法，當我們想選取一個單字時，  
會習慣性的點兩下，就可以選擇；想選擇整段時則點選三下，  
而 `user-select` 就是可以修改這個功能，  
像是這邊使用到 `user-select: none`，則不能讓使用者選取內容。  
其他 `user-select` 使用方法可看：[[CSS] 使用 user-select 來設定是否可以選取或直接全選](https://tools.wingzero.tw/article/sn/270)

#### cursor:grab

之前使用 cursor 最常使用的都是 pointer，  
今天才知道抓取的手勢是 grab。
更多 cursor 使用方法可看：[cursor](https://developer.mozilla.org/zh-TW/docs/Web/CSS/cursor)


## JavaScript 筆記 ##

#### 偵測滑鼠有拖曳的動作時才執行捲軸內容物的移動

這邊主要搭配的是各式滑鼠的動作，包含以下這些：  
`mousedown`：按下滑鼠（ flag 設置成 true，準備移動）  
`mouseleave`：滑鼠離開（ flag 為 false，不移動）  
`mouseup`：放開滑鼠（ flag 為 false，不移動）  
`mousemove`：滑鼠移動（當 flag 為 true 時，可拖曳移動）  
重點是 `mousemove`，當滑鼠指示移動沒有按下滑鼠時，  
代表說滑鼠並不是拖曳的動作，所以在方法內會直接 `return` 結束。

#### 偵測滑鼠往左或往右拖動

先抓取滑鼠按下時的位置是 `startX`  
要刪減 `items` 左側的位置會比較彈性，
所以 `startX = e.pageX - slider.offsetLeft`，  
抓取完後，接著要拖曳滑鼠，偵測在什麼地方拖曳結束，  
`const x = e.pageX - slider.offsetLeft`，  
所以可以知道移動多少位置是： `x-startX`，  
接著再讓 slider 的 `scrollLeft` 等於移動位置就可以了！  

接著會遇到一個情況就是，拖曳時畫面有點奇怪，  
這是因為每一次都會重新計算 `scrollLeft`，  
應該要每一次移動時，他都是以現在所在的位置去計算的，
所以 `slider.scrollLeft = scrollLeft - walk`，  
這樣就可以很滑順的移動了！（若覺得移動太慢可以加乘）

#### 結尾

真的太久沒有來練習了！上班後就變得很懶惰QQ  
覺得這個練習很棒，非常實用還可以自己手刻看看，  
之後應該也會做補充練習！督促自己，加油～
