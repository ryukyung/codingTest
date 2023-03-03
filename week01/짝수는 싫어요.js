// 짝수는 싫어요
// 방법1
function solution(n) {
  const oddList = [];
  for (let i = 1; i <= n; i += 2) {
    oddList.push(i);
  }
  return oddList;
}

// 방법2
function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter((i) => i % 2 !== 0);
}

// 방법3
function solution(n) {
  return Array(n)
    .fill(1)
    .map((v, i) => v + i)
    .filter((v) => v % 2 === 1);
}
