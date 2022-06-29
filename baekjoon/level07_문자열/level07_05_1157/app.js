const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let nowChar = str[i].toUpperCase();

    if (obj[nowChar]) {
      obj[nowChar]++;
    } else {
      obj[nowChar] = 1;
    }
  }

  let maxVal = -1;
  let maxChar = "";
  let isDuplicated = false;

  for (const el in obj) {
    if (obj[el] > maxVal) {
      maxVal = obj[el];
      maxChar = el;
      isDuplicated = false;
    } else if (obj[el] === maxVal) {
      isDuplicated = true;
    }
  }

  if (isDuplicated) {
    console.log("?");
  } else {
    console.log(maxChar);
  }
}

/*const testStr = input.toUpperCase();

solution(testStr);

function solution(str) {
  let alpArr = [];
  let tempArr = Array(26).fill(0);

  for (let i = 65; i <= 90; i++) {
    alpArr.push(String.fromCharCode(i));
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < tempArr.length; j++) {
      if (str[i] === alpArr[j]) {
        tempArr[j]++;
      }
    }
  }

  let cnt = 0;

  for (let i = 0; i < tempArr.length; i++) {
    if (Math.max.apply(null, tempArr) === tempArr[i]) {
      cnt++;
    }
  }

  if (cnt > 1) {
    console.log("?");
  } else if (cnt === 1) {
    console.log(alpArr[tempArr.indexOf(Math.max.apply(null, tempArr))]);
  }
}*/
