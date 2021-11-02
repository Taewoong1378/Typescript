// interface Person {
//   name: string;
//   age: number;
// }

type People = {
  name: string;
  age: number;
}

// interface와 type의 차이 : 아래 Person에 마우스 커서를 올려보면 type이 더 자세한 내용을 알려주는 것을 알 수 있다.
// 또, interface는 확장(상속)이 가능하지만 type 별칭은 확장이 불가능하다.
// 따라서 웬만하면 interface를 사용하는 것이 좋다.

let taewooong: People = {
  name: 'taewoong',
  age: 22
}

type MyString = string;
const str: MyString = 'hello';

type Todo = { id: number; title: string; done: boolean }
function getTodo(todo: Todo) {

}