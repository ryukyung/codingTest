// 삼각형의 완성조건(1)
// 방법1
function solution(sides) {
  sides.sort();
  return sides[2] < sides[0] + sides[1] ? 1 : 2;
}

// 방법2
function solution(sides) {
  const max = Math.max(...sides);
  const sum = sides.reduce((a, b) => a + b) - max;
  return max < sum ? 1 : 2;
}
