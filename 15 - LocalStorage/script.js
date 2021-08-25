const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = []; // 儲存項目之陣列

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item')).value; // 抓取輸入的 input 內容
    const item = {
        text,
        done: false
    }

    console.log(item);
}





addItems.addEventListener('submit', addItem);