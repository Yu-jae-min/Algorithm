/*
  # 문제
  2016

  # 문제 설명
  2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
  두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
  요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다.
  예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

  # 제한 사항
  2016년은 윤년입니다.
  2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

  # 입출력 예
  a	  b	  result
  5	  24	"TUE"
*/

const test01 = (a, b) => {
  const dayOfTheWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const targetDate = new Date(2016, a - 1, b);
  const result = dayOfTheWeek[targetDate.getDay()];

  return result;
};

console.log(test01(5, 24)); // "TUE"

/*
  # 문제풀이 - test01
  1. 변수에 리턴 할 요일을 배열로 담는다.
  2. new Date를 사용하여 Date를 생성하는데 이 때 2016년도 기준이기 때문에 첫번째 인자는 2016, 두번째 인자는 월을 선택하는데 이 때 Number 타입이 전달 될 경우 요일의 index를 찾게 되기 때문에 -1을 해줘야한다. 그 후 마지막 인자 일을 파라미터로 전달한다.
  3. getDay 메소드를 활용하여 요일 index를 반환하고 생성해놓은 배열 중 반환한 index 값의 요소를 반환한다.
*/

const test02 = (a, b) => {
  const date = new Date(`2016, ${a} ,${b}`)
    .toString()
    .split(" ")[0]
    .toUpperCase();

  return date;
};

console.log(test02(5, 24)); // "TUE"

/*
  # 문제풀이 - test02
  1. new Date를 활용하여 Date를 생성한다. 이 때 템플릿 리터럴을 활용하여 파라미터를 문자열로 전달한다.
  2. 메소드 체이닝을 이용하여 반환 된 Date 객체를 String 타입으로 변환 후 split 메소드로 잘라준다. 이 때 잘리는 기준은 공백이 되고 이 중 요일 값은 첫번째 배열에 담기기 때문에 index 0번째 배열을 타깃으로 정하여 toUpperCase 메소드를 활용하여 대문자로 바꿔준다.
*/

/*
  # 문제풀이 비교
  (1) 실행 속도 : test01 < test02
  (2) 코드의 길이 : test01 < test02
  (3) 가독성 : test01 > test02

  두 풀이 중 메소드 체이닝을 이용한 풀이의 속도가 더 빨랐다. 하지만 메소드 체이닝을 이용한 풀이는 가독성이 좋지 못한다.
  속도 측면에서 차이가 크지 않기 때문에 getDay를 활용한 첫번째 풀이가 더 좋았던 것 같다.
*/
