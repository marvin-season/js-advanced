import { createLinkedList, linkedListLoggers, Node } from '../utils/index.mjs';

const head = createLinkedList([]);

linkedListLoggers(head);

/**
 *
 * @param {Node} head
 * @param {*} k
 */

const rotateList = (head, k) => {
  if (!head || k === 0) {
    return head
  }
  let pointer = head;
  let len = 1;
  while (pointer.next) {
    len++;
    pointer = pointer.next;
  }

  pointer.next = head;
  pointer = pointer.next;

  let count = 1;
  let n = len - (k % len);
  while (pointer.next && count < n) {
    pointer = pointer.next;
    count++;
  }

  head = pointer.next;
  pointer.next = null;

  return head;
};

const newHead = rotateList(head, 2);

linkedListLoggers(newHead);
