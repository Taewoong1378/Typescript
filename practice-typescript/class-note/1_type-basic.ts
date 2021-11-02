// JS 문자열 선언
const jsStr = "hello";

// TS 문자열 선언
const tsStr: string = "hello";

// TS 숫자
const num: number = 10;

// TS 배열
const arr: Array<number> = [1, 2, 3];
const heroes: Array<string> = ["Capt", "Thor", "Hulk"];
const items: number[] = [1, 2, 3];

// TS 튜플 (배열의 각각 인덱스에 타입을 정해주는 것)
let address: [string, number] = ["gangnam", 100];

// TS 객체
let obj: object = {};
let person: object = {
  name: "capt",
  age: 100,
};
let person2: { name: string; age: number } = {
  name: "taewoong",
  age: 22,
};

// TS 진위값
let show: boolean = true;