// head = [1,2,3,4,5], n = 2

// console.log(head)
// console.log(n)


// const removeNthFromEnd = (head, n) =>{
//     let firstPointer = head
//     let secondPointer = head
//     console.log(firstPointer)
//     while (n > 0) {
//         firstPointer = firstPointer.next
//         n--
//     }
//     if (firstPointer === null) {
//         return head.next
//     }
//     while (firstPointer.next !== null) {
//         firstPointer = firstPointer.next
//         secondPointer = secondPointer.next
//     }
// };
// removeNthFromEnd()



// REMOVE DUPLICATES FROM A SORTED LIST
head = [1,1,2]


var deleteDuplicates = function (head) {
    let dummyNode = new ListNode(-1, head)
    let current = head;
    let previous = dummyNode
    while (current){
        if(current.val === previous.val){
    }
};
}
