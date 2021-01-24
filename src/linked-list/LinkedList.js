import Node from './Node';

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  /** Inserts the Node at the beginning of the Linked List. */
  insertFirst(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      const tempNode = this.head;
      this.head = new Node(value, tempNode);
    }
  }

  /** Inserts the Node at the end of the Linked List. */
  insertLast(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let tempNode = this.head;
      while (tempNode.next) {
        tempNode = tempNode.next;
      }
      tempNode.next = new Node(value);
    }
  }

  /** Removes the first Node from the Linked List. */
  removeFirst() {
    if (this.head === null) {
      return;
    } else if (this.head && this.head.next === null) {
      this.head = null;
    } else {
      this.head = this.head.next;
    }
  }

  /** Removes the last Node from the Linked List. */
  removeLast() {
    if (this.head === null) {
      return;
    } else if (this.head && this.head.next === null) {
      this.head = null;
    } else {
      let tempNode1 = this.head;
      let tempNode2 = this.head.next;
      while (tempNode2.next) {
        tempNode1 = tempNode2;
        tempNode2 = tempNode2.next;
      }
      tempNode1.next = null;
    }
  }
}
