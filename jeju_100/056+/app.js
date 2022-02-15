/*# 문제56 : 객체의 함수 응용

다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.
*/

/*
입력
출력
*/
const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const w = nationWidth["korea"]; //변수 w에 korea의 width값 담기
delete nationWidth["korea"]; //객체에서 korea 제거

const entry = Object.entries(nationWidth); //변수 entry에 객체 key&values 배열로 전부 담기
const values = Object.values(nationWidth); //변수 values에 객체 values만 배열로 전부 담기
//gap에 value 중 최댓값 저장
let gap = Math.max.apply(null, values);
//최근접 key&value 담을 empty arr 선언
let item = [];
//entry를 i로 하나하나 체크
for (let i in entry) {
  //gap이 entry value - w 보다 크다면
  if (gap > Math.abs(entry[i][1] - w)) {
    //gap을 해당 entry value - w으로 치환
    gap = Math.abs(entry[i][1] - w);
    //item에 해당 entry값 담기
    item = entry[i];
  }
}
//반복문을 거치면 item [England, 242900]

console.log(item[0], item[1] - w);

/*답안
 */
