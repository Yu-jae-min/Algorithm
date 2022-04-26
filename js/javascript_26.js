/*
  # 문제
  가운데 글자 가져오기

  # 문제 설명
  단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
  단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

  # 제한 조건
  s는 길이가 1 이상, 100이하인 스트링입니다.

  # 입출력 예
  s	          return
  "abcde"	    "c"
  "qwer"	    "we"
*/

const test01 = (s) => {
  const len = s.length;
  const mid = len / 2;

  return len % 2 ? s[Math.floor(mid)] : s[mid - 1] + s[mid];
};

console.log(test01("abcde")); // c

/*
  # 문제풀이 - test01
  1. 삼항연산자의 조건으로 파라미터로 받은 문자열의 길이를 2로 나누어 나머지의 값을 사용하였다.
  2. 나머지 값이 1인 경우 문자열의 길이는 홀수이므로 출력하는 문자의 index를 문자열의 길이를 2로 나눈 뒤 Math.floor로 내림처리한 값으로 설정하였다.
  3. 나머지 값이 0인 경우 문자열의 길이는 짝수이므로 출력하는 문자의 index를 문자열의 길이를 2로 나누고 1을 뺀 값과 문자열의 길이를 2로 나눈 값으로 설정하였다.
*/

const test02 = (s) => {
  const len = s.length;

  return s.substr(Math.ceil(len / 2 - 1), len % 2 ? 1 : 2);
};

console.log(test02("abcde")); // c

/*
  # 문제풀이 - test02
  1. 파라미터를 substr메서드로 잘랐다. 첫번째 파라미터인 출력의 시작점은 문자의 길이를 2로 나눈 값에 1을 뺀 뒤 Math.ceil로 올림처리하였다.
  2. 두번째 파라미터의 경우 파라미터로 받은 문자의 길이를 나누어 나머지가 0인 경우 문자의 길이가 짝수이므로 2, 나머지가 1인 경우 문자의 길이가 홀수이므로 1을 출력한다.
*/

/*
  # 문제풀이 비교
  (1) 실행 속도 : test02 > test01
  (2) 코드의 길이 : test02 > test01
  (3) 가독성 : test02 = test01
*/
