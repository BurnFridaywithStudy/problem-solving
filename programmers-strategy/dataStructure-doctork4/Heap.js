
class Heap {
  constructor() {
      this.heap = [];
  }
  
  size() {
      return this.heap.length;
  }
  
  heapifyUp() {
      let i = this.size() - 1;
      const lastNode = this.heap(i);
      
      while (i > 0) {
          const parentIndex = Math.floor((i - 1) / 2);
          
          if (this.heap[parentIndex] > lastNode) {
              this.heap[i] = this.heap[parentIndex];
              i = parentIndex;
          } else {
              break;
          }
      }
      this.heap[i] = lastNode
  }
  
  heapifyDown() {
      let i = 0;
      const rootNode = this.heap[i];
      let swapIndex = null;
      
      while(true) {
          let leftChildIndex = i * 2 + 1;
          let rightChildIndex = i * 2 + 2;
          
          if (leftChildIndex < this.size()){
              if (this.heap[leftChildIndex] < this.heap[i]) {
                  swapIndex = leftChildIndex
              }
          }
          
          if (rightChildIndex < this.size()){
              if ((swapIndex === null && this.heap[rightChildIndex] < this.heap[i]) ||
                  (swapIndex !== null && this.heap[rightChildIndex] < this.heap[leftChildIndex])) {
                  swapIndex = rightChildIndex
              }
          }
          
          if (swapIndex === null) break;
          
          [this.heap[i], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[i]];
          i = swapIndex
      }
  }
  
  enqueue(value) {
      this.heap.push(value);
      this.heapifyUp();
  }
  
  dequeue() {
      if (this.size() === 0) return null;
      
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
  }
}
