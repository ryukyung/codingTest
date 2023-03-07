// 편지
// 방법1
function solution(message) {
  return [...message].length * 2;
}

// 방법2
function solution(message) {
  return message.split('').length * 2;
}
