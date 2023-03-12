// 가위 바위 보
// 방법1
function solution(rsp) {
  return [...rsp].map((i) => switchNumber(i)).join('');
}
function switchNumber(num) {
  if (num === '0') {
    return '5';
  } else if (num === '2') {
    return '0';
  } else {
    return '2';
  }
}

// 방법2
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  return (answer = [...rsp].map((v) => arr[v]).join(''));
}
