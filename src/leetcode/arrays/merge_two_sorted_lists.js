/**
 * Definition for singly-linked list.
 * @param {*} val value
 */
export function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export function mergeTwoLists(l1, l2) {
  let node1 = l1;
  let node2 = l2;
  const head = new ListNode(-1);
  let currentNode = head;

  while (node1 !== null && node2 !== null) {
    if (node1.val <= node2.val) {
      currentNode.next = node1;
      node1 = node1.next;
    } else {
      currentNode.next = node2;
      node2 = node2.next;
    }
    currentNode = currentNode.next;
  }

  if (node1 !== null) {
    currentNode.next = node1;
  }

  if (node2 !== null) {
    currentNode.next = node2;
  }
  return head.next;
}
