export const isSome = (coin, availableCoins) =>
  availableCoins.some(availableCoin => availableCoin === coin);

export const catFromPocket = (index, pocket = []) => [
  ...pocket.slice(0, index),
  ...pocket.slice(index + 1)
];

export const getRest = (pocket = [], rest) => {
  let restPocket = [],
    largestSingleValue = rest;
  const sumRestPocket = () => restPocket.reduce((acc, next) => acc + next, 0);

  for (largestSingleValue; largestSingleValue > 0; largestSingleValue--) {
    while (isSome(largestSingleValue, pocket)) {
      const findIndex = pocket.indexOf(largestSingleValue);
      pocket = catFromPocket(findIndex, pocket);
      restPocket.push(largestSingleValue);
      largestSingleValue = rest - sumRestPocket();
    }
  }
  if (sumRestPocket() === rest) {
    return {
      pocket,
      restPocket
    };
  } else return false;
};
