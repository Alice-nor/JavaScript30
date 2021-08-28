const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item')).value; // 抓取輸入的 input 內容
    const item = {
        text,
        done: false
    }

    items.push(item); // 把內容放進陣列中
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset(); // 清空輸入欄位
}

// html 呈現項目
function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}  />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

// 保存 check 物件
function toggleDone(e) {
    if (!e.target.matches('input')) return; // 跳過 lable，只要 input
    console.log(e.target);
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items)); // 更新物件
}



addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);