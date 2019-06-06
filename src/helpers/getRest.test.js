import INITIAL_STATE from '../initialState';
import getRest from './getRest';
import { isSome, catFromPocket } from './getRest';

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
