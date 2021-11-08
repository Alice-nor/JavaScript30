
# 26 - Stripe Follow Along Nav
> 2021/11/08 DONE  
製作會隨著滑鼠移動而改變的選單效果，且移動時原選單不會消失，
成果：[26 - Stripe Follow Along Nav](https://alice-nor.github.io/JavaScript30/25%20-%20Event%20Capture,%20Propagation,%20Bubbling%20and%20Once/) 

## CSS 筆記 ##

#### perspective 透視

今天的練習看到了兩個沒怎麼看過的 CSS 用法，  
其中一個是 [perspective](https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective)，  
它指定了觀察者與平面的距離，可以產生透視效果。  
可以閱讀以下這篇文章了解：  
[CSS沒有極限 - CSS transform-3D的透視(perspective)](https://wcc723.github.io/css/2013/10/11/css-perspective/)。

#### will-change 優化

另一個沒怎麼看過的用法是 [will-change](https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change)，  
它的用途在於告訴瀏覽器該元素會有哪些變化，  
在變化前先準備好對應的工作，算是一種優化，  
但實際閱讀過後發現這個方法其實要盡量避免去使用，  
使用這個方法時已經算是最終手段了。

> * 不要将 will-change 应用到太多元素上：
> * 有节制地使用
> * 不要过早应用 will-change 优化
> * .....
> 來源：[will-change](https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change)

## JavaScript 筆記 ##

#### 如何實現

這邊實際上觸碰 `ul ` 時，出現的選單其實都是同一個背景，  
只是它會去找碰到的是哪一個 `li`，然後顯示這個 `li` 的內容。

```html
    <!-- 這裡是背景的部分，只有一個 div 但內容會隨點選的物件而有所不同 -->
    <div class="dropdownBackground">
        <span class="arrow"></span>
    </div>

    <!-- 接著是三個 li，這裡的 li 也擔當觸發器的角色 -->
    <ul class="cool">
        <li></li>
        <li></li>
        <li></li>
    </ul>
```

#### 避免轉換太過快速，內容顯示有異狀

我們有設置 `setTimeout` 在一段時間後會有動畫產生，  
但當我們滑鼠轉換的太過快速，這個動畫還未完成，  
我們的滑鼠就移到下一個物件時，此時內容看起來會有點糟糕，  
因為 `setTimeout` 的東西才出現，但下一個物件的內容已經看見了，  
為了避免這樣的情況出現，我們設置以下的程式碼，  
所以要兩個條件都出現時，它的內容才會出現，  
那如果滑鼠轉換太過快速時，`setTimeout` 就乾脆不會出現，  
內容看起來才不會太過奇怪。  
程式碼如下。  

```JavaScript
        setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
```
