// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10);
// logText('하이');
// logText(true);

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// // 호출하는 시점에 타입을 넘겨줄 수 있다.
// logText<string>('하이');

// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// // 타입을 바꾸기 위해서 중복된 코드를 다시 한 번 사용했기 때문에 이는 매우 비효율적인 것이라고 할 수 있다.
// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// function logText(text: string | number) {
//   console.log(text);
//   // text. 을 찍어보면 string과 number 타입 모두에서 사용가능한 메소드만 출력해주는 것을 볼 수 있다.
//   return text;
// }

// const a = logText('a');
// // a.split(''); a가 여전히 string | number이기 때문에 split을 사용하려고 하면 에러가 뜬다.

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

// logText는 string을 받아서 쓰겠다. 인자와 반환값이 모두 string이 된다.
const str2 = logText<string>('abc');
str2.split('');

const login = logText<boolean>(true);

// 위와 같이 제네릭을 사용하면 코드의 중복 없이 필요한 함수를 제작할 수 있다.

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 'abc', selected: false };
interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const object: Dropdown<number> = { value: 123, selected: false };
const object2: Dropdown<string> = { value: 'abc', selected: false };

// 제너릭의 타입 제한 - 1
function logTextLength<T>(text: T[]): T[] {
  // 위에서 제네릭을 배열로 바꿔주지 않고 text.length를 찍으면 T가 반드시 length를 사용한다는 보장이 없기 때문에 에러를 발생시킨다.
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}
logTextLength<string>(['hi', 'abc']);
logTextLength<number>([123, 456]);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

// 이런 식으로 Length를 가지는 타입일거라고 지정함으로서 text.length의 오류를 없애줄 수도 있다.
function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength2('a');
logTextLength2({ length: 10 });
// logTextLength2(10); -> 오류 발생. 숫자 10은 length를 프로퍼티로 제공하지 않기 때문에 오류 발생함.

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// ShoppingItem에 있는 key 중에 하나가 getShoppingItemOption의 파라미터로 올 것이다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption('a');
getShoppingItemOption('name');
getShoppingItemOption('price');
getShoppingItemOption('stock');
