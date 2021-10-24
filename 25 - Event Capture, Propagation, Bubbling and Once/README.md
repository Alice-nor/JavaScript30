
# 25 - Event Capture, Propagation, Bubbling and Once
> 2021/10/24 DONE  
了解 `addEventListener` 中事件的捕捉、傳遞、冒泡與單次的執行方法。
成果：[25 - Event Capture, Propagation, Bubbling and Once](https://alice-nor.github.io/JavaScript30/24%20-%20Sticky%20Nav/) 



## JavaScript 筆記 ##

#### 捕捉與冒泡

程式碼如下。  

```JavaScript
    const divs = document.querySelectorAll('div');

    function logText(e) {
        console.log(this.classList.value);
    }

    document.body.addEventListener('click', logText);
    divs.forEach(div => div.addEventListener('click', logText));
```

這邊我們先設定了三個 div，而他們是互相包覆住的，  
最上層的 `class` 是 one，往下第二層是 two，最後一層是 three，  
而當我們點擊 `class` 為 three 的物件時，  
程式的運作實際是會從最外面 -> 瀏覽器 -> body -> one -> two -> three，  
從最外層一直捕捉到 three，這時就可以知道：『哦，你點擊到的 three 在這邊！』  
接著，我們會運作 `logText` 這個方法，它會印出每一層的 `classList.value`，  
所以會依序印出 three -> two -> one -> bob(這邊的 body class 為 bob)，  
就像是泡泡一樣，從最底層往最上層跑。

> 推薦閱讀：[[JavaScript] Javascript 中的 DOM 事件傳遞機制：捕獲與冒泡 (capturing and bubbling)](https://medium.com/itsems-frontend/javascript-event-bubbling-capturing-794cd2d01e61) 

#### 事件監聽傳遞順序的改變

> 當 options 參數設定的 Boolean 值不同時，它對傳遞順序的改變，如下:
True: 把這個 listener 添加到捕獲階段 (Capture)。
False: 把這個 listener 添加到冒泡階段 (Bubble)。

> 來源：[[DOM] Event Propagation I : 事件捕捉和冒泡-Event Capture & Bubble](https://hsien-w-wei.medium.com/dom-event-propagation-i-%E4%BA%8B%E4%BB%B6%E6%8D%95%E6%8D%89%E5%92%8C%E5%86%92%E6%B3%A1-event-capture-bubble-8214bf146b35) 

所以 `addEventListener` 方法中第三個參數預設為 false，  
也就是預設為傳遞冒泡事件，如果我們想選擇捕捉事件，把第三個參數改為 true 即可。

#### 停止捕捉或冒泡

停止捕捉或冒泡的方法為 [Event.stopPropagation()](https://developer.mozilla.org/zh-TW/docs/Web/API/Event/stopPropagation)。

```JavaScript
    event.stopPropagation();
```

> Event 介面的 stopPropagation() 方法可阻止當前事件繼續進行捕捉（capturing）及冒泡（bubbling）階段的傳遞。

> 來源：[Event.stopPropagation()](https://developer.mozilla.org/zh-TW/docs/Web/API/Event/stopPropagation)

#### 事件只監聽一次

第一次知道還有這樣的使用方法，  
也是 `addEventListener` 的參數，只要把 `once: true`，  
那麼這個監聽只會監聽一次，之後就會被 remove 掉，不再監聽。