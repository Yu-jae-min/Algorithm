/*
    # 문제
    행렬의 덧셈

    # 문제 설명
    행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
    2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

    # 제한 조건
    행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

    # 입출력 예
    arr1	        arr2	        return
    [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
    [[1],[2]]	    [[3],[4]]	    [[4],[6]]
*/

const test01 = (arr1, arr2) => {
  const result = JSON.parse(JSON.stringify(Array(arr1.length).fill(Array())));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      result[i].push(arr1[i][j] + arr2[i][j]);
    }
  }

  return result;
};

console.log(test01([[1], [2]], [[3], [4]]));

/*
    # 문제풀이 - test01
    1. 배열의 길이와 배열의 요소만큼 Array생성자로 빈 배열을 생성한다. 이 때 참조를 끊기 위해 JSON.parse와 JSON.stringify를 사용했다.
    2. 중첩 반복문을 활용하여 빈 배열에 요소의 더한 값을 넣어준다.
*/

const test02 = (arr1, arr2) => {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i]));
};

console.log(test02([[1], [2]], [[3], [4]]));

/*
    # 문제풀이 - test02
    1. map함수를 중첩으로 사용한다.
    2. 이 때, 배열안에 배열의 요소를 더해야하므로 b + arr2[i][j]의 형태로 더해준다.
    여기서 b는 기준이 되는 arr1의 배열안에 배열의 요소를 가리키고 arr2[i][j] 또한 arr2의 배열안에 배열의 요소를 가리킨다.
    만약 b + arr2[i]와 같은 형태로 더하려고하면 number+array의 타입이 더해지므로 string 타입이 출력된다.
*/
