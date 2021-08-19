
# 12 - Key Sequence Detection
( 2021/8/19 DONE ) 類似玩遊戲時的組合技，有了 ABC 的組合，就會出現搭配成功的結果。
成果：[12 - Key Sequence Detection](https://alice-nor.github.io/JavaScript30/11%20-%20Custom%20Video%20Player/index.html) 


## JavaScript 筆記 ##

今天的內容比較多是之前已經學過的內容。感覺很適合做其他的延伸。
只有下面這一行要思考久一點我才比較理解....。

```JavaScript
    // 不超出密碼之長度，並堆疊換掉第一個元素
    // 這邊是 splice(-8, 0)，也就是刪去陣列中第 0 個數值
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
```


