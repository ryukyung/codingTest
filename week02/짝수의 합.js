// 짝수의 합
// 방법1
function solution(n) {
  const array = [];
  for (let i = 0; i <= n; i += 2) {
    array.push(i);
  }
  return array.reduce((a, b) => a + b);
}

// 방법2
function solution(n) {
  const half = Math.floor(n / 2);
  return half * (half + 1);
}
