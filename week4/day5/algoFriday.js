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


head = [1,1,2]


var deleteDuplicates = function (head) {
    let current = head;
    while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
        current.next = current.next.next;
    } else {
        current = current.next;
    } 
    }
    return head;
};