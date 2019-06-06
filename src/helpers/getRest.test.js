import INITIAL_STATE from '../initialState';
import getRest from './getRest';
import { checkIsCoinAvailable } from './getRest';
const { acceptedCoins } = INITIAL_STATE;

describe(`Check available current coin in accepted coins: ${acceptedCoins}`, () => {
	it(`coin: 1 is available`, () => {
		expect(checkIsCoinAvailable(1, acceptedCoins)).toBeTruthy();
	});
	it(`coin: 3 it is not available`, () => {
		expect(checkIsCoinAvailable(3, acceptedCoins)).toBeFalsy();
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
//f() wytnij monetę z dostępnych do wydania
//f() wklej monetę do wydania do portfela klienta
//f() sprawdź ile jest w portfelu klienta
// f() sprawdź czy może wydać resztę
