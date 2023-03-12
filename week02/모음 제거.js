// 모음 제거
// 방법1
function solution(my_string) {
  return [...my_string]
    .filter(
      (i) => !(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u')
    )
    .join('');
}

// 방법2
function solution(my_string) {
  return Array.from(my_string)
    .filter((t) => !['a', 'e', 'i', 'o', 'u'].includes(t))
    .join('');
}
