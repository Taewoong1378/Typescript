// 인터페이스
interface Developer {
  name: string;
  skill: string;
}
interface PersonName {
  name: string;
}
let developer: Developer;
let person: PersonName;
// developer = person; -> person은 name 속성만 가지고 있지만 developer는 name과 skill 속성 2개를 가지고 있어서 에러가 발생한다.
person = developer;

// 굳이 인터페이스가 아니라 클래스라고 할지라도 내부 속성의 포함 관계에 따라 에러 발생 여부가 정해진다.

// 함수
let add = function (a: number) {
  console.log(a);
};
let sum = function (a: number, b: number) {
  return a + b;
};
// 첫 번째 함수와 두 번째 함수의 차이는? 파라미터 개수의 차이도 있고, sum 함수의 구조가 add 함수의 구조보다 크다.
// 따라서 add = sum; 은 에러가 발생한다.
// 대신 sum = add; 는 에러가 발생하지 않는다 (즉, 호환 가능)

// 제네릭
interface Empty<T> {

}
let empty1: Empty<string>;
let empty2: Empty<number>;
// 함수 내부에 어떤 값도 없기 때문에 동일한 구조라고 인식하게 됨
empty1 = empty2; 
empty2 = empty1; 

interface NotEmpty<T> {
  data: T;
}
let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
// notempty1 = notempty2; 에러 발생
// notempty2 = notempty1; 에러 발생
// 함수 내부에 값이 존재하기 때문에 동일한 구조라고 인식 X data 속성이 string 혹은 number로 정의돼버리기 때문