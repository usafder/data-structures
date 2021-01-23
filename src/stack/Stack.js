export default class Stack {
  constructor() {
    this.items = [];
  }

  /** Inserts an item at the top of the Stack. */
  push(item) {
    this.items.push(item);
  }

  /** Removes and returns the item which is at the top of the Stack. */
  pop() {
    return this.items.pop();
  }

  /** Returns the number of items present in the Stack. */
  size() {
    return this.items.length;
  }

  /** Indicates whether the Stack is empty or not. */
  isEmpty() {
    return this.size() === 0 ? true : false;
  }

  /** Returns the item which is at the top of the Stack without removing it. */
  peek() {
    return this.items[this.size() - 1];
  }
}
