
# 16 - Mouse Move Shadow
> 2021/30 DONE  
讓文字的陰影會隨著滑鼠的移動而偏移。  
成果：[16 - Mouse Move Shadow](https://alice-nor.github.io/JavaScript30/16%20-%20Mouse%20Move%20Shadow/index.html) 


## HTML 筆記 ##

#### contenteditable

第一次知道這個屬性。這個屬性可決定是否讓使用者可更改內容。  

> HTMLElement.contentEditable 属性用于表明元素是否是可编辑的。可以具有下面的几种值之一：
> * "true" 表明该元素可编辑。
> * "false" 表明该元素不可编辑。
> * "inherit" 表明该元素继承了其父元素的可编辑状态。
> 來源：[contentEditable](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/contentEditable) 

## JavaScript 筆記 ##

#### Destructuring assignment

[Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 是 ES6 有的解構賦值的方式，  
因此以下方式是一樣的意思。

```JavaScript
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    const { offsetWidth: width, offsetHeight: height } = hero;
```

#### 取得與目標物件的距離

這裡有個需要注意的點在於，通常滑鼠遠離物件時距離會變大，  
但若目標有子輩物件，並起我們在子輩上時，  
我們取得的距離反而是子輩實際上的 x 與 y 值，  
更糟糕的是，若我們剛好在子輩的邊角上，他的距離會變成 0 ！  
所以若要正確的取得距離，可以用以下的方法處理這個問題。

```JavaScript
    // 這邊的 this 代表 hero
    // e.target 在子輩外都代表 hero
    // 但若進入到子輩範圍，就會變成子輩，也就是 h1

    // 因此若 this 與 e.target 不相同時，
    // 代表目前在子輩範圍內....
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
```

## 延伸練習 ##




