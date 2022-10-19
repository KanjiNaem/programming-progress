class ListNode<T> {
  public value: T;
  public next: ListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: ListNode<T> | null;
  private size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  private iterate(index: number): ListNode<T> | null {
    let currentNode = this.head;

    for (let i = 1; i < index; i++) {
      if (currentNode?.next) {
        currentNode = currentNode.next;
        continue;
      }
      throw new Error("index out of range");
    }

    return currentNode;
  }

  push(value: T) {
    const newNode = new ListNode<T>(value);
    this.size++;

    if (!this.head) {
      this.head = newNode;

      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;

    return;
  }

  pop() {
    if (!this.head) {
      return;
    }

    if (this.size === 1) {
      this.head = null;
      this.size--;
      return;
    }

    let current = this.head;
    let prevNode: ListNode<T> = current;

    while (current.next) {
      prevNode = current;
      current = current.next;
    }

    prevNode.next = null;

    this.size--;
    return;
  }

  print() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  get length() {
    return this.size;
  }

  getAtIndex(index: number): T | null {
    return this.iterate(index)?.value ?? null;
  }

  insertAtIndex(index: number, value: T) {
    const newNode = new ListNode<T>(value);
    const prevNode = this.iterate(index - 1);

    if (prevNode === null) {
      throw new Error("index out of range");
    }

    newNode.next = prevNode?.next ?? null;
    prevNode.next = newNode;
    this.size++;
    return;
  }

  removeAtIndex(index: number) {
    const prevNode = this.iterate(index - 1);
    if (prevNode === null) {
      throw new Error("index out of range");
    }
    prevNode.next = prevNode.next?.next ?? null;
    this.size--;
    return;
  }

  deleteList() {
    this.head = null;
    return;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}

const secondBracketMap = new Map<string, string>([
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
]);

const closeBrackets = Array.from(secondBracketMap.values());

function bracketMatcher(str: string): boolean {
  let bracketList = new LinkedList<string>();

  for (let lastChar of str) {
    if (bracketList.length === 0 && !secondBracketMap.has(lastChar)) {
      console.log("j");
      return false;
    }

    if (!secondBracketMap.has(lastChar) && !closeBrackets.includes(lastChar)) {
      continue;
    }

    if (secondBracketMap.has(lastChar)) {
      bracketList.push(lastChar);
      continue;
    }

    if (
      secondBracketMap.get(bracketList.getAtIndex(bracketList.length)!) ===
      lastChar
    ) {
      bracketList.pop();
      continue;
    }

    return false;
  }
  return bracketList.isEmpty();
}

const trueTestStr: string = "([{}])";
const falseTestString: string = "([}])";
const trueTestStr2: string = "([gg{noo}bz])";
const falseTestString2: string = "([gg{noo}bz)";

console.log(bracketMatcher(trueTestStr));
console.log(bracketMatcher(falseTestString));
console.log(bracketMatcher(trueTestStr2));
console.log(bracketMatcher(falseTestString2));
