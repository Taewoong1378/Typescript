interface User {
  age: number;
  name: string;
}

// 변수에 활용한 인터페이스
const taewoong: User = {
  age: 22,
  name: '태웅'
}

// 함수에 인터페이스 활용
function getUser(user: User): void {
  console.log(user);
}

const capt123 = {
  name: '캡틴',
  age: 33
}
getUser(capt123);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum123: SumFunction;
sum123 = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}

const arr2: StringArray = ['a', 'b', 'c'];
// arr2[0] = 'd';

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

const obj2: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}
obj2[2] = /\.css$/;


// 인터페이스 확장 (상속)
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

// language만 정의하면 에러가 난다.
let captain: Developer = {
  name: 'taewoong',
  age: 22,
  language: 'Korean',
};