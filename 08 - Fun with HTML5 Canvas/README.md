
# 08 - Fun with HTML5 Canvas
( 2021/7/11 DONE ) 操作 HTML5 的 Canvas。
成果：[08 - Fun with HTML5 Canvas](https://alice-nor.github.io/JavaScript30/08%20-%20Fun%20with%20HTML5%20Canvas/index.html) 

## JavaScript 筆記 ##

**設定 Canvas** - 

canvas 的使用方法可以看看這篇：[學習HTML5 Canvas 這一篇文章就夠了](https://blog.csdn.net/u012468376/article/details/73350998) ，或是到 MDN 看看每一篇使用方法。

        // 在 HTML5，預設為寬、高為 800px
        <canvas id="draw" width="800" height="800"></canvas>

        // 在 JavaScript 檔案中，設定 canvas 寬、高為整個 window 的 inner 大小
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.strokeStyle = '#BADA55'; // 設定圖形輪廓的顏色
        ctx.lineJoin = 'round'; // 設定線條與線條接合處的樣式
        ctx.lineCap = 'round'; // 設定線條末端的樣式

**捕捉按下滑鼠與放下滑鼠的動作** - 

作者在這邊先宣告 isDrawing，這是在描述：『現在是不是在畫畫中。』當 isDrawing 為 true 時，代表滑鼠正在移動：也就是正在畫畫中，false 則與之相反，滑鼠放開時，或不在畫布區域時：代表著沒有在畫畫。

要如何捕捉 isDrawing，要監聽滑鼠現在是 mousedown（按下滑鼠）、mousemove（滑鼠移動中）、 mouseup（放開滑鼠），還有 mouseout（滑鼠離開）。

1. mousedown（按下滑鼠）時 -> isDrawing 為 true

2. mousemove（滑鼠移動中） -> 實行 draw 這個 function（ isDrawing 為 true 或 false 時要畫畫還是不畫畫，寫在這個方法裡）

3. mouseup（放開滑鼠）時 -> isDrawing 為 false

4. mouseout（滑鼠離開）時 -> isDrawing 也為 false

**HSL** - 

作者有提到 HSL，H 代表的是色相，S 代表的是色彩的飽和度，L 代表的是亮度。作者在這邊只更改 H 值，也就是色相值，所以顏色的飽和度與亮度都是相同的，只有 H 值在變化。

有趣的一點作者有提到，紅色是屬於 H = 0，，而當 H 360度時，又會回到 H 值為 0 ，也就是紅色的部分，所以可以利用這個方式讓 H++，但 H 達到最大值 360 時，又會回到紅色。輕易的可以以此來循環顏色的變化。

**一直變化的線條粗細** - 

        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
                direction != direction;
        } // 控制 direction

        if (direction) {
                // direction 持續增長到 100
                ctx.lineWidth++;
        } else {
                // direction 持續減少到 1
                ctx.lineWidth--;
        }

這邊的程式碼在控制 direction，讓 direction 控制線條的粗細。一開始 direction 為 true，lineWidth 假設為 50，則 true，lineWidth 會持續增加到 100，並開始持續減少到 1，接著再一直增加到 100......是這樣的 loop。

**globalCompositeOperation** - 

作者在這邊提供一個很酷的東西：[globalCompositeOperation](https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API/Tutorial/Compositing) 。他是一個合成的效果，有好幾種不同的方法可以選擇。實在是非常有趣，很多好玩的方法可以使用！
