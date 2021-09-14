const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap'); // 攝影的喀嚓聲

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStrean => {
            console.log(localMediaStrean);
            video.srcObject = localMediaStrean;
            video.play();
        })
        .catch(err => {
            console.error(`Oh no!`, err);
        });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16);
}


getVideo();

function animation() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(video, 0, 0, width, height);
    requestAnimationFrame(animation);

}

requestAnimationFrame(animation);