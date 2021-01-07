# Arrays

- [Merge Two Sorted Lists](#merge-two-sorted-lists)
- [Two Sum](#two-sum)

## Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: `1->2->4, 1->3->4`
Output: `1->1->2->3->4->4`

```javascript
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
```

## Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

`[2, 7, 11, 15], 9 -> [0, 1]`

```javascript
export function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i += 1) {
        const comp = target - nums[i];
        if (comp in map) {
            return [map[comp], i]
        }
        map[nums[i]] = i;
    }
};
```
