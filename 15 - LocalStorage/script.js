const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const checkAllbtn = document.querySelector('.checkAll');
const clearAllbtn = document.querySelector('.clear');

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value; // 抓取輸入的 input 內容
    const item = {
        text,
        done: false
    }
    items.push(item); // 把內容放進陣列中
    console.log(items);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
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
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items)); // 更新物件
    populateList(items, itemsList);
}

// 全部選取
function CheckAll() {
    items.map(item => {
        item.done = true;

    })
    localStorage.setItem('items', JSON.stringify(items)); // 更新物件
    populateList(items, itemsList);
}

// 全部清除
function clearAll() {
    localStorage.removeItem('items', '');

    function refresh() {
        window.location.reload();
    }
    setTimeout(refresh, 1000); // 一秒後重整
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
checkAllbtn.addEventListener('click', CheckAll);
clearAllbtn.addEventListener('click', clearAll);
populateList(items, itemsList);