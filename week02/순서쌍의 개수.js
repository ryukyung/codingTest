// 순서쌍의 개수
// 방법1
function solution(n) {
  let result = 0;
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) result += 2;
  }
  if (n % Math.sqrt(n) === 0) result += 1;
  return result;
}

// 방법2
function solution(n) {
  const answer = [];
  for (let i = 0; i < n + 1; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer.length;
}
