enum Shoes {
  Nike,
  Adidas
}

let Nike = Shoes.Nike;
console.log(Nike); // 0이 출력된다.

let Adidas = Shoes.Adidas;
console.log(Adidas); // 1이 출력된다.

enum NewShoes {
  Nike = '나이키',
  Adidas = '아디다스'
}

// 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다');
  }
  if (answer === Answer.No) {
    console.log('오답입니다');
  }
}

askQuestion(Answer.Yes);
// askQuestion('예스');
// askQuestion('y');
// askQuestion('yes');