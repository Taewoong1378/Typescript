// 함수의 파라미터에 타입을 정의하는 방식
// function practiceFunc(a: number, b: number) {
//   return a + b;
// }
// practiceFunc(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function addFunc(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function practiceFunc(a: number, b: number): number {
  return a + b;
}
practiceFunc(10, 20);
// practiceFunc(10, 20, 30, 40); -> 에러 발생 (JS에서는 에러 발생 X)

// 함수의 옵셔널 파라미터 (필요에 따라 인수를 넣을수도, 안 넣을수도 있다)
function log(a: string, b?: string, c?: string) {}
log("hello world");
log("hello ts", "abc");
