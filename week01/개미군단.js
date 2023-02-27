// 개미군단
// 방법1
function solution(hp) {
  let count = 0;
  if (parseInt(hp / 5) >= 1) {
    count += parseInt(hp / 5);
    hp %= 5;
  }
  if (parseInt(hp / 3) >= 1) {
    count += parseInt(hp / 3);
    hp %= 3;
  }
  count += hp;
  return count;
}
// 방법2
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}
