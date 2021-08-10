// 所有項目
const checkboxs = document.querySelectorAll('.inbox input[type="checkbox"]');
// 歷遍所有選項去檢查是否有選項已被點選
checkboxs.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

let lastChecked; // 記錄下最後被選取的選項

function handleCheck(e) {
    // 確認是否有按下 shift 鍵
    // 並且 checkbox 是正在選取中的！
    // (因為若把點選取消，click 也會被觸發，但這不是我們想要的)
    let inBetween = false; // 給予中間的選項變數
    if (e.shiftKey && this.checked) {
        // 歷遍所有選項
        checkboxs.forEach(checkbox => {
            console.log(checkbox);

            // 不管是從上至下或下至上的 shift 選取
            // 找到從上至下第一個與最後一個項目
            // 並把中間的項目的 inBetween 全部變成 true
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them inbetween');
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        })

    }
    lastChecked = this;

}