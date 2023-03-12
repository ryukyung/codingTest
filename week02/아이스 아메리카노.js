// 아이스 아메리카노
// 방법1
function solution(money) {
  let count = 0;
  while (money >= 5500) {
    money -= 5500;
    count += 1;
  }
  return [count, money];
}

// 방법2
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
