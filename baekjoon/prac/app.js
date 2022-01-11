const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const alphabets = input.split("");

let minTime = alphabets.length;

for (let i = 0; i < alphabets.length; i++) {
  const ascii = alphabets[i].charCodeAt();

  if (ascii <= "C".charCodeAt()) {
    minTime += 2;
  } else if (ascii <= "F".charCodeAt()) {
    minTime += 3;
  } else if (ascii <= "I".charCodeAt()) {
    minTime += 4;
  } else if (ascii <= "L".charCodeAt()) {
    minTime += 5;
  } else if (ascii <= "O".charCodeAt()) {
    minTime += 6;
  } else if (ascii <= "S".charCodeAt()) {
    minTime += 7;
  } else if (ascii <= "V".charCodeAt()) {
    minTime += 8;
  } else if (ascii <= "Z".charCodeAt()) {
    minTime += 9;
  }
}

console.log(minTime);
