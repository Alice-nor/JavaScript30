
# 01 JavaScript Drum Kit ( 2021/06/18 DONE )
點擊鍵盤上的 A~L 這一排的按鍵，會發出相對應的聲音。

##HTML 筆記

**keyCode** - 鍵盤上的每一個按鍵都有代表他自己的號碼，像是 A 的 keycode 就是65。

( JavaScript30 發起人曾做一個網站讓人們去分辨按鍵的 keycode：http://keycode.info/ ，若用中文輸入甚至會分辨出注音符號，大概其它語言也會出現相對應的符號)

**data-key** - 實際上在沒有這個屬性，但需要添加需要用到的屬性時，若都自己定義名稱實在不是很好的辦法，因此在 HTML5 時出現了 data-* attribte 這個屬性，* 就是可以自己去定義的，因此才會出現 data-key、data-item...等屬性。（但實際上沒有一個真的 data-key、data-item....的標準）

< kbd > - 為行內元素，用來標示鍵盤符號，可以辨別使用者是 input（按下）哪個按鍵。

##JavaScript 筆記

事件監聽時，傳遞事件參數 e ，印出時可以發現 e 中有個 keyCode 的值可以拿來使用，取出按鍵相對應的 keyCode 值，與 HTML 中的 keyCode 吻合時，使用 .play()。

**audio.currentTime = 0** ，會使用這段是因為，一段音樂實際可能要 2-3 秒才結束，但若我一直按同一個按鍵時，它會有所遲緩，這是因為 “它正在執行中”，要等它結束再次並按同一個按鍵時，他才會發揮功用。要解決此辦法，就是直接在要執行 play 之前，把音檔時間拉回到 0，每一次要執行按鍵時，音檔執行時間都在 0，就可以順利再次發出聲音而不會有所延宕了。

**play()** - HTMLMediaElement.play() 會播放對應的媒體。這個方法會返回一個 Promise，成功播放了就是被解決的狀態（resolved），若失敗了，promise 就是被拒絕的（rejected）。

接著要移除 'playing' 此 class，讓動畫效果在一段時間後消失，我原本不看影片時是使用 setTimeout 。

        <code goes here>
        setTimeout(function() {
        key.classList.remove('playing');
        }, 300)


不過發起者是使用 transitionend 這個事件。

**transitionend** - 事件會在 CSS transition 結束後被觸發，它觸發後消失的時間也就跟自身 CSS transition 中的時間有相關了。

PS：全部都做完不知為什麼 class 一直不會自動移除....，找了好久好久，結果發現是把 transform 打成 transition 了啊啊啊啊（昏倒。



