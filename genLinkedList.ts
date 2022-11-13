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

    while (index > 1) {
      index--;
      if (currentNode?.next) {
        currentNode = currentNode.next;
        continue;
      }
      throw new Error("index out of range");
    }

    return currentNode;
  }

  public push(value: T) {
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

  public pop() {
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

  public print() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  get length() {
    return this.size;
  }

  public getAtIndex(index: number): T | null {
    return this.iterate(index)?.value ?? null;
  }

  public insertAtIndex(index: number, value: T) {
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

  public removeAtIndex(index: number) {
    const prevNode = this.iterate(index - 1);
    if (prevNode === null) {
      throw new Error("index out of range");
    }
    prevNode.next = prevNode.next?.next ?? null;
    this.size--;
    return;
  }

  public deleteList() {
    this.head = null;
    return;
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }

  public collect(): T[] {
    const arr: T[] = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }
}
