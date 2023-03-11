// 대문자와 소문자
// 방법1
function solution(my_string) {
  return [...my_string]
    .map((i) => (i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()))
    .join('');
}

// 방법2
function solution(my_string) {
  var answer = '';
  for (let c of my_string)
    answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}
