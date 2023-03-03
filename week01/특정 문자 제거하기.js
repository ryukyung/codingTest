// 특정 문자 제거하기
// 방법1
function solution(my_string, letter) {
  const resultList = [];
  for (let i = 0; i <= my_string.length; i++) {
    if (my_string[i] !== letter) {
      resultList.push(my_string[i]);
    }
  }
  return resultList.join('');
}

// 방법2
function solution(my_string, letter) {
  return my_string.split(letter).join('');
}

// 방법3
function solution(my_string, letter) {
  return my_string.replaceAll(letter, '');
}
