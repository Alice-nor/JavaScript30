
# 24 - Sticky Nav
> 2021/10/23 DONE  
製作網站的置頂選單。
成果：[24 - Sticky Nav](https://alice-nor.github.io/JavaScript30/24%20-%20Sticky%20Nav/) 


## CSS 筆記 ##

#### 除了末行文字，其餘行都會左右對齊

`text-align: justify` 算是我第一次使用的屬性，它的特色就是除了末行，  
其他行的文字都會左右對齊。有時因標點符號問題文字的左右兩邊不會對齊，  
這時可以使用 `text-align: justify` 去對齊。

> text-align 的值不會受到「語言方向」的影響。除了末行文字不作用外，其餘行都會左右對齊。  
> 來源：[Text-align - 金魚都能懂的CSS必學屬性](https://ithelp.ithome.com.tw/articles/10243882)


## JavaScript 筆記 ##

#### 會跳躍的內容

這邊有個小細節，當偵測到已經滑動到 nav 時，  
我們會將 nav 定住，但因為定住使用的 `fixed` 實際上是不會佔空間的，  
所以當 nav 變成 `fixed`，nav 以下的其他內容就會佔據他原本的內容，  
所以才會有種 nav 下面的東西會跳躍的感覺.....。  
這時只要把 nav 本身的 `offsetHeight` 加入下方內容的 `padding`，  
就不會再有這種跳躍感了！

```JavaScript
    function fixNav() {
        if (window.scrollY >= topOfNav) {
            document.body.style.paddingTop = nav.offsetHeight + 'px';
            document.body.classList.add('fixed-nav');
        } else {
            document.body.style.paddingTop = 0;
            document.body.classList.remove('fixed-nav')
        }
    }
```
