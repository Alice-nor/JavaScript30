
# 20 - Speech Detection
> 2021/9/16 DONE  
語音辨識系統。
成果：[20 - Speech Detection](https://alice-nor.github.io/JavaScript30/19%20-%20Webcam%20Fun/index.html) 


## JavaScript 筆記 ##

#### 瀏覽器內建之語音辨識

[SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) 這個方法提供語音辨識，  
不過這個還是開發中的技術，兼容性也不是很大.....。  
像是 Chrome 這樣的瀏覽器，如果網路沒有連線的話，  
語音辨識系統是不可用的，因為音檔是需要傳送到網路伺服器做辨認的。

接著 `SpeechRecognition` 有個方法 [interimResults](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/interimResults)，  
這個方法是講話的過程中辨認在說什麼，並且返回它的值，  
如果是 false 的話，我們講完一段話需要停頓，  
直到語音辨識系統打出我們說的話，才可以知道是否正確，  
但這其實不是很友善，應該是我們正在講話時，  
語音辨識就直接顯示給我們看結果（辨識中可能一直變換結果），  
而不需要停頓等它打完，這樣比較多餘的動作。   

```JavaScript
    // 講話時字串就會跑出來
    recognition.interimResults = true;
```

#### 講完話會自動分段

這邊要做的事情是，當我們講完話後，    
會在原本的 `p` 片段後面再新增一個 `p`，  
接著再說新的語音時，會把內容寫進最後面的 `p` 中。




