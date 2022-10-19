class Stack<T> {
  private data: T[] = [];

  public peek(): T {
    return this.data[this.data.length - 1];
  }

  public push(item: T): void {
    this.data.push(item);
  }

  public pop(): T {
    const topVal = this.data.pop();
    if (!topVal) {
      throw new Error("Can't pop empty stack");
    }
    return topVal;
  }

  public popAll(): void {
    while (this.data.length > 0) {
      this.data.pop();
    }
  }

  public size(): number {
    return this.data.length;
  }

  public isEmpty(): boolean {
    return this.data.length === 0;
  }
}

const bracketMap = new Map<string, string>([
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
]);

const endBrackets: string[] = Array.from(bracketMap.values());

function checkBrackets(str: string): boolean {
  let bracketStack = new Stack<string>();

  for (let lastChar of str) {
    if (bracketStack.isEmpty() && !bracketMap.has(lastChar)) {
      return false;
    }

    if (!bracketMap.has(lastChar) && !endBrackets.includes(lastChar)) {
      continue;
    }

    if (bracketMap.get(bracketStack.peek()) === lastChar) {
      bracketStack.pop();
      continue;
    }

    if (bracketMap.has(lastChar)) {
      bracketStack.push(lastChar);
      continue;
    }

    return false;
  }

  return bracketStack.isEmpty();
}

const testStringTrue: string = "([{}])";
const testStringFalse: string = "([}])";
const testStringWithCharsTrue: string = "([gg{noo}bz])";
const testStringWithCharsFalse: string = "([gg{noo}bz)";

console.log(checkBrackets(testStringTrue));
console.log(checkBrackets(testStringFalse));
console.log(checkBrackets(testStringWithCharsTrue));
console.log(checkBrackets(testStringWithCharsFalse));
