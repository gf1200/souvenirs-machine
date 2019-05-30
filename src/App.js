import React from 'react';
import styled from 'styled-components';

const Level = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Display = styled.div`
	background: grey;
	padding: 0.5rem;
	margin: 1rem 0;
`;

const INITIAL_STATE = {
	charge: 2,
	availableSouvenirs: 3,
	acceptedCoins: [1, , 2, 5, 10],
	coinsForChange: [1, , 1, 1, 1, 1, 1, 1, 11, 2]
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			...INITIAL_STATE,
			totalSouvenirs: 0,
			totalCoins: 0,
			messageToDisplay: ''
		};

		this.textInput = React.createRef();
		this.acceptCoins = this.acceptCoins.bind(this);
	}

	makeSouvenir() {
		this.setState(({ totalCoins, totalSouvenirs, messageToDisplay }) => ({
			totalCoins: 0,
			totalSouvenirs: totalSouvenirs + 1,
			messageToDisplay: ''
		}));
	}

	getRest(availableCoins = [], rest) {
		let coinForRest = rest,
			restPocket = [],
			sumRestPocket = () => restPocket.reduce((acc, next) => acc + next, 0);

		for (coinForRest; coinForRest > 0; coinForRest--) {
			while (availableCoins.some(coin => coinForRest === coin)) {
				const indexCoin = availableCoins.indexOf(coinForRest);
				availableCoins = [
					...availableCoins.slice(0, indexCoin),
					...availableCoins.slice(indexCoin + 1)
				];
				restPocket.push(coinForRest);
				coinForRest = rest - sumRestPocket();
			}
		}
		return {
			availableCoins,
			restPocket
		};
	}

	isRest() {
		const { charge, totalCoins, coinsForChange } = this.state;
		let rest = totalCoins - charge;

		this.getRest(coinsForChange, rest);

		// let pocket = coinsForChange;
		// let coinForRest = rest;
		// let restPocket = [];
		// let sumRestPocket = () => restPocket.reduce((acc, next) => acc + next, 0);

		// for (coinForRest; coinForRest > 0; coinForRest--) {
		//   while (pocket.some(coin => coinForRest === coin) && coinForRest > 0) {
		//     const indexCoin = pocket.indexOf(coinForRest);
		//     pocket = [
		//       ...pocket.slice(0, indexCoin),
		//       ...pocket.slice(indexCoin + 1)
		//     ];
		//     restPocket.push(coinForRest);
		//     coinForRest = rest - sumRestPocket();
		//   }
		// }
		// if (rest - sumRestPocket() === 0) {
		//   console.log('mamy reszte:', sumRestPocket());
		// } else {
		//   console.log('nie mamy reszty :(');
		// }

		// console.log(coinForRest, restPocket);
	}

	isCharge() {
		const { totalCoins, charge } = this.state;

		if (totalCoins === charge) return this.makeSouvenir();
		if (totalCoins > charge) return this.isRest();
		else {
			this.setState(({ messageToDisplay, totalCoins }) => ({
				messageToDisplay: `Total paid for now: ${totalCoins} 💰`
			}));
		}
	}

	acceptCoins() {
		const loaded = this.textInput.current.value;
		let coin = parseFloat(loaded);
		this.textInput.current.value = '';

		if (this.state.acceptedCoins.some(acceptedCoin => acceptedCoin === coin)) {
			this.setState(
				({ totalCoins, coinsForChange }) => ({
					totalCoins: totalCoins + coin,
					coinsForChange: [...coinsForChange, coin]
				}),
				() => this.isCharge()
			);
		} else {
			this.setState(({ messageToDisplay }) => ({
				messageToDisplay: `⚠️ Sorry ${loaded} is not accept. Please put in correct value`
			}));
		}
	}

	render() {
		const { messageToDisplay, availableSouvenirs, totalSouvenirs, totalCoins } = this.state;
		let isSouvenir = availableSouvenirs - totalSouvenirs > 0;
		let displayMessage = messageToDisplay;
		if (!messageToDisplay) displayMessage = 'Please, put in a coin 💰';
		if (!isSouvenir) displayMessage = 'Sorry no more souvenirs 😔';

		const finishedSouvenirs = [];
		for (let i = 0; i < totalSouvenirs; i++) {
			finishedSouvenirs.push('📀');
		}

		console.table(this.state);
		return (
			<>
				<h1>Commemorative coin only PLN 2</h1>

				<Display>{displayMessage}</Display>
				<Level>
					<p>Put coins hear and press START:</p>
					<input
						type='text'
						ref={this.textInput}
						disabled={!isSouvenir || totalCoins >= 2}
						placeholder='PLN: 1,2 or 5'
					/>
					<button onClick={this.acceptCoins}>START</button>
				</Level>
				{!!totalSouvenirs && <h2>Your souvenirs:</h2>}
				<p>
					{finishedSouvenirs.map((souvenir, index) => (
						<span key={index}>{souvenir}</span>
					))}
				</p>
			</>
		);
	}
}

export default App;
