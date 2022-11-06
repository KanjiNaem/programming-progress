// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists.
// Otherwise, add the key-value pair to the cache.
// If the number of keys exceeds the capacity from this operation, evict the least recently used key.
class LinkedListNode {
  constructor(
    public key: number,
    public value: number,
    public next: LinkedListNode,
    public previous: LinkedListNode
  ) {}
}

class LRUCache {
  private tail: LinkedListNode;
  private head!: LinkedListNode;
  private map: Map<number, LinkedListNode>;

  constructor(private capacity: number) {
    this.tail = new LinkedListNode(0, 0, this.head, this.head);
    this.head = new LinkedListNode(0, 0, this.tail, this.tail);
    this.tail.next = this.head;
    this.tail.previous = this.head;
    this.map = new Map();
  }

  get(key: number): number {
    const existingItem = this.map.get(key);

    if (!existingItem) {
      return -1;
    }

    this.pushToTheFront(existingItem);
    return existingItem.value;
  }

  put(key: number, value: number): void {
    const existingItem = this.map.get(key);

    if (!existingItem) {
      const node = new LinkedListNode(key, value, this.head.next, this.head);
      this.head.next = node;
      node.next.previous = node;
      this.map.set(key, node);

      if (this.map.size > this.capacity) {
        const elemToDelete = this.tail.previous;
        this.tail.previous = this.tail.previous.previous;
        this.tail.previous.next = this.tail;
        this.map.delete(elemToDelete.key);
      }

      return;
    }

    existingItem.value = value;
    this.pushToTheFront(existingItem);
  }

  print() {
    let currentNode = this.head.next;

    while (currentNode !== this.tail) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  private pushToTheFront(existingItem: LinkedListNode) {
    existingItem.next.previous = existingItem.previous;
    existingItem.previous.next = existingItem.next;
    this.head.next.previous = existingItem;
    existingItem.next = this.head.next;
    this.head.next = existingItem;
    existingItem.previous = this.head;
  }
}
