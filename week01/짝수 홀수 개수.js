// 짝수 홀수 개수
// 방법1
function solution(num_list) {
  let odd = num_list.filter((i) => i % 2);
  let even = num_list.filter((i) => !(i % 2));
  const result = [even.length, odd.length];
  return result;
}

// 방법2
function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}
