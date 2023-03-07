// 배열 회전시키기
function solution(numbers, direction) {
  if (direction === 'right') {
    const temp = numbers[numbers.length - 1];
    numbers.pop();
    numbers.unshift(temp);
  } else {
    const temp = numbers[0];
    numbers.shift();
    numbers.push(temp);
  }
  return numbers;
}

function solution(numbers, direction) {
  if (direction === 'right') {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}
