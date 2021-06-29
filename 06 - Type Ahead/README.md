
# 06 - Type Ahead
( 2021/6/29 DONE ) 使用 fetch，在查詢頁面輸入文字時，會出現相近或推薦的選項。
成果：[06 - Type Ahead](https://alice-nor.github.io/JavaScript30/06%20-%20Type%20Ahead/index.html) 

## JavaScript 筆記 ##

**Fetch** - 

這邊使用到的接收方式是 fetch，若對 Promise、Await、fetch 不太了解，可以先看以下的推薦影片入門了解  Promise，我個人覺得很好吸收：[《【零基礎JavaScript教程】#14 JavaScript Promise 是什麼？異步(非同步)編程必須掌握的技巧 程式員終於可以逃出回調地獄callback hell了！！》](https://www.youtube.com/watch?v=CTChl_DYTz0)、[《【JavaScript教程】#15 輕松入門 JavaScript Async Await | Async Await 比 Promise 更好用？讓你快速掌握 async await 異步執行概念》](https://www.youtube.com/watch?v=zoZiQJ38bXk&t=627s)，接著再看一點關於 fetch 的解說：[《鐵人賽：ES6 原生 Fetch 遠端資料方法》](https://wcc723.github.io/javascript/2017/12/28/javascript-fetch/)。

        // fetch 簡單的使用方式如下：

        fetch('http://abc.com/', {method: 'get'})
        .then(function(response) {
            //處理 response
        }).catch(function(err) {
            // Error :(
        })

**cosnt** - 

        const cities = [];
        fetch(endpoint)
            .then(blob => blob.json())
            .then(data => cities = data) // error

作者一開始把城市的一大串資料存在陣列中，拿到資料後直覺性的會把 cities = data，但因為 cities 是 const，他是不可變動的，所以不能這樣使用，可以改為使用 **push** 方法，寫成：data => cities.push(data)，或是把 const cities 改成 let cities，看需求更改。

但 cities.push(data) 也有個問題，若增加陣列內容像是如下：

        const cities = [];
        fetch(endpoint)
            .then(blob => blob.json())
            .then(data => cities.push(1,2,3,4))
            // console cities： [Array[1000],1,2,3,4]

而這不是我們要的，我們要的是資料會在第一個資料裡！這時可以使用 [擴展運算子 spread operator](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_syntax)，改成： cities.push(...data)。

**Regex 正規表達式** - 

這個真的是每次看都昏頭的東西....，以前有看過一篇文章覺得寫的簡單好懂，雖然跟本次練習其實不太一樣，但推薦閱讀：[[JavaScript] 來寫正規表達式 Regex](https://medium.com/itsems-frontend/whats-regex-dc08c8c30a87)。

接著來說練習，這邊的 'gi' 代表什麼意思？ g 代表的是會尋遍所有的字串，看是否有符合的部分， i 代表的是不論大小寫，只要符合都會選擇。


**keyup** - 

可看這篇：[比較 keydown, keypress, keyup 的差異](https://medium.com/@yitailin/%E6%AF%94%E8%BC%83-keydown-keypress-keyup-%E7%9A%84%E5%B7%AE%E7%95%B0-4e873ba17e81)。簡單來說， keyup 是指放開鍵盤的那一個瞬間，就會觸發該事件。這與 change 相比較來說， keyup 在使用上會比較方便，也符合使用者習慣。

**replace()** - 

[replace()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 方法會回傳一個新的字串，與舊的字串做比對，並取代舊的字串。（原始的字串並不會因此而有變化， replace() 會創造一個新字串）

        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`)

範例了這邊，就是把 place.city 裡符合 regax 的匹配與範例的內容，變成後面那一串 span 的字串內容。

