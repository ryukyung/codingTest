// 배열 두 배 만들기
// 방법1
function solution(numbers) {
  return numbers.map((e) => e * 2);
}

// 방법2
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}
