import list from '../data/info.json';

const promiseResponse = data =>
	new Promise(resolve => {
		setTimeout(() => {
			resolve(data);
		}, 100);
	});

export const getList = () => promiseResponse(list);
