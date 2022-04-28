/*
  # 문제
  부족한 금액 계산하기

  # 문제 설명
  새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다.
  이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다.
  즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
  놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
  단, 금액이 부족하지 않으면 0을 return 하세요.

  # 제한 사항
  놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
  처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
  놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수

  # 입출력 예
  price	  money	  count	  result
  3	      20	    4	      10

  # 입출력 예 설명
  입출력 예 #1
  이용금액이 3인 놀이기구를 4번 타고 싶은 고객이 현재 가진 금액이 20이라면,
  총 필요한 놀이기구의 이용 금액은 30 (= 3+6+9+12) 이 되어 10만큼 부족하므로 10을 return 합니다.
*/

const test01 = (price, money, count) => {
  let result = 0;

  for (let i = 1; i <= count; i++) result += price * i;

  return result > money ? result - money : 0;
};

console.time("1");
console.log(test01(3, 20, 4)); // 10
console.timeEnd("1");

/*
  # 문제풀이 - test01
  1. 반복문을 활용하여 변수로 만들어놓은 result에 price를 증감되는 i로 곱하여 누적하며 더해주었다.
  2. 이용료 result가 가지고 있는 money보다 클 경우 두 값에 차를 출력하고 아닌 경우 0을 출력한다.
*/

const test02 = (price, money, count) => {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
};

console.time("2");
console.log(test02(3, 20, 4)); // 10
console.timeEnd("2");

/*
  # 문제풀이 - test02
  다른 개발자의 풀이이다. 가우스 공식을 활용하였다.
*/

/*
  # 문제풀이 비교
  (1) 실행 속도 : test01 < test02
  (2) 코드의 길이 : test01 < test02
  (3) 가독성 : test01 > test02

  다른 개발자의 풀이에서는 가우스 공식을 활용하였다. 하지만 간단한 연산의 경우 수학 공식을 활용하는 것보다
  단순 반복문을 이용하는 것이 가독성에는 더 좋아보였다.
*/
