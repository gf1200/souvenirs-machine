export const isSome = (coin, availableCoins) => availableCoins.some(availableCoin => availableCoin === coin);

export const catFromPocket = (index, pocket) => [...pocket.slice(0, index), ...pocket.slice(index + 1)];

const getRest = (availableCoins = [], rest) => {
	return rest;
};

export default getRest;
