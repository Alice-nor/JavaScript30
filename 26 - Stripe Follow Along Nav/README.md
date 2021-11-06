
# 26 - Stripe Follow Along Nav
> 2021/11/06 DONE  
製作會隨著滑鼠移動而改變的選單效果，且移動時原選單不會消失，
成果：[26 - Stripe Follow Along Nav](https://alice-nor.github.io/JavaScript30/25%20-%20Event%20Capture,%20Propagation,%20Bubbling%20and%20Once/) 



## JavaScript 筆記 ##

#### 捕捉與冒泡

程式碼如下。  

```JavaScript
    const divs = document.querySelectorAll('div');

    function logText(e) {
        console.log(this.classList.value);
    }

    document.body.addEventListener('click', logText);
    divs.forEach(div => div.addEventListener('click', logText));
```
