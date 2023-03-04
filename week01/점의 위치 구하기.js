// 점의 위치 구하기
// 방법1
function solution(dot) {
  if (dot[0] > 0 && dot[1] > 0) return 1;
  else if (dot[0] < 0 && dot[1] > 0) return 2;
  else if (dot[0] < 0 && dot[1] < 0) return 3;
  else return 4;
}

// 방법2
function solution(dot) {
  const check = dot[0] * dot[1] > 0;
  return dot[0] > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
