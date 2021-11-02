class Personal {
  private name: string;
  public age: number;
  readonly log: string; // 접근만 할 수 있고, 값을 변경할 수는 없다.

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}