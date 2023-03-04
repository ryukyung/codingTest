// 세균 증식
// 방법1
function solution(n, t) {
  return n * 2 ** t;
}

// 방법2
function solution(n, t) {
  return n << t;
}
