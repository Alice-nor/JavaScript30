let pressedName = []; // 儲存轉換過已輸入之內容
const secretCode = ["Left", "Down", "Up", "Right", "Up", "Left", "Up"]; // 設定好之觸發技能名稱內容

// 檢驗輸入內容是否完全符合 secretCode
function check(arr1, arr2) {
    let flag = true;
    if (arr1.length !== arr2.length) {
        flag = false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                flag = false;
            }
        }
    }
    return flag;
}



window.addEventListener('keyup', (e) => {

    // 不超出密碼之長度，並堆疊換掉第一個元素
    // 這邊是 splice(-8, 0)，也就是刪去陣列中第 0 個數值
    pressedName.splice(0, pressedName.length - secretCode.length + 1);


    // 把輸入之內容轉換成設定好之字串
    switch (e.key) {
        case 'ArrowLeft':
            pressedName.push('Left');
            break;
        case 'ArrowUp':
            pressedName.push('Up');
            break;
        case 'ArrowDown':
            pressedName.push('Down');
            break;
        case 'ArrowRight':
            pressedName.push('Right');
            break;
    }


    // 檢驗輸入內容是否完全符合 secretCode
    if (!check(pressedName, secretCode)) {
        console.log('不相符');
    } else {
        console.log('完全相符');
        // 讓 bingo 影片放出來
        const video = document.querySelector('.bingo');
        video.classList.remove('disappear');

    }




    console.log(pressedName);
    document.querySelector('.inputText').innerHTML = pressedName.join(' ');
})