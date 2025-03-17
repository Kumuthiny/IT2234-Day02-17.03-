//print the elements in an array using for loop and forEach loop
let x = [2,4,6,8,10]
let names =["zxcv","bnnk","jhgf","dser","ytuui"]

console.log(x);
console.log()

for(var i =0; i<5; i++){
	console.log(x[i])
}
console.log()

for(var i =0; i < names.length; i++){	
	console.log(names[i])
}
console.log()

x.forEach((n) => {
	console.log(n)
})
console.log()