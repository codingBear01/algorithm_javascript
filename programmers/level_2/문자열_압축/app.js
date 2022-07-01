// const input = "aabbaccc"
const input = 'ababcdcdababcdcd';
// const input = "abcabcdede"
// const input = "abcabcabcabcdededededede"
// const input = "xababcdcdababcdcd"

console.log(solution(input));

function solution(s) {
  if (s.length === 1) return 1;

  const answer = [];

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let compCnts = 1;
    let string = '';
    for (let j = 0; j < s.length; j += i) {
      const current = s.substr(j, i);
      const next = s.substr(j + i, i);
      if (current === next) {
        compCnts++;
      } else {
        string += (compCnts > 1 ? compCnts : '') + current;
        compCnts = 1;
      }
    }
    answer.push(string.length);
  }
  return Math.min(...answer);
}

/*
문자열 길이 1인 경우 1을 return(압축 작업 불가능하므로)

최대 탐색 횟수는 s.length / 2 이다.

이중 for문으로 구성
안쪽 for문에는 substr() 메서드 활용하기 위해 인덱스 j 처리를 해줘야 함

현재값 = j번째에서 i만큼 잘라냄
다음값 = j + i번째에서(현재값의 바로 뒤부터) i만큼 잘라냄

현재값과 다음값이 같다면?
    압축 횟수를 1회 증가
아니라면?
    압축 횟수가 1보다 크다면?
        문자열에 압축 횟수 및 현재값 더하기
    아니라면?
        문자열에 현재값만 더하기
    압축 횟수 초기화(탐색 중이던 값의 압축 횟수 및 문자 붙여넣기 작업 끝났으므로 새로운 압축 작업을 위해)
    
답안 배열에 문자열 길이 push

답안 배열의 문자열 길이 중 가장 짧은 값을 return

// methods
substr()
substring()
slice()
*/
