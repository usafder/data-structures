import { DoublyNode } from './Node';

export default class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  /** Inserts the Node at the beginning of Doubly Linked List. */
  insertFirst(value) {
    if (this.head === null) {
      this.head = new DoublyNode(value);
    } else {
      const newNode = new DoublyNode(value, this.head);
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  /** Inserts the Node at the end of Doubly Linked List. */
  insertLast(value) {
    if (this.head === null) {
      this.head = new DoublyNode(value);
    } else {
      let tempNode = this.head;
      while (tempNode.next) {
        tempNode = tempNode.next;
      }
      tempNode.next = new DoublyNode(value);
      tempNode.next.prev = tempNode;
    }
  }

  /** Removes the first Node from Doubly Linked List. */
  removeFirst() {
    if (this.head === null) {
      return;
    } else if (this.head && this.head.next === null) {
      this.head = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }

  /** Removes the last Node from Doubly Linked List. */
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
      tempNode2.prev = null;
    }
  }
}
