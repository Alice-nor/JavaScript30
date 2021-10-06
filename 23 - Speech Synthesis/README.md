
# 23 - Speech Synthesis
> 2021/9/16 DONE  
使文字轉成語音。
成果：[23 - Speech Synthesis](https://alice-nor.github.io/JavaScript30/21%20-%20Geolocation/index.html) 


## JavaScript 筆記 ##

#### 辨別文字與提供語言、音調與音量等能力

這邊使用 [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) 這個方法，  
它提供如何把文字轉成語音，還可以調整語言、音量與音調等。  

#### 獲得語音，並可操作開始、暫停語音等命令

使用上面的 `SpeechSynthesisUtterance` 方法後，  
接著使用 [SpeechSynthesis](https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesis) 去取得聲音，  
它提供開始、暫停、移除語音等方法。

```JavaScript
    // 操作如下，若想開始語音，結合 Utterance....
    speechSynthesisInstance.speak(utterance);
```
