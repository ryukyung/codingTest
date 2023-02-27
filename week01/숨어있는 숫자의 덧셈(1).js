// 숨어있는 숫자의 덧셈(1)
// 방법1
function solution(my_string) {
  const stringList = my_string.split('').filter((index) => parseInt(index));
  let result = 0;
  stringList.forEach((index) => {
    result += parseInt(index);
  });
  return result;
}

// 방법2
function solution(my_string) {
  return my_string
    .split('')
    .filter((v) => !isNaN(v))
    .reduce((a, b) => parseInt(a) + parseInt(b));
}

// 방법3
function solution(my_string) {
  return [...my_string].reduce(
    (acc, cur) => (Number(cur) ? +acc + +cur : acc),
    0
  );
}
