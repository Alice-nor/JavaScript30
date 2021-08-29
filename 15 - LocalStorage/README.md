
# 15 - LocalStorage
( 2021/8/23 & 28 DONE ) 實作模擬菜單的網頁，可在頁面中新增項目，頁面重整後也不會清空。  
成果：[15 - LocalStorage](https://alice-nor.github.io/JavaScript30/15%20-%20LocalStorage/index.html) 


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

#### 重置表單

JavaScript 自己就有一個很好用的重置表單的方法 [HTMLFormElement.reset()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset)，  
效果就如同每次想把表單重新重置填寫時的效果。

這邊會用到的時機就是，當按下 Add Item 時，  
使用習慣會是增加項目，並且把 input 的位置清空重置，  
這時就可以使用到 `reset()` 。

#### 儲存陣列資料更有彈性

```JavaScript
    function populateList(plates = [], platesList) {
        // code here...
    }
```

要讓資料呈現在網頁上面時，要抓取陣列的資料，  
但作者並不是直接抓取已經保存好的陣列的資料去利用，  
反而是在 function 再弄了一個空陣列去儲存，  
會這樣處理，如果以後表格資料更加複雜，可能有數個陣列時，  
不同的陣列依然可以儲存，這個方法依然可行，不會因此崩潰。

#### checkbox 勾選與沒勾選之變化

`input` 欄位中的 `id` 與 `label` 欄位中的 `for` 有關，  
這邊要控制勾選前後的變化，是搭配 css 中的 checked 變化，  
項目被勾選時，此時是 checked 是狀態，icon 就會出現。

```JavaScript
    function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
    }
```

```css
    .plates input+label::before {
    }

    .plates input:checked+label:before {
        content: "🌮";
    }
```

#### 畫面重整時，資料在 localStorage 而不會消失

搭配的是瀏覽器中的 [localStorage](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/localStorage)，  
如何看 local storage，chrome 是在右健檢查 ->  
Application -> 最左邊有個 local storage。  

> localStorage 的應用與 sessionStorage 相似, 除了 localStorage 的儲存資料並無到期的限制, 而 sessionStorage 的儲存資料於目前瀏覽頁狀態結束的同時將一併被清除 — 也就是目前瀏覽器頁面被關閉的同時。

搭配的語法如下：

```JavaScript
    localStorage.setItem('myCat', 'Tom'); // 新增
    localStorage.removeItem('myCat'); // 移除
    localStorage.clear(); // 刪除 localStorage 所有語法
```

#### localStorage 的 key 與 value 皆為字串形式

接著遇到的問題是，我們會下意識認為要這樣寫：

```JavaScript 
    localStorage.setItem('items',items);
```

接著我們發現 local storage 寫入的 value 值為 `[object Object]`，  
這是因為 localStorage 的 value 都會轉變成字串，  
當給的東西為物件時，就會發生這樣的情形....，  
這時需要使用 `JSON.stringify` 把物件轉換成字串。

```JavaScript
        localStorage.setItem('items', JSON.stringify(items));
```

 [localStorage](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/localStorage) 也有寫到此重點：  
 > 鍵值名稱和值皆為字串型式(請留意, 當其為物件, 整數等將自動轉換為字串型式)

若是我們要使用 localStorage 的內容時，  
使用 `JSON.parse` 再轉換回物件即可。

#### 畫面重整時，使用 localStorage 讓資料在畫面上呈現

試驗看看時可以發現 localStorage 確實讓資料把留在瀏覽器內了，  
但畫面上的 items 確實消失了，這時把 items 資料修改一下就可以了。

```JavaScript
    // const items = []; 
    // 原本是讓資料先是空陣列
    // 現在我們要先從 localStorage 抓取資料
    // 若 localStorage 是空的資料，才讓陣列為空的
    const items = JSON.parse(localStorage.getItem('items')) || [];

    // 並把此行放到程式碼後面
    // 讓每次頁面重整時，最後都會在執行一次讓畫面呈現的 function
    // 這樣每次頁面重整時，都會出現資料！
    populateList(items, itemsList);
```

#### 保留物件之勾選

再次試驗時會發現，原本有勾選到的物件，  
只要重整時，它就不再勾選了！所以我們要處理這個問題。  

這裡作者提到了 event delegation（事件委派），  
作者說事件委派就像是負責任的父親，只要孩子有事件發生，  
問父親就可以了，不用再一個個去問每個小孩，  
簡單來說是如此的。可以看以下文章理解：  
[為什麼有時你應該優先考慮 event delegate 而不是 event binding](https://ithelp.ithome.com.tw/articles/10120565)。  

接著，我們要把 checked 的物件的 done 狀態給為 true，  
並更新 localStorage 的內容，這樣即使頁面重整了，  
已 checked 的選項就還會是 checked 的！

```JavaScript
    function toggleDone(e) {
    if (!e.target.matches('input')) return; // 跳過 lable，只要 input
    const el = e.target; // 取得 input
    const index = el.dataset.index; // 取得 input 的 index
    items[index].done = !items[index].done; // 把選取項目的 done 變更
    localStorage.setItem('items', JSON.stringify(items)); // 更新 localStorage
    populateList(items, itemsList); // 更新陣列
    }
```

## 延伸練習 ##

接著練習作者提到的，做出兩個按鈕——全部清空與全部 checked。  
實作起來蠻簡單的，只是把 localStorage 清空時，  
畫面的呈現還是跟原本的一樣，最後我多用了一個 refresh 的 function，  
讓畫面在一秒後會自動重整，才會呈現正常已清空的畫面。  

覺得這個練習很適合做 todolist，剛好我也沒做過 todolist，  
因此想趁此機會練習使用 localStorage 做出一個 todolist。


