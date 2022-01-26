const fs = require("fs");
const { join } = require("path/posix");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(+input[0], input.slice(1));

function solution(N, arr) {
  let ans = 0;
  for (let i = 0; i < N; i++) {
    let nowS = arr[i];

    let obj = {};

    let nowCntC = nowS[0];
    obj[nowCntC] = true;

    let isGroupWord = true;
    for (let j = 1; j < nowS.length; j++) {
      if (nowCntC !== nowS[j]) {
        // arr key값에 string이 아직 등장하지 않았는데?
        if (obj[nowS[j]]) {
          //obj 키값이랑 string이랑 동일하다면?중복이라는 뜻!
          isGroupWord = false;
        } else {
          nowCntC = nowS[j];
          obj[nowS[j]] = true;
        }
      }
    }
    if (isGroupWord) {
      ans++;
    }
  }
  console.log(ans);
}

// const testNum = +input[0];
// let cntGroupWord = 0;

// solution(testNum, input);

// function solution(N, words) {
//   for (let i = 1; i <= N; i++) {
//     const word = words[i];
//     const letterArr = [];
//     let isGroupWord = true;

//     for (let j = 0; j < word.length; j++) {
//       if (letterArr.indexOf(word[j]) === -1) {
//         letterArr.push(word[j]);
//       } else {
//         if (letterArr.indexOf(word[j]) !== letterArr.length - 1) {
//           isGroupWord = false;
//           break;
//         }
//       }
//     }

//     if (isGroupWord) {
//       cntGroupWord += 1;
//     }
//     console.log(letterArr);
//   }
//   console.log(cntGroupWord);
// }
