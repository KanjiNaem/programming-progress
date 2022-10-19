class DoubleListNode<T> {
  public value: T;
  public next: DoubleListNode<T> | null = null;
  public prev: DoubleListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class DoublelyLinkedList<T> {
  private head: DoubleListNode<T> | null;
  private tail: DoubleListNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  public length(): number {
    return this.size;
  }

  public isEmpty(): boolean {
    return this.size <= 0;
  }

  public contains(val: T): boolean {
    if (this.isEmpty()) {
      return false;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode?.value === val) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  private iterate(index: number): DoubleListNode<T> | null {
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

  public getAtIndex(index: number) {
    return this.iterate(index)?.value;
  }

  public insertFirst(val: T) {
    if (this.isEmpty()) {
      let newNode = new DoubleListNode<T>(val);
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    let newNode = new DoubleListNode<T>(val);
    newNode.next = this.head;
    newNode.prev = null;

    if (this.head !== null) {
      this.head.prev = newNode;
    }

    this.head = newNode;
    this.size++;
  }

  public insertLast(val: T) {
    if (this.isEmpty()) {
      let newNode = new DoubleListNode<T>(val);
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    let newNode = new DoubleListNode<T>(val);
    newNode.next = null;
    newNode.prev = this.tail;

    if (this.tail !== null) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.size++;
  }

  public insertAtIndex(index: number, value: T) {
    const newNode = new DoubleListNode<T>(value);
    const prevNode = this.iterate(index - 1);

    if (prevNode === null) {
      throw new Error("index out of range");
    }

    newNode.next = prevNode?.next ?? null;
    prevNode.next = newNode;
    this.size++;
    return;
  }

  public getFirst(): T | null {
    if (!this.head) {
      return null;
    }

    return this.head.value;
  }

  public getLast(): T | null {
    if (!this.tail) {
      return null;
    }
    return this.tail.value;
  }

  public deleteList() {
    this.head = null;
    return;
  }

  public collect(): T[] {
    const arr: T[] = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value) {
        arr.push(currentNode.value);
      }

      currentNode = currentNode.next;
    }

    return arr;
  }

  public print() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  public indexOf(val: T): number {
    if (this.isEmpty()) {
      return -1;
    }

    let currentNode = this.head;
    let count: number = 1;

    for (let i = 0; i < this.length(); i++) {
      count++;
      if (currentNode?.value === val) {
        return count;
      }
    }

    return -1;
  }

  // move to index function doesnt work yet, need to figure it out

  // public moveToIndex(index1: number, index2: number) {
  //   if (index1 > this.length() || index2 > this.length()) {
  //     throw new Error("index out of range");
  //   }

  //   if (index1 === index2) {
  //     return;
  //   }

  //   const node = this.iterate(index1);
  //   const targetNode = this.iterate(index2);

  //   if (node === null || targetNode === null) {
  //     throw new Error("Index out of bounds");
  //   }

  //   const prevNode = node.prev;
  //   const nextNode = node.next;
  //   let newPrev = targetNode?.prev?.prev;

  //   if (prevNode) {
  //     prevNode.next = nextNode;
  //   }

  //   if (nextNode) {
  //     nextNode.prev = prevNode;
  //   }

  //   if (newPrev) {
  //     newPrev.next = node;
  //   }
  // }
}

let testDoubleList = new DoublelyLinkedList<number>();

testDoubleList.insertLast(1);
testDoubleList.insertLast(2);
testDoubleList.insertLast(3);
testDoubleList.insertLast(4);
testDoubleList.insertLast(5);
testDoubleList.insertLast(6);
testDoubleList.insertLast(7);

testDoubleList.print();
