
# 14 - JavaScript References VS Copying
( 2021/8/23 DONE ) 理解陣列與物件的引用（reference）與複製（copy）。理解傳值不傳址，以及傳址不傳值，以及深入複製的方式。
成果：[14 - JavaScript References VS Copying](https://alice-nor.github.io/JavaScript30/13%20-%20Slide%20in%20on%20Scroll/index.html) 


## JavaScript 筆記 ##

**array 陣列的 copy 方法** -

1. [Array.prototype.slice()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) ，此方法會回傳一個新的陣列，為原陣列選擇之 begin 至 end（不包含 end）部分的淺拷貝。

```JavaScript
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    const team2 = players.slice();
    // 這邊作者用了小技巧，
    // 若不給 begin 與 end 值的話，會整個陣列都拷貝
```

2. [Array.prototype.concat()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) ，此方法不會改變現有的陣列，回傳的是一個新的陣列。

```JavaScript
    const team3 = [].concat(players);
    // 這邊作者用了一個小技巧，
    // 讓空陣列與 players 合併，就會是新的陣列
    // 而不是原本指向 player 的陣列了
```

3. [Spread syntax (...)](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_syntax) ，為展開運算子，會把可迭代之陣列或字串展開成 0 到多個參數。推薦閱讀：[Rest 参数与 Spread 语法](https://zh.javascript.info/rest-parameters-spread)。

```JavaScript
    const team4 = [...players];
    // 讓陣列裡放入 player 的展開運算子，
    // 也是可以創造新陣列的方式
```

4. [Array.from()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/from) ，從陣列或可迭代物件建立一個新的陣列實體。推薦閱讀：[Iterable object（可迭代对象）](https://zh.javascript.info/iterable)。作者也有分享他比較喜歡 spread（方法3） 與這個 Array.from 的方法。

```JavaScript
    const team5 = Array.from(players);
```

**object 物件的 copy 方法** -

1. [Object.assign()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) ，用來複製一個或多個一個或多個物件自身所有可數的屬性到另一個目標物件。回傳的值為該目標物件。

```JavaScript
    const person = {
    name: 'Wes Bos',
    age: 80
    };

    const cap2 = Object.assign({}, person, { number: 99, age: 12 });
    // 這邊作者也是用了小技巧，讓目標物間為空物件，
    // 再把 person 物件塞進去後，並給予 number 塞入新物件中
    // 給予的 age 也會蓋過原本 person 裡頭的 age
```

2. [Spread syntax (...)](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_syntax) ，與陣列的使用操作是一樣的，只是有個需要注意的地方是，{...} 在這邊只深拷貝第一層的內容，因此若修改了第二層的內容，原本物件第二層的內容會一起被改變！

```JavaScript
    const dev = Object.assign({} ,wes);
```

3. [JSON.parse()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) & [JSON.stringify()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 。使用 JSON.stringify() 把物件變成字串之後，再用 JSON.parse() 把字串變回物件。

```JavaScript
    const dev2 = JSON.parse(JSON.stringify(wes));
```