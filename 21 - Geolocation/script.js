const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
    speed.textContent = data.coords.speed; // 取得已行得之距離
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.err(err);
});