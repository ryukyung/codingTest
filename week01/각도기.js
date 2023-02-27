// 각도기
// 방법1
function solution(angle) {
  if (angle > 0 && angle < 90) return 1;
  else if (angle === 90) return 2;
  else if (angle >= 90 && angle < 180) return 3;
  else return 4;
}

// 방법2
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}

// 방법3
function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}
