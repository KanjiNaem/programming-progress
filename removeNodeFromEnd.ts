class MyListNode<Number> {
  public value: Number;
  public next: MyListNode<Number> | null;

  constructor(val: Number) {
    this.value = val;
    this.next = null;
  }
}

function iterate(
  index: number,
  head: MyListNode<Number> | null
): MyListNode<Number> | null {
  let currentNode = head;

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

function addNode(head: MyListNode<Number>, value: Number) {
  const newNode = new MyListNode<Number>(value);

  let current = head;

  while (current.next) {
    current = current.next;
  }

  current.next = newNode;

  return;
}

function print(head: MyListNode<Number> | null) {
  let currentNode = head;

  while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}

function getSize(head: MyListNode<Number> | null) {
  let count = 0;
  let currentNode = head;

  if (!currentNode) {
    throw new Error("index out of range");
  }

  while (currentNode.next) {
    currentNode = currentNode.next;
    count++;
  }
  count++;

  return count;
}

function removeNthFromEnd(
  head: MyListNode<Number> | null,
  n: number
): MyListNode<Number> | null {
  if (getSize(head) === 1) {
    head = null;
    return null;
  }

  if (getSize(head) === 2 && n === 1 && head && head.next) {
    head.next = null;
    return head;
  }

  if (getSize(head) === 2 && n === 2 && head) {
    head = head.next;
    return head;
  }

  if (getSize(head) - n === 0 && head) {
    head = head.next;
    return head;
  }

  const nodeIndex = getSize(head) - n + 1;
  const prevNode = iterate(nodeIndex - 1, head);

  if (prevNode === null) {
    throw new Error("index out of range");
  }

  prevNode.next = prevNode?.next?.next ?? null;

  return head;
}

let headNode = new MyListNode(1);

addNode(headNode, 2);
addNode(headNode, 3);

const result = removeNthFromEnd(headNode, 3);
console.log(result);
print(result);
