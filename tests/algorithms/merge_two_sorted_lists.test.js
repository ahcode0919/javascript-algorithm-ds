import {
  ListNode,
  mergeTwoLists,
} from '../../src/algorithms/arrays/merge_two_sorted_lists';

function createList(arr) {
  const head = new ListNode(arr[0]);
  let tail = head;
  for (let i = 1; i < arr.length; i += 1) {
    const newNode = new ListNode(arr[i]);
    tail.next = newNode;
    tail = newNode;
  }
  return head;
}

function getList(node) {
  const list = [];
  let currentNode = node;
  while (currentNode != null) {
    list.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return list;
}

test('should merge two arrays', () => {
  const l1 = createList([1, 2, 5, 8]);
  const l2 = createList([2, 3, 4, 6]);
  const ans = getList(mergeTwoLists(l1, l2));
  expect(ans).toEqual([1, 2, 2, 3, 4, 5, 6, 8]);
});
