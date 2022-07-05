const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];
// const n = 5
// const lost = [2,4]
// const reserve = [3]
// const n = 3
// const lost = [3]
// const reserve = [1]

console.log(solution(n, lost, reserve));

function solution(n, lost, reserve) {
  /* My Solution */
  // let answer = n - lost.length
  // lost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b)
  // reserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b)
  // for (let i = 0 ; i < reserve.length; i++) {
  //     for (let j = 0 ; j < lost.length; j++) {
  //         if (reserve[i] === lost[j] - 1 || reserve[i] === lost[j] + 1) {
  //             reserve.splice(i, i+1)
  //             lost.splice(j, j+1)
  //             answer++
  //         }
  //     }
  // }
  // return answer
  /* Filter Ver. */
  // let realLost = lost
  //   .filter((el) => !reserve.includes(el))
  //   .sort((a, b) => a - b);
  // let realReserve = reserve
  //   .filter((el) => !lost.includes(el))
  //   .sort((a, b) => a - b);
  // return (
  //   n -
  //   realLost.filter((lostEl) => {
  //     let abs = realReserve.find(
  //       (reserveEl) => Math.abs(lostEl - reserveEl) === 1
  //     );
  //     if (!abs) return true;
  //     realReserve = realReserve.filter((reserveEl) => reserveEl !== abs);
  //   }).length
  // );
  /* Plus & Minus Ver. */
  //   // 모든 student가 체육복을 1개씩 갖고 있는 것으로 가정한 배열.
  //   var students = new Array(n).fill(1);
  //   // 체육복을 잃어버린 student의 체육복 개수를 -1 감소
  // lost.forEach(l => students[l - 1]--);
  //   // 여분 체육복이 있는 student의 체육복 개수를 +1 증가
  // reserve.forEach(r => students[r - 1]++);
  //   /*
  // 여분 체육복이 있는 student(체육복이 2개 이상인 student)가 체육복이 없는 앞, 뒤 student에게 체육복을 준다.
  //   이 때 앞, 뒤 student 둘 다 체육복이 없는 경우 앞의 student에게 체육복을 준다.
  // (배열을 앞->뒤 순서로 순회하며 체육복을 나눠주기 때문에, 앞의 student에게 우선적으로 체육복을 나눠주어야
  // 가장 많은 student에게 체육복을 나눠줄 수 있음.) => 선택의 순간마다 최적의 알고리즘 적용 (Greedy)
  // */
  // students.forEach((_, idx, arr) => {
  //     if (arr[idx] > 1 && arr[idx - 1] === 0) {
  //         arr[idx]--;
  //         arr[idx - 1]++;
  //     } else if (arr[idx] > 1 && arr[idx + 1] === 0) {
  //         arr[idx]--;
  //         arr[idx + 1]++;
  //     }
  // })
  // console.log(students)
  // return students.filter(v => v > 0).length;
}
