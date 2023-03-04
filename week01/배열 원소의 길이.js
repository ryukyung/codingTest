// 배열 원소의 길이
// 방법1
function solution(strlist) {
  let result = [];
  strlist.forEach((index) => {
    result.push(index.length);
  });
  return result;
}
// 방법2
function solution(strlist) {
  return strlist.map((e) => e.length);
}
