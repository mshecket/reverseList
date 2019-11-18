/*
 * Leetcode Problem 206. Reverse Linked List
 * 
 * https://leetcode.com/problems/reverse-linked-list/
 * 
 * Submission: https://leetcode.com/submissions/detail/272536891/
 * 
 * Reverse a singly linked list.
 *
 * Example:
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var currentNode = head;
    
    if (head == null)
        return null;
    
    var output = new ListNode(currentNode.val);

    var nextNode = new ListNode();

    while (currentNode.next != null)
        {
            currentNode = currentNode.next;
            nextNode = new ListNode(currentNode.val);
            nextNode.next = output;
            output = nextNode;
        }
    return output;
};
