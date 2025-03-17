//Array operation
//push and pop
/* arr3 ['a','b','c']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3) */

//reverse the array using push and pop
//a,b,c,d -> d,c,b,a

let arr4 = ['a', 'b', 'c', 'd'];
let arr5 = [];

while (arr4.length > 0) {
    arr5.push(arr4.pop()); // Pop from arr4 and push into arr5
}

console.log(arr5); // Output: ['d', 'c', 'b', 'a']
