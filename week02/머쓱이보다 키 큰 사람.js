// 머쓱이보다 키 큰 사람
// 방법1
function solution(array, height) {
  return array.sort((a, b) => a - b).filter((i) => height < i).length;
}

// 방법2
function solution(array, height) {
  let result = 0;
  array.map((arr) => height < arr && result++);

  return result;
}
