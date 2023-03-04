// 양꼬치
// 방법1
function solution(n, k) {
  return 12000 * n + 2000 * (k - Math.floor(n / 10));
}

// 방법2
function solution(n, k) {
  return 12000 * n + 2000 * (k - parseInt(n / 10));
}
