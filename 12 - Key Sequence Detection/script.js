const pressed = []; // 儲存已輸入之內容
const secretCode = 'unicorn'; // 設定好之技能名稱


window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);

    // 不超出密碼之長度，並堆疊換掉第一個元素
    // 這邊是 splice(-8, 0)，也就是刪去陣列中第 0 個數值
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if (pressed.join('').includes(secretCode)) {
        console.log('DING DING!');
        cornify_add();
    }
    console.log(pressed);
    document.querySelector('.inputText').innerHTML = pressed.join('');
})