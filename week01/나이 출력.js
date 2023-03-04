// 나이 출력
// 방법1
function solution(age) {
  return 2022 - age + 1;
}

// 방법2
function solution(age) {
  return new Date().getFullYear() - age + 1;
}
