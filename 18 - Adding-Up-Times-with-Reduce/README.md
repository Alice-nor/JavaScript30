
# 18 - Adding-Up-Times-with-Reduce
> 2021/8/31 DONE  
使用 map()、reduce() 方法取得播放清單的總秒數。
成果：[18 - Adding-Up-Times-with-Reduce](https://alice-nor.github.io/JavaScript30/18%20-%20Adding-Up-Times-with-Reduce/index.html) 


## JavaScript 筆記 ##

#### 取得 li 並轉換成陣列

我們先抓取畫面上的 li，接著要使用 map() 去歷遍內容，  
但這時發現了一個問題，我們會遇到一個 error 説 map 不是一個 function，  
會有這個錯誤是因為我們誤以為 li 是一個大陣列，  
但事實是他其實是物件，所以我們需要先把它變成陣列，  
可以使用的兩種方法如下。

```JavaScript
    const timeNodes = [...document.querySelectorAll('[data-time]')]; // 方法1 
    const timeNodes = Array.from(document.querySelectorAll('[data-time]')); // 方法2
```

#### 字串轉換成 float

以下寫法是相同的意思。

```JavaScript
    const [mins, secs] = timecode.split(':').map(parseFloat); // 方法1
    const [mins, secs] = timecode.split(':').map(function(str)=> {
        return parseFloat(str);
    }); // 方法2
```
