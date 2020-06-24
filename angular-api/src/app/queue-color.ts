
class Node<T> {
    next: Node<T>;
    constructor(public data: T) {
    }
}
  
export class QueueColor<T> {

    head: Node<T>;
    tail: Node<T>;
    circular: Node<T>;
  
    constructor() {
      this.head = this.tail = null;
    }
  
    next(): Node<T> {
        if(this.circular!=null) {
            this.circular = this.circular.next;
        }
        if(this.circular==null) {
            this.circular = this.head;
        }
        return this.circular;
    }

    enqueue(data: T): void {

      const node = new Node(data);
      console.log(node);

      if (this.isEmpty()) {
        this.head = this.tail = node;
        return;
      }
  
      this.tail.next = node;
      this.tail = node;
    }
  
    dequeue(): T {

      if (this.isEmpty()) {
        return null;
      }
  
      const data = this.head.data;
  
      if (this.tail === this.head) {
        this.head = this.tail = null;
      } else {
        this.head =  this.head.next;
      }
  
      return data;
    }
  
    isEmpty() {
      return this.head === null;
    }

  }