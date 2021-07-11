
# 07 - Array Cardio Day 2
( 2021/7/11 DONE ) 使用 fetch，在查詢頁面輸入文字時，會出現相近或推薦的選項。
成果：[07 - Array Cardio Day 2](https://alice-nor.github.io/JavaScript30/06%20-%20Type%20Ahead/index.html) 

## JavaScript 筆記 ##

可以參考以下的文章：[avaScript 陣列中兩個冷門的方法：Every、Some](https://noob.tw/js-every-some/)、 [JS 常見陣列方法 [push(), unshift(), pop(), shift(), splice(), reverse(), concat(), include(), indexOf(), join()]](https://wcc723.github.io/development/2020/10/04/js-array-methods/)


**Array.prototype.every()** - 

[Array.prototype.some()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/some)很好理解，而 [Array.prototype.every()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/every) 比較不同的地方在於，，陣列裡有條件符合時才會回傳 true，只要有一個不是就會回傳 false。


**解題思路** - 

覺得這幾題都不算很困難（跟前面第一篇相比這篇簡單好多，第一篇比較多技巧！）想記錄下我的解題方法，會與作者不太一樣（作者的很精簡）。

1. Array.prototype.some() is at least one person 19 or older?

這一題是使用 [Array.prototype.some()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/some) 去尋找 people 物件裡，是否有人年齡大於 19 歲？因此我先把現在的年份記錄下來，再用 some 去尋找是否有人的年齡為現在的年份 - 出生年，會是大於 19 的。


        const now = new Date(); // 取得現在時間
        const nowYear = now.getFullYear(); // 取得現在是哪一年

        const result = people.some(x => (nowYear - x.year) >= 19); // 是否大於 19 歲
        console.log(`是否有人年齡大於 19 歲？ -> ${result}`); // 印出


2. Array.prototype.every() is everyone 19 or older?

這一題是使用 [Array.prototype.every()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/every) 去尋找 people 物件裡，是否每個人都大於 19 歲。所以照邏輯來說，只要有人小於 19 歲，就不會是“每個都大於 19 歲”，也就會是 false。我使用上一題方法延伸。

        const now = new Date(); // 取得現在時間
        const nowYear = now.getFullYear(); // 取得現在是哪一年

        const result2 = people.every(x => (nowYear - x.year) >= 19); // 確認是否每個人都大於 19 歲
        console.log(`是否所有人年齡都大於 19 歲？ -> ${result2}`); // 印出

3. Array.prototype.find() Find is like filter, but instead returns just the one you are looking for. find the comment with the ID of 823423.

這一題是使用 [Array.prototype.find()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/find) 去尋找 comments 物件裡，找出 id 為 823423 的物件。

        const result3 = comments.find(function(x) {
            if (x.id == 823423) return x;
        }); // 找出 id 為 823423 的評論。
        console.log('印出 ID 為 823423 的物件')
        console.log(result3); // 印出來

3. Array.prototype.findIndex() Find the comment with this ID. delete the comment with the ID of 823423

這一題是使用 [Array.prototype.findIndex()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) 去尋找 comments 物件裡，找出 id 為 823423 的評論，並刪掉它。


        const index = comments.findIndex(x => x.id == 823423); // 抓到 id 為 823423 的索引值
        console.log(index); // 印出物件，確實是 id 為 823423 的評論
        comments.splice(index, 1); // 刪掉索引為 1 的評論
        console.log('--- 移除 index 1 ---')
        console.log(comments); // 印出 comments，id 為 823423 的評論 已消失
        console.log(comments[1]); // 印出索引為 1 的評論
        // 已經變成原本索引為 2 的評論，印出：
        // { text: 'You are the best', id: 2039842 }


