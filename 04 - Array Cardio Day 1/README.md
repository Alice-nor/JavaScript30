
# 04 Array Cardio Day 1
( 2021/6/24 DONE ) 今天要來練習 array 的一些方法。
成果：[CSS variables](https://alice-nor.github.io/JavaScript30/03%20-%20CSS%20variables/index.html) 

看到這邊的練習就想推薦曾經看過的教學：[现代 JavaScript 教程 数组方法](https://zh.javascript.info/array-methods) ，每次看這邊的教學都很花時間，但真的都是很踏實的練習。（雖然偶爾會忘記怎麼使用，但只要回頭看就可以想起來！）

## JavaScript 筆記 ##

**console.table()** - 

第一次知道還有 [Console.table()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/table) 的用法，實在非常的酷！這個發法會以表格的方式印出結果。

**dArray.prototype.reduce()** - 

練習到這邊的時候，輸出的竟然是 [object Object]7690678950803784597870 ， WHAT？這什麼詭異的答案！原來是因為一開始沒有給初始值，所以第一個值是 undefined，後面就會變成字串加減，因此全部連在一起了....這邊只要在初始值給 0 就可以解決了！

        let value = arr.reduce(function(accumulator, item, index, array) {
        // ...
        }, [initial]); // 這邊要記得給 initial 初始值為 0

！ 這邊提醒，影片中輸出值為 523，但在 github 複製他給予的資料時，結果會是 861 哦！
