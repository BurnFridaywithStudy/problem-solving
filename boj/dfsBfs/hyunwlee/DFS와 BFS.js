const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on('line', function(line) {
  input.push(line);
}).on('close', function() {
  console.log(solution());
  process.exit();
});

let ans = '';

function solution() {
  const [NVM, ...arr] = input;
  const [n, m, v] = NVM.split(' ').map(Number);
  const lists = Array.from(Array(n + 1), () => []);
  arr.forEach(line => {
    const [start, end] = line.split(' ').map(Number);
    lists[start].push(end);
    lists[end].push(start);
  });
  lists.forEach((list) => {
    list.sort((a, b) => (a - b));
  });
  let check = Array(n + 1).fill(false);
  check[v] = true;
  ans += `${v} `;
  dfs(v, lists, check);
  ans += '\n';
  check = Array(n + 1).fill(false);
  bfs(v, lists, check);
  return ans;
}

function dfs(v, lists, check) {
  for (let i = 0; i < lists[v].length; ++i) {
    if (check[lists[v][i]])
      continue;
    check[lists[v][i]] = true;
    ans += `${lists[v][i]} `;
    dfs(lists[v][i], lists, check);
  }
}

function bfs(v, lists, check) {
  const queue = new LinkedList();
  queue.offer(v);
  check[v] = true;
  ans += `${v} `;
  while (!queue.isEmpty()) {
    const now = queue.poll();
    for (let i = 0; i < lists[now].length; ++i) {
      if (check[lists[now][i]])
        continue;
      check[lists[now][i]] = true;
      ans += `${lists[now][i]} `;
      queue.offer(lists[now][i]);
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  offer(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    ++this.size;
  }

  poll() {
    const polledValue = this.head.value;
    this.head = this.head.next;
    if (!this.head)
      this.tail = null;
    --this.size;
    return polledValue;
  }

  isEmpty() {
    return this.size === 0;
  }
}
