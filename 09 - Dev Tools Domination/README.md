
# 09 - Dev Tools Domination
( 2021/8/09 DONE ) Dev Tool 的操作與一些好用的 console 方法
成果：[09 - Dev Tools Domination](https://alice-nor.github.io/JavaScript30/08%20-%20Fun%20with%20HTML5%20Canvas/index.html) 

## JavaScript 筆記 ##

除了平常使用的 console.log 方法外，這邊的練習給了其他的 console 方法。可搭配 iT邦幫忙 的這篇服用： [瀏覽器console.log()外的一些其他用法](https://ithelp.ithome.com.tw/articles/10209871)


**Dev Tool** - 

要如何知道物件背後是如何在瀏覽器中運作的，像是此篇點選一段文字，它會發生變化。可以用 Dev Tool 看！在 Elements -> 對著物件點選右鍵 -> break on -> arrribute modification 。

**Interpolated** - 

這邊的 Interpolated 指的是[字串格式化](https://openhome.cc/Gossip/Python/StringFormat.html) （雖然此文是 python 的介紹，但用法是差不多的，所以也可以看此文），但因為後來 JavaScript 有了 [Interpolated 樣板字面值](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals) 的使用方法，可直接使用 `` ，是更直覺也更直觀的方法，所以現在在 JavaScript 應該是比較少使用字串格式化的。

        console.log('Hello I am a %s string!', '💩');
        // %s 是使用字串方式輸出，會從後方找到參數帶入
        // 因此會印出 Hello I am a 💩 string!'

        console.log('%c I am some great text','
        font-size:50px;
        background:red;
        text-shadow: 10px 10px 0 blue');
        // %c 比較不同的是，他對應的是 CSS 的格式
        // %c 要擺放在最前面，並會抓取後方的格式套用


**console.assert()** - 

[Console.assert()](https://developer.mozilla.org/zh-TW/docs/Web/API/console/assert) 是在印出前會做檢查，若第一個參數為 true 將不會發生作用，但若為 false，就會印出後面的物件。


**console.dir()** -

[Console.dir()](https://developer.mozilla.org/en-US/docs/Web/API/console/dir) 是在把印出的東西做出整理。這個方法很方便去觀察物件內的屬性與方法等等。

**console.group()** -

[Console.group()](https://developer.mozilla.org/zh-CN/docs/Web/API/console/group) 是與 groupEnd 搭配使用的。在 group 之後與 groupEnd 之前的東西會做分組。

**callback** -

印出來後要特別注意到，因為 fetch 是連接 api，是 callback function，所以在其他非 callback function 未執行完成前，它是不會執行的。所以這邊 dogs 的 console.table 才會先印出，接著才是 fetch。
