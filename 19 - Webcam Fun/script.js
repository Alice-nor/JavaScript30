const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap'); // 攝影的喀嚓聲

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStrean => {
            video.srcObject = localMediaStrean;
            video.play();
        })
        .catch(err => {
            console.error(`Oh no!`, err);
        });
}


/*

原作者使用此方法，我改用 requestAnimationFrame

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);
        pixels = redEffect(pixels);
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

*/

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(video, 0, 0, width, height);
    // 把畫素拉出來
    let pixels = ctx.getImageData(0, 0, width, height);
    // 套濾鏡
    // pixels = redEffect(pixels);
    // pixels = rgbSplit(pixels);
    pixels = greenScreen(pixels);
    // 重組畫素
    ctx.putImageData(pixels, 0, 0);
    requestAnimationFrame(paintToCanvas);
}



function takePhoto() {
    // 製作拍攝時會產生喀嚓聲
    // 把聲音的時間軸拉到 0 秒
    snap.currentTime = 0;
    snap.play();

    // 從 canvas 取得資料
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'download');
    link.innerHTML = `<img src="${data}" alt="download pic">`;
    strip.insertBefore(link, strip.firstChild);

};

/* 紅色濾鏡效果 */
function redEffect(pixels) {
    // 歷遍 pixels 中的資料陣列
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] - 100; // RED
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
    return pixels;
}

/* 色彩分離效果 */
function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // RED
        pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
        pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
}

/* 綠幕效果 */
function greenScreen(pixels) {
    const levels = {};
    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    });

    for (i = 0; i < pixels.data.length; i = i + 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (red >= levels.rmin &&
            green >= levels.gmin &&
            blue <= levels.bmin &&
            red <= levels.rmax &&
            green >= levels.gmax &&
            blue <= levels.bmax) {
            pixels.data[i + 3] = 0;
        }
    }
    return pixels;
}


getVideo();
video.addEventListener('canplay', paintToCanvas);