// 중복된 숫자 개수
function solution(array, n) {
  return array.filter((point) => point === n).length;
}
