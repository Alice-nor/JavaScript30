// 作者提供的資料
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []; // 保存資料

fetch(endpoint)
    .then(blob => blob.json()) // blob 有 json 方法
    .then(data => cities.push(...data)); // 成功獲取資料  


//找出建議的匹配
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // 尋找使用者輸入之文字是否與資料上某些地方符合
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex); // 城市或州符合都可以
    })
}

// 讓建議匹配選項呈現出來
function displayMatches() {
    // 每打出一個字母，就會遍尋一次 cities
    const matchArrays = findMatches(this.value, cities);

    const html = matchArrays.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${place.population}</span>
        </li>
        `
    }).sort().join('');
    // 這邊用 join 是因為 matchArrays.map 會回傳陣列
    // 但我們實際要的是讓陣列變成字串，好方便呈現資料
    suggestions.innerHTML = html;
}


const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);