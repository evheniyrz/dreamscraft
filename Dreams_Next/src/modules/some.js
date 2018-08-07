function sum(...numbers) {
	let sum = null;
	for(let item of numbers){
		 sum += item;
	}
	return sum;
}	
function averidge(...numbers) {
	return sum(...numbers) / numbers.length;
}
export default averidge;