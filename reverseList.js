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
    // Initialize a node pointer with the head node
    var currentNode = head;
    // Check whether the list is empty, and, if
    // so, return null
    if (head == null)
        return null;
    // Initialize a node for our output that begins
    // with a value the same as our first value
    // and next set to null
    var output = new ListNode(currentNode.val);
    // Initialize a placeholder to start building
    // our reversed list
    var nextNode = new ListNode();
    // Iterate until we reach the end of the list
    // that was passed to us
    while (currentNode.next != null)
        {
            // Advance to the next node in the list
            // we were given
            currentNode = currentNode.next;
            // Set our placeholder to hold the value
            // at the current node in the input list
            nextNode = new ListNode(currentNode.val);
            // But, cruically, link to the output we
            // have currently as the next node
            nextNode.next = output;
            // And refresh our output node with
            // the placeholder
            output = nextNode;
        }
    // Return the reversed list we've created
    return output;
};
