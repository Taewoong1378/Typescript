// 타입 추론 기본 1
let a = 'abc';

function getB(b = 10) {
  let c = 'hi';
  return b + c;
}

// 10 + '10' -> 1010

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
// let shoppingItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello'
// }

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

let detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'abc',
  tag: 'hello',
};

// Best Common Type
let arr = [1, 2, true, 'a'];
