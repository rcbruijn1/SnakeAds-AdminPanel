
export const compressArray = array => {
	const compressed = [];
	const copy = array;

	array.map(item => {
		let count = 0;

		copy.map((copie, index) => {

			if (item.Record.advertisementId === copie.Record.advertisementId) {
				count = count += 1
				delete copy[index];
			}
		});

		if (count > 0) {
			const a = {};
			a.id = item.Record.advertisementId;
			a.advertiserId = item.Record.advertiserId;
			a.publisherId = item.Record.publisherId;
			a.clicks = count;
			compressed.push(a);
		}
	});
	
	return compressed;
};