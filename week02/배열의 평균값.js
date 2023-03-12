// 배열의 평균값
function solution(numbers) {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}
