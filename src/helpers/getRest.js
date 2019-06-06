export const checkIsCoinAvailable = (coin, availableCoins) =>
	availableCoins.some(availableCoin => availableCoin === coin);

const getRest = (availableCoins = [], rest) => {
	return rest;
};

export default getRest;
