
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
而不需要停頓等它打完，去掉這個比較多餘的動作。   

```JavaScript
    // 講話時字串就會跑出來
    recognition.interimResults = true;
```

#### 講完話會自動分段

這邊要做的事情是，當我們講完話後，    
會在原本的 `p` 片段後面再新增一個 `p`，  
接著再說新的語音時，會把內容寫進最後面的 `p` 中。

```JavaScript
    // 這邊主要是在操作 HTML 的部分
    let p = document.createElement('p');
    const words = document.querySelector('.words');
    words.appendChild(p);
```

#### 開始說話並觸發 event

`SpeechRecognition` 有提供一個 `result event`，  
它會偵測辨識系統現在是否有返回聲音，  
如果有的話就會執行 event 裡的內容。

> Fired when the speech recognition service returns a result — a word or phrase has been positively recognized and this has been communicated back to the app. Also available via the onresult property.
> 參閱：[result event](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/result_event)

接著搭配使用 `start event`，  
它會詢問使用者是否要開啟麥克風，  
如果沒有使用 `start event`，或沒有開啟麥克風，  
  `SpeechRecognition` 是毫無用武之地的。

> Fired when the speech recognition service returns a result — a word or phrase has been positively recognized and this has been communicated back to the app. Also available via the onresult property.
> 參閱：[start event](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/start_event)

#### 抓取辨識完成的資料

語音辨識的物件有點繞，各種套來套去的，  
所以需要 `map` 兩遍....。  

```JavaScript
    recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join(''); // 把多個物件連接在一起變成一個物件
    });
```

#### 修正語音辨認一次後就不再監聽的問題

實際操作後會發現，語音辨認完成之後，  
若再次語音，`result event` 並沒有繼續監聽，  
event 到這邊就結束了！這是因為 `result event` 已完成它的任務了，  
我們需要搭配 `end event`，當使用者不再說話時，  就會觸發 `end event`，  
我們又再 `end event` 裡再次呼叫 `recognition.start`，  
這樣的話就會一直持續的聽取使用者是否有在說話，而不會間斷了。


```JavaScript
    recognition.addEventListener('end', recognition.start);
```

