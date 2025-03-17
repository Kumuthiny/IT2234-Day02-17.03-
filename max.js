//find maximun using foreach

let x = [2,4,6,8,10]
let max = x[0];
x.forEach((n) => {
	/* if (n>max){
		max = n		
	} */	
	(max<n) && (max=n) // shorten form 
})
console.log("Max is "+max)
console.log()