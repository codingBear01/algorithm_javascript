// "/dev/stdin"

let input = require("fs").readFileSync("./input.txt").toString().toLowerCase();

let str = input.toUpperCase();
let Alphbet = [];
let arr = [];

for (let i = 65; i <= 90; i++) {
  Alphbet.push(String.fromCharCode(i));
}

for (let i = 0; i < 26; i++) {
  arr[i] = 0;
}

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (str[i] === Alphbet[j]) {
      arr[j]++;
    }
  }
}

let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (Math.max.apply(null, arr) === arr[i]) {
    count++;
  }
}

if (count > 1) {
  console.log("?");
} else if (count === 1) {
  console.log(Alphbet[arr.indexOf(Math.max.apply(null, arr))]);
}
