let array = [123, 234,345, 567, 678]


var heapLength = 100000;

function setDoughter(i){
	let iLeft = array[i*2+1];
	let iRight = array[i*2+2];
	
	if(i*2+1 < array.length){
		setDoughter(i*2+1);
		if(iLeft > iRight && iLeft>array[i]){
			let res = array[i];
			array[i] = iLeft;
			iLeft = res
		}
	}
	if(i*2+2 < array.length){
		setDoughter(i*2+2);
		if(iLeft < iRight && iRight>array[i]){
			let res = array[i];
			array[i] = iRight;
			iRight = res;
		}
		
	}
	if(iLeft<iRight){
		let res = iLeft;
		iLeft = iRight;
		iRight = res;
	}
}

function refactor(i){
	setDoughter(i+1)
}

setDoughter(0);
for( var i = 0; i<heapLength-1; i++){
	setDoughter(i);
}

console.log(array.join(" "));