// 암호 해독
// 방법1
function solution(cipher, code) {
  const result = [];
  for (let i = -1; i <= cipher.length; i += code) {
    result.push(cipher[i]);
  }
  return result.join('');
}

// 방법2
function solution(cipher, code) {
  return cipher
    .split('')
    .filter((_, index) => (index + 1) % code === 0)
    .join('');
}
