// 看瀏覽器的支援性而更改方法
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;


let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.textContent = transcript;
    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }


    if (transcript.includes('today\'s weather')) {
        console.log('🌞⛅⛅🌦🌦🌧🌧🌩🌩');
    }
    console.log(transcript);
});

recognition.start();
recognition.addEventListener('end', recognition.start);