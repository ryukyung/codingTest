// 제곱수 판별하기
// 방법1
function solution(n) {
  return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? 1 : 2;
}

// 방법2
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
