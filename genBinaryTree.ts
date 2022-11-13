class GenTreeNode {
  public data: number;
  public left: GenTreeNode | null;
  public right: GenTreeNode | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class GenBinarysearchTree {
  public head: GenTreeNode | null;

  constructor(head?: GenTreeNode) {
    this.head = head || null;
  }

  public insert(
    node: GenTreeNode | null = this.head,
    value: number
  ): GenTreeNode {
    if (node === null) {
      const root = new GenTreeNode(value);
      return root;
    }

    if (value < node.data) {
      node.left = this.insert(node.left, value);
      return node;
    }

    node.right = this.insert(node.right, value);

    return node;
  }

  public inOrderTraversal(root: GenTreeNode | null = this.head): void {
    let temp = root;

    if (temp !== null) {
      this.inOrderTraversal(temp.left);
      console.log(temp.data);
      this.inOrderTraversal(temp.right);
    }
  }

  public preOrderTraversal(root: GenTreeNode | null = this.head): void {
    let temp = root;

    if (temp !== null) {
      console.log(temp.data);
      this.inOrderTraversal(temp.left);
      this.inOrderTraversal(temp.right);
    }
  }

  public postOrderTraversal(root: GenTreeNode | null = this.head): void {
    let temp = root;

    if (temp !== null) {
      this.inOrderTraversal(temp.left);
      this.inOrderTraversal(temp.right);
      console.log(temp.data);
    }
  }

  public search(
    node: GenTreeNode | null = this.head,
    value: number
  ): GenTreeNode | null {
    let temp = node;

    if (temp === null) {
      return null;
    }

    if (temp.data === value) {
      return temp;
    }

    if (value < temp.data) {
      return this.search(temp.left, value);
    }

    return this.search(temp.right, value);
  }

  public deleteTree() {
    this.head = null;
  }
}

// const rootNode = new GenTreeNode(50);

// let BST = new GenBinarysearchTree(rootNode);

// BST.insert(BST.head, 65);
// BST.insert(BST.head, 70);
// BST.insert(BST.head, 60);
// BST.insert(BST.head, 40);
// BST.insert(BST.head, 30);
// BST.insert(BST.head, 45);

// BST.inOrderTraversal(rootNode);
// BST.preOrderTraversal(rootNode);
// BST.postOrderTraversal(rootNode);

// BST.search(rootNode, 70)
