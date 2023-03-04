// 문자 반복 출력하기
// 방법1
function solution(my_string, n) {
  return [...my_string].map((i) => i.repeat(n)).join('');
}

// 방법2
function solution(my_string, n) {
  return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '');
}
