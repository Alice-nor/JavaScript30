
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

## 延伸練習 ##

最近很常玩楓之谷，所以想來個楓之谷版本的練習！遇到的問題是，不太清楚如何讓陣列與陣列去做比對，要順序與內容都完全相同！後來找到以下可行的方法。參考的內容：[JavaScript比较两个数组的内容是否相同](https://blog.csdn.net/weixin_34081595/article/details/88755033?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-1.control&spm=1001.2101.3001.4242) 

```JavaScript
    function check(arr1, arr2) {
        let flag = true;
        if (arr1.length !== arr2.length) {
            flag = false;
        } else {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    flag = false;
                }
            }
        }
        return flag;
    }
```
