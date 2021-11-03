// 타입 단언(type assertion)
let a;
a = 20;
a = 'a';
a = 30;
let b = a as unknown as number;

// DOM API 조작
// <div id="app">h1</div>
let div = document.querySelector('div');
if (div) {
  div.innerText
}