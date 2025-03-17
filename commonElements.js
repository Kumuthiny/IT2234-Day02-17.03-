//a = [4,5,6,3,7]
//b = [8,3,2,1,5]
//find the common elements bwn a & b

let a = [4,5,6,3,7]
let b = [8,3,2,1,5]

for (let n =0; n <a.length; n++){
	for (let i =0; i <b.length; i++){
		if (a[n] ==  b[i])
		console.log(a[n])
	}
}

console.log() 

 a.forEach((n) => {
	b.forEach((i) =>{
		if (n==i)
			console.log(n)
	})
}) 
