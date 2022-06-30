const dartResult = '1S2D*3T';
// const dartResult = '1D2S#10S';
// const dartResult = '1D2S0T'
// const dartResult = '1S*2T*3S'
// const dartResult = '1D#2S*3S'
// const dartResult = '1T2D3D#'
// const dartResult = '1D2S3T*'

console.log(solution(dartResult));

function solution(dartResult) {
  let answer = 0;
  const temp = [];
  let result = [];
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
      temp.push(10);
      i += 1;
    } else if (!isNaN(dartResult[i])) {
      temp.push(+dartResult[i]);
    } else {
      temp.push(dartResult[i]);
    }
  }
  // temp = [1, 'S', 2, 'D','*', 3, 'T']
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 'S') {
      result.push(Math.pow(temp[i - 1], 1));
    } else if (temp[i] === 'D') {
      result.push(Math.pow(temp[i - 1], 2));
    } else if (temp[i] === 'T') {
      result.push(Math.pow(temp[i - 1], 3));
    } else if (temp[i] === '*') {
      result.push('*');
    } else if (temp[i] === '#') {
      result.push('#');
    }
  }
  // result = [1, 4, '*', 27]
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '#') {
      result[i - 1] = result[i - 1] * -1;
      result[i] = '';
    } else if (result[i] === '*' && i === 1) {
      result[i - 1] = result[i - 1] * 2;
      result[i] = '';
    } else if (result[i] === '*' && typeof result[i - 2] !== 'number') {
      result[i - 1] = result[i - 1] * 2;
      result[i - 3] = result[i - 3] * 2;
      result[i] = '';
    } else if (result[i] === '*') {
      result[i - 1] = result[i - 1] * 2;
      result[i - 2] = result[i - 2] * 2;
      result[i] = '';
    }
  }
  // result = [2, 8, '', 27]
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '') result[i] = 0;
    answer += result[i];
  }
  // result = [2, 8, 0, 27]
  return answer; // 37
  /* regular expressions ver. */
  // const answer = [];
  // const dartSetsets = dartResult.match(/\d{1,2}[SDT][*#]?/g);
  // // "1S2D*3T" -> ["1S","2D*","3T"]
  // // 다트게임은 3번 수행
  // for (let i = 0; i < dartSetsets.length; i++) {
  //   let num = dartSetset[i].match(/\d{1,2}/g);
  //   // num1 [ '1' ]
  //   // num2 [ '2' ]
  //   // num3 [ '3' ]
  //   const bonus = dartSetset[i].match(/[SDT]/g);
  //   // bonus1 [ 'S' ]
  //   // bonus2 [ 'D' ]
  //   // bonus3 [ 'T' ]
  //   const option = dartSetset[i].match(/[*#]/g);
  //   // option1 null
  //   // option2 [ '*' ]
  //   // option3 null
  //   // bonus 문자 종류에 따라 제곱 계산 달리 수행
  //   if (bonus[0] === 'S') {
  //     num = +num;
  //   } else if (bonus[0] == 'D') {
  //     num = Math.pow(num, 2);
  //   } else if (bonus[0] == 'T') {
  //     num = Math.pow(num, 3);
  //   }
  //   if (option !== null && option[0] === '*') {
  //     num *= 2;
  //     if (i !== 0) {
  //       // 숫자가 하나 이상이면 그 전의 숫자도 2배
  //       answer[i - 1] *= 2;
  //     }
  //   } else if (option !== null && option[0] === '#') {
  //     num *= -1;
  //   }
  //   answer.push(num);
  //   // answer1 [ 1 ]
  //   // answer2 [ 2, 8 ]
  //   // answer3 [ 2, 8, 27 ]
  // }
  // return answer.reduce((acc, cur) => acc + cur);

  /* simple ver. with object */
  // const bonus = { S: 1, D: 2, T: 3 },
  //   options = { '*': 2, '#': -1, undefined: 1 };
  // let dartSets = dartResult.match(/\d.?\D/g);
  // // dartSets [ '1S', '2D*', '3T' ]
  // for (let i = 0; i < dartSets.length; i++) {
  //   let split = dartSets[i].match(/(\d{1,})(S|D|T)(\*|#)?/),
  //     score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];
  //   // split1 [ '1S', '1', 'S', undefined, index: 0, input: '1S', groups: undefined ]
  //   // score1 1
  //   // split2 [ '2D*', '2', 'D', '*', index: 0, input: '2D*', groups: undefined ]
  //   // score2 8
  //   // split3 [ '3T', '3', 'T', undefined, index: 0, input: '3T', groups: undefined ]
  //   // score3 27
  //   if (split[3] === '*' && dartSets[i - 1]) dartSets[i - 1] *= options['*'];
  //   dartSets[i] = score;
  //   // dartSets1 [ '1S', '2D*', '3T' ]
  //   // dartSets2 [ 2, '2D*', '3T' ]
  //   // dartSets3 [ 2, 8, '3T' ]
  // }
  // return dartSets.reduce((acc, cur) => acc + cur); // 37
}
