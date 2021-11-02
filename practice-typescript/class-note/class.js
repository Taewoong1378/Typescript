// ES2015 (ES6)
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let capt = new Person("캡틴", 100);

class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성되었습니다");
    this.name = name;
    this.age = age;
  }
}

let taeng = new Person("태웅", 22); // 생성되었습니다.
console.log(taeng);
