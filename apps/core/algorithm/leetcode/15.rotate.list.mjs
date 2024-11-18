import { createLinkedList, linkedListLoggers, Node } from '../utils/index.mjs';

const head = createLinkedList([1, 2, 3, 4, 5]);

linkedListLoggers(head);

/**
 *
 * @param {Node} head
 * @param {*} k
 */

const rotateList = (head, k) => {
  let pointer = head;
  let len = 1;
  while (pointer.next) {
    len++;
    pointer = pointer.next;
  }

  pointer.next = head;
  pointer = pointer.next;

  let count = 1;
  let n = len - k % len;
  while (pointer.next && count < n) {
    pointer = pointer.next;
    count++;
  }

  const newHead = pointer.next;
  pointer.next = null;

  return newHead
};

const newHead = rotateList(head, 5);

linkedListLoggers(newHead);