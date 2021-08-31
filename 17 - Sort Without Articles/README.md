
# 17 - Sort Without Articles
> 2021/8/31 DONE  
在陣列中排除部分的文字，並進行排序。
成果：[17 - Sort Without Articles](https://alice-nor.github.io/JavaScript30/16%20-%20Mouse%20Move%20Shadow/index.html) 


## JavaScript 筆記 ##

#### 排列陣列

要好好排列陣列使用的是 [sort()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)。  
其實以下方法使用起來結果是相同的，但作者的方法2 是會比較保險的做法。

```JavaScript
    // 方法1 
    const sortedBands = hands.sort();
    // 我原本是使用這個方法，有時容易有例外發生

    // 方法2
    const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
```

#### 替換文字

先把陣列中開頭為 the, a, an 的部分刪除，並用空白取代，  
這邊使用的是 [replace()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace)。  

> str.replace(regexp|substr, newSubstr|function)

> replace() 方法會傳回一個新字串，此新字串是透過將原字串與 pattern 比對，以 replacement 取代吻合處而生成。pattern 可以是字串或 RegExp，而 replacement 可以是字串或函式（會在每一次匹配時被呼叫）。

不過這邊有使用到 regexp（正規表達式），  
我每次看到這個就頭痛......。


```JavaScript
    function string(bandName) {
        // ^ 代表只要以下符合就都符合
        // i 代表不論大小寫
        return bandName.replace(/^(a | the | an)/i,'').trim();
    };
```





