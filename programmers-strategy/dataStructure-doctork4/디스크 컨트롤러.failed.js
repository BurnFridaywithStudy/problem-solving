function solution(jobs) {
    jobs.sort(([as, ae], [bs, be]) => {
        if (as === bs) return ae - be;
        else return as - bs
    });
    
    const n = jobs.length;
    let time = 0;
    let total = 0;
    let complete = 0;
    const minHeap = new Heap();
    // jobs.forEach(el => minHeap.enqueue(el));
    // console.log(minHeap.heap);
    // const task = minHeap.dequeue();
    // console.log(task);
    
    while(jobs.length || minHeap.size()) {
        while(jobs.length) {
            if (jobs[0][0] === time){
                minHeap.enqueue(jobs.shift())
            } else {
                break;
            }
        }
        if (minHeap.size() && time >= complete) {
            const task = minHeap.dequeue();
            complete = task[1] + time;
            total += complete - task[0];
        }
        time += 1;
    }

    return Math.floor(total / n);
}

class Heap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    heapifyUp() {
        let i = this.size() - 1;
        const lastNode = this.heap[i];
        
        while (i > 0) {
            const parentIndex = Math.floor((i-1) / 2);
            
            if (this.heap[parentIndex][1] > lastNode[1]) {
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
        
        while(i > 0) {
            let leftChildIndex = i * 2 + 1;
            let rightChildIndex = i * 2 + 2;
            
            if (leftChildIndex < this.size()){
                if (this.heap[leftChildIndex][1] < this.heap[i][1]) {
                    swapIndex = leftChildIndex
                }
            }
            
            if (rightChildIndex < this.size()){
                if ((swapIndex === null && this.heap[rightChildIndex][1] < this.heap[i][1]) ||
                    (swapIndex !== null && this.heap[rightChildIndex][1] < this.heap[leftChildIndex][1])) {
                    swapIndex = rightChildIndex
                }
            }
            
            if (swapIndex === null) break;
            
            [this.heap[i], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[i]];
            i = swapIndex;
        }
    }
    
    enqueue(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
    
    dequeue() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();
        
        // 삭제할 노드 저장
        const dequeuedValue = this.heap[0];
        
        // 맨 뒤 노드를 맨 앞으로 보내고
        this.heap[0] = this.heap.pop();
        // 정렬 진행
        this.heapifyDown();
        
        return dequeuedValue;
    }
}