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
  // 여별 체육복을 가진 학생과 체육복을 도난 당한 학생 모두에 속하는 사람을 제외
  // const realLost = lost
  //   .filter((l) => !reserve.includes(l))
  //   .sort((a, b) => a - b);
  // let realReserve = reserve
  //   .filter((r) => !lost.includes(r))
  //   .sort((a, b) => a - b);
  // // 체육 수업을 들을 수 있는 학생 수 = 전체 학생 수 - 체육복 없는 학생 중 체육복을 빌리지 못하는 학생 수
  // return (
  //   n -
  //   realLost.filter((l) => {
  //     // 여별 체육복을 가진 학생 중 도난 당한 학생과 체격 차이가 1인 학생
  //     const lendStudent = realReserve.find((r) => {
  //       return Math.abs(l - r) === 1;
  //     });
  //     // 빌려주는 학생과 빌리는 학생의 체격 차이가 1이 아닌 경우 그대로 realLost에 남김
  //     if (!lendStudent) return true;
  //     // 여벌 체육복은 한 학생에게만 빌려줄 수 있으므로 이미 체육복을 빌려준 학생은 다음 계산에서는 제외
  //     realReserve = realReserve.filter((r) => r !== lendStudent);
  //   }).length
  // );
  /* New Array Ver.*/
  // // 모든 학생이 체육복을 1개씩 갖고 있다고 가정
  // let students = new Array(n).fill(1);
  // // 체육복을 잃어버린 학생의 체육복 개수를 --
  // lost.forEach((l) => students[l - 1]--);
  // // 체육복 여벌이 있는 학생의 체육복 개수 ++
  // reserve.forEach((r) => students[r - 1]++);
  // // students 배열을 순회하면서 여분 체육복이 있는 학생이 체육복이 없는 앞, 뒤의 학생에게 자신의 체육복을 나눠준다. 이때 앞 -> 뒤로 순회하기 때문에 앞에 있는 학생부터 나눠준다.
  // students.forEach((_, i, arr) => {
  //   if (arr[i] > 1 && arr[i - 1] === 0) {
  //     arr[i]--;
  //     arr[i - 1]++;
  //   } else if (arr[i] > 1 && arr[i + 1] === 0) {
  //     arr[i]--;
  //     arr[i + 1]++;
  //   }
  // });
  // return students.filter((v) => v > 0).length;
  let answer = n - lost.length;
  let realLost = lost.filter((l) => !reserve.includes(l)).sort((a, b) => a - b);
  let realReserve = reserve
    .filter((r) => !lost.includes(r))
    .sort((a, b) => a - b);
  // 체육 수업 들을 수 있는 학생 수 = 전체 학생 수 - 체육복 갖고 있지 않은 학생 수
  answer += lost.length - realLost.length;
  // 여벌의 체육복을 가진 학생 중 체육복을 도난 당한 학생이 있다면 realReserve 배열에서 제외하고 answer ++
  realLost.forEach((l) => {
    if (realReserve.length === 0) return;
    if (realReserve.includes(l - 1)) {
      realReserve = realReserve.filter((r) => r !== l - 1);
      answer++;
    } else if (realReserve.includes(l + 1)) {
      realReserve = realReserve.filter((r) => r !== l + 1);
      answer++;
    }
  });
  // return answer;
}
