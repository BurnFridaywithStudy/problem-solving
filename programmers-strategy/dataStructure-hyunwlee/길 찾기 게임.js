let answer = [[], []];
function solution(nodeinfo) {
  const bt = new BinaryTree();
  nodeinfo = nodeinfo.map(([x, y], idx) => ({ x, y, value: idx + 1 }))
    .sort((a, b) => b.y - a.y)
    .forEach((node) => {
      bt.add(new Node(node));
    });
  bt.preOrder(bt.head);
  bt.postOrder(bt.head);
  return answer;
}

class Node {
  constructor({ x, y, value }) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.head = null;
  }

  add(node, target = this.head) {
    if (!this.head) {
      this.head = node;
      return;
    }
    if (!target.left && node.x < target.x) {
      target.left = node;
      node.parent = target;
      return;
    }
    if (!target.right && node.x > target.x) {
      target.right = node;
      node.parent = target;
      return;
    }
    if (node.x < target.x)
      this.add(node, target.left);
    if (node.x > target.x)
      this.add(node, target.right);
  }

  preOrder(node) {
    if (!node)
      return;
    answer[0].push(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  postOrder(node) {
    if (!node)
      return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    answer[1].push(node.value);
  }
}

console.log(solution([[5, 3], [11, 5], [13, 3], [3, 5], [6, 1], [1, 3], [8, 6], [7, 2], [2, 2]]));
