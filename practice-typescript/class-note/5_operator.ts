// function logMessage(value: string) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100); -> 에러 발생

// 유니온 타입 사용 (하나의 타입 이상을 사용할 수 있게 해준다) -> 파이프 연산자 사용
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toFixed();  // value까지 쓰고 .을 찍어보면 바로 value를 number로 인식한 다음에 사용 가능한 메소드를 바로 알려주는 것을 볼 수 있다.
  }
  if (typeof value === 'string') {
    value.charCodeAt;
  }
  throw new TypeError('value must be string or number');
  // type이 string이나 number가 아니면 에러를 발생시킨다.
} 
logMessage('hello');
logMessage(300);
// logMessage(false); -> 에러 발생

interface Developer2 {
  name: string;
  skill: string;
}

interface Person3{
  name: string;
  age: number;
}

// 아래와 같이 사용하면 Developer와 Person3의 속성을 모두 사용할 수 있을 것 같지만 둘의 교집합(공통부분)만 사용할 수 있다.
// function askSomeone(someone: Developer2 | Person3) {
//   someone.name;
//   // someone.age; -> 에러 발생
//   // someone.skill; -> 에러 발생
// }
// askSome({ name: '디벨로퍼', skill: '웹 개발'});
// askSome({ name: '디벨로퍼', age: 23});


// 인터섹션 타입
let minsu: string | number | boolean;
let capt4: string & number & boolean; // string도 만족, number도 만족, boolean도 만족할 수가 없기 때문에 never라고 나온다.
function askSomeone(someone: Developer2 & Person3) {
  someone.name;
  someone.age;
  someone.skill;
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 34 });