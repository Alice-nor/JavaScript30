const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0; // 儲存滑鼠開始時的 X 值
let lastY = 0; // 儲存滑鼠開始時的 Y 值
let hue = 0; // 儲存顏色的色相值
let direction = true;

function draw(e) {
    if (!isDrawing) return; // 當沒按下滑鼠時停止這個 function
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // lastx = e.offsetX; lastY = e.offsetY;
    // 以上可寫成下面的精簡版：
    [lastX, lastY] = [e.offsetX, e.offsetY];
    ctx.moveTo(lastX, lastY); // 記錄從哪邊開始畫圖
    ctx.lineTo(lastX, lastY); // 紀錄去了哪邊，在哪結束
    ctx.stroke();
    hue++;

    // 雖然並不影響呈現方式，但可以讓 hue 值不會無限變大
    if (hue >= 360) {
        hue = 0;
    }


    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction; // direction 變成 false
    }

    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }

}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    // 以防滑鼠還是從 x = 0, y = 0 的地方開始畫起
    // 也以防滑鼠從上次結束的同樣的地點畫起
    // 但我自己實際操作是，不用這一行效果是一樣的
    // 或許把原本在 draw 裡的下面這一行一到 moveTo 上面就可以了
    [lastX, lastY] = [e.offsetX, e.offsetY];
}); // 當按下滑鼠時，讓 isDrawing 變成 true

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => isDrawing = false); // 當放開滑鼠時，讓 isDrawing 變成 false