// 문자열 정렬하기(1)
// 방법1
function solution(my_string) {
  return my_string
    .split('')
    .map(Number)
    .filter((index) => !isNaN(index))
    .sort();
}

// 방법2
function solution(my_string) {
  return my_string
    .split('')
    .filter((v) => !isNaN(v))
    .map((v) => v * 1)
    .sort((a, b) => a - b);
}
