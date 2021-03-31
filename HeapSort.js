let array = [123, 234,345, 567, 678];
let arrayLength = array.length;
let newArray = [];
function setDoughter(iter){
	var iLeft = iter*2+1;
	var iRight = iter*2+2;
	var res = 0;

	if(iLeft < arrayLength-1){
		setDoughter(iLeft);
	}
	if(array[iLeft] > array[iRight] && array[iLeft]>array[iter]){
		res = array[iter];
		array[iter] = array[iLeft];
		array[iLeft] = res
	}
	
	if(iRight < arrayLength-1){
		setDoughter(iRight);
	}
	if(array[iLeft] < array[iRight] && array[iRight]>array[iter]){
		res = array[iter];
		array[iter] = array[iRight];
		array[iRight] = res;
	}

	if(array[iLeft]<array[iRight]){
		res = array[iLeft];
		array[iLeft] = array[iRight];
		array[iRight] = res;
	}
}

function start(){
	var i=0;
	while(array[0]!=null){
		setDoughter(0);
		newArray.push(array[0]);
		array.splice(0, 1);
	}
}

start();

console.log(newArray.join(" "));