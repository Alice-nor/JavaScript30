const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some()
// is at least one person 19 or older?
const now = new Date();
const nowYear = now.getFullYear(); // 取得現在是哪一年

const result = people.some(x => (nowYear - x.year) >= 19);
console.log(`是否有人年齡大於 19 歲？ -> ${result}`);

// Array.prototype.every() // is everyone 19 or older?

const result2 = people.every(x => (nowYear - x.year) >= 19);
console.log(`是否所有人年齡都大於 19 歲？ -> ${result2}`);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const result3 = comments.find(function(x) {
    if (x.id == 823423) return x;
});

console.log('印出 ID 為 823423 的物件')
console.log(result3);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(x => x.id == 823423); // 抓到 id 為 823423 的索引值
console.log(index);
comments.splice(index, 1);
console.log('--- 移除 index 1 ---')
console.log(comments);
console.log(comments[1]);