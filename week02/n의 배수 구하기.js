// n의 배수 구하기
function solution(n, numlist) {
  return numlist.filter((i) => i % n === 0);
}
