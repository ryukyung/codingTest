// 자릿수 더하기
function solution(n) {
  return String(n)
    .split('')
    .reduce((acc, cur) => acc + cur * 1, 0);
}
