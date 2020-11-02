export const compressArray = array => {
 
	const compressed = [];
	const copy = array;
    console.log(copy);
	for (var i = 0; i < array.length; i++) {
        
        let myCount = 0;	

		for (var w = 0; w < copy.length; w++) {
			if (array[i].Record.advertisementId == copy[w].Record.advertisementId) {
				myCount++;
				delete copy[w];
			}
		}
 
		if (myCount > 0) {
			var a = new Object();
			a.value = array[i];
			a.count = myCount;
			compressed.push(a);
		}
	}
 
	return compressed;
};