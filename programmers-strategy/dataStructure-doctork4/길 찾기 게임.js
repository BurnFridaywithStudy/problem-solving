function solution(nodeinfo) {
  // 1. id 부여하기
  const nodelist = nodeinfo.map(([x, y], i) => new Node(i+1, x, y));
  // 2. Y가 큰 값, x는 작은 값 순으로 정렬하기
  nodelist.sort(({ x: ax, y: ay }, { x: bx, y: by }) => {
      if (ay === by) return ax - bx;
      return by - ay;
  });
  // console.log(nodelist);
  
  const root = nodelist[0];
  for (let i = 1; i < nodelist.length; i++) {
      addNode(root, nodelist[i]);
  }
  
  const answer = [[], []];
  
  // 4. 전위 순회 구현하기
  preOrder(answer[0], root);
  // 5. 후위 순회 구현하기
  postOrder(answer[1], root);

  return answer;
}

class Node {
  constructor(id, x, y) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.left = null;
      this.right = null;
  }
}

function addNode(parent, child) {
  if (parent.x > child.x) {
      if (parent.left === null) parent.left = child;
      else addNode(parent.left, child);
  }
      
  if (parent.x < child.x) {
      if (parent.right === null) parent.right = child;
      else addNode(parent.right, child);
  }
}

function postOrder(arr, node) {
  if (!node) return;
  
  postOrder(arr, node.left);
  postOrder(arr, node.right);
  arr.push(node.id);
}

function preOrder(arr, node) {
  if (!node) return;
  
  arr.push(node.id);
  preOrder(arr, node.left);
  preOrder(arr, node.right);
}

/**
[
Node { id: 7, x: 8, y: 6, left: null, right: null },
Node { id: 4, x: 3, y: 5, left: null, right: null },
Node { id: 2, x: 11, y: 5, left: null, right: null },
Node { id: 6, x: 1, y: 3, left: null, right: null },
Node { id: 1, x: 5, y: 3, left: null, right: null },
Node { id: 3, x: 13, y: 3, left: null, right: null },
Node { id: 9, x: 2, y: 2, left: null, right: null },
Node { id: 8, x: 7, y: 2, left: null, right: null },
Node { id: 5, x: 6, y: 1, left: null, right: null }
]
*/