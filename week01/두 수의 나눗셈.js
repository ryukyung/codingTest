// 두 수의 나눗셈
// 방법1
function solution(num1, num2) {
  return parseInt((num1 / num2) * 1000);
}

// 방법2
function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}
