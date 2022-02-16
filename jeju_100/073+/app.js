/*# 문제73 : 최단 경로 찾기

다음과 같이 노드의 연결 관계가 리스트 형태로 주어집니다. 그 다음 경로를 구할 두 정점이 공백으로 구분되어 주어질 것입니다. 

두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요. 

이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.
*/

/*
입력
A F

출력
2
*/

/*기능 요구사항
 */

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

const start = "A";
const end = "F";

const bfs = (graph, start, end) => {
  let queue = [start];
  let visited = [];
  let count = 0;

  while (queue.length !== 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let n = queue.shift();
      if (n == end) return count;
      //visited 안에 n이 없다면 n을 push
      if (!visited.includes(n)) visited.push(n);

      //graph[n] 안을 탐색해서 visited 안에 포함되지 않는 값이 있다면 배열로 반환
      let sub = graph[n].filter((x) => !visited.includes(x));
      for (let i of sub) queue.push(i); //sub 안의 i들 queue에 push
    }
    count += 1;
  }
};
console.log(bfs(graph, start, end));

/*답안
 */
