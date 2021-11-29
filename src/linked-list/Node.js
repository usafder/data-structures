export default class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class DoublyNode extends Node {
  constructor(value, next = null, prev = null) {
    super(value, next);
    this.prev = prev;
  }
}
