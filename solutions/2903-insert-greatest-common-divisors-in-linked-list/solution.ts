/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function gcd(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    let currentNode = head;
    while(currentNode.next) {
        const gcdNode = new ListNode(gcd(currentNode.val, currentNode.next.val), currentNode.next);
        currentNode.next = gcdNode;
        currentNode = gcdNode.next;
    }
    return head;
};
