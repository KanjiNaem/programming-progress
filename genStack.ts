class GenericStack<T> {
  private data: T[];
  constructor() {
    this.data = [];
  }

  public peek(): T {
    if (this.data.length === 0) {
      throw new Error("empty stack");
    }
    return this.data[this.data.length - 1];
  }

  public push(item: T): void {
    if (!this.data) {
      this.data = [item];
    } else {
      this.data.push(item);
    }
  }

  public pop(): T {
    const topVal = this.data.pop();
    if (!topVal) {
      throw new Error("Can't pop empty stack");
    }
    return topVal;
  }

  public popAll(): void {
    while (this.data && this.data.length > 0) {
      this.data.pop();
    }
  }

  public size(): number {
    if (!this.data) {
      throw new Error("Can't check size of empty stack");
    }
    return this.data.length;
  }

  public isEmpty(): boolean {
    return this.data.length === 0;
  }
}

let testStack = new GenericStack();

console.log(testStack.size());
