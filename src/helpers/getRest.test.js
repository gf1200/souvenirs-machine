import INITIAL_STATE from '../initialState';

import { getRest, isSome, catFromPocket } from './getRest';

const { acceptedCoins } = INITIAL_STATE;

describe(`Check available current coin in accepted coins: ${acceptedCoins}`, () => {
  it(`coin: 1 is available`, () => {
    expect(isSome(1, acceptedCoins)).toBeTruthy();
  });
  it(`coin: 3 it is not available`, () => {
    expect(isSome(3, acceptedCoins)).toBeFalsy();
  });
});

describe(`It can cut number from pocket after giving index`, () => {
  it(`Cut 2 from index 1`, () => {
    expect(catFromPocket(1, [1, 2, 3, 4, 5])).toEqual([1, 3, 4, 5]);
  });
  it(`Cut 2 from index 0`, () => {
    expect(catFromPocket(0, [2])).toEqual([]);
  });
});

describe(`Gives the rest from pocket array`, () => {
  it(`Gives rest: 5 in array of, and new input pocket `, () => {
    expect(getRest([1, 2, 2, 1], 5)).toEqual({
      pocket: [1],
      restPocket: [2, 2, 1]
    });
  });
  it(`Gives rest: 3 in array of, and new input pocket `, () => {
    expect(getRest([1, 2, 5], 3)).toEqual({
      pocket: [5],
      restPocket: [2, 1]
    });
  });

  it(`Return false value if not rest in the pocket`, () => {
    expect(getRest([1, 2, 2, 1], 7)).toBeFalsy();
  });
  it(`Checked with empty pocket output`, () => {
    expect(getRest([10], 10)).toEqual({
      pocket: [],
      restPocket: [10]
    });
  });
});
// test('Get rest', () => {
// 	expect(getRest(acceptedCoins)).toEqual([1, 2, 5, 1]);
// });

// bierze dostępne monety do wydania reszty
// bierze liczbę resztę jaką należy wydać

// zwraca zaktualizowane dostępne monety
// zwraca portfel z resztą >> jeżeli jest możliwa do wydania >>> jeżeli nie []

// check f() sprawdż czy badana moneta jest dostępna >> true || folse
// check f() wytnij monetę z dostępnych do wydania
//f() wklej monetę do wydania do portfela klienta
//f() sprawdź ile jest w portfelu klienta
// f() sprawdź czy może wydać resztę
