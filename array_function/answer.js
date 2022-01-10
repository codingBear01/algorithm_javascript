let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

// map 문제
// 모든 이름을 대문자로 바꾸어서 출력하시오.
let mapUpperCase = names.map((item) => {
  return item.toUpperCase();
});
console.log(`map Q1: ${mapUpperCase}`);

// 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
let mapFirstName = names.map((item) => {
  return item.split(" ")[0];
});
console.log(`map Q2: ${mapFirstName}`);

// 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
let mapInitial = names.map((item) => {
  let splitName = item.split(" ");
  let initial = "";
  splitName.forEach((nameItem) => (initial += nameItem[0]));
  return initial;
});
console.log(`map Q3: ${mapInitial}`);

// filter 문제
// 이름에 a를 포함한 사람들을 출력하시오.
let filterA = names.filter((item) => {
  return item.includes("a");
});
console.log(`filter Q1: ${filterA}`);

// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
let filterDupName = names.filter((item) => {
  let splitName = item.split("");
  return splitName.some((letter, index) => letter == splitName[index + 1]);
});
console.log(`filter Q2: ${filterDupName}`);

// some 문제
// 전체 이름의 길이가 20자 이상인 사람이 있는가?
console.log(`some Q1: ${names.some((item) => item.length >= 20)}`);

// 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
let someIncludesP = names.some((item) => {
  let splitName = item.split(" ");
  splitName.pop();

  return splitName.some((eachName) =>
    eachName.toLocaleLowerCase().includes("p")
  );
});
console.log(`some Q2: ${someIncludesP}`);

// every 문제
// 모두의 전체 이름의 길이가 20자 이상인가?
let everyNameOver20 = names.every((item) => {
  return item.length >= 20;
});
console.log(`every Q1: ${everyNameOver20}`);

// 모두의 이름에 a 가 포함되어 있는가?
let everyIncludesA = names.every((item) => {
  return item.includes("a");
});
console.log(`every Q2: ${everyIncludesA}`);

// find 문제
// 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
let findNameOver20 = names.find((item) => {
  return item.length >= 20;
});
console.log(`find Q1: ${findNameOver20}`);

// 미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
let findMiddleName = names.find((item) => {
  let middleN = item.split(" ");
  return middleN.length > 2;
});
console.log(`find Q2: ${findMiddleName}`);

// findIndex 문제
// 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
let findIndexNameOver20 = names.findIndex((item) => {
  return item.length >= 20;
});
console.log(`findIndex Q1: ${findIndexNameOver20}`);

// 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
let findIndexMiddleName = names.findIndex((item) => {
  let middleN = item.split(" ");
  return middleN.length > 2;
});
console.log(`findIndex Q2: ${findIndexMiddleName}`);
