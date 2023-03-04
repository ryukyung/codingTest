// 문자열 안에 문자열
// 방법1
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// 방법2
function solution(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2;
}
