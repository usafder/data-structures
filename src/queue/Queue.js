export default class Queue {
  constructor() {
    this.items = [];
  }

  /** Adds an item to the rear/end of the Queue. */
  enqueue(item) {
    this.items.push(item);
  }

  /** Removes and returns the item which is at the front/beginning of the Queue. */
  dequeue() {
    return this.items.shift();
  }

  /** Returns the number of items present in the Queue. */
  size() {
    return this.items.length;
  }

  /** Indicates whether the Queue is empty or not. */
  isEmpty() {
    return this.size() === 0 ? true : false;
  }

  /** Returns the item which is at the front/beginning of the Queue */
  peek() {
    return this.items[0];
  }
}
