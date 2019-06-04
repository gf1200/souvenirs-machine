import React, { Component } from 'react';

const INITIAL_STATE = {
	charge: 2,
	availableSouvenirs: 5,
	acceptedCoins: [1, 2, 5, 10],
	coinsForChange: [1, 2],
	totalSouvenirs: 0,
	totalCoins: 0,
	messageToDisplay: 'Please, put in a coin 💰',
	rest: null,
	inputCoin: ''
};

export default class SouvenirsMachineContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...INITIAL_STATE
		};

		this.textInput = React.createRef();

		this.acceptCoins = this.acceptCoins.bind(this);
		this.inputCoinsHandler = this.inputCoinsHandler.bind(this);
	}

	returnRest() {
		const { totalCoins, coinsForChange } = this.state;
		const { availableCoins, restPocket } = this.getRest(coinsForChange, totalCoins);
		this.setState(({ rest, coinsForChange, totalCoins, messageToDisplay }) => ({
			coinsForChange: availableCoins,
			rest: restPocket,
			totalCoins: 0,
			messageToDisplay: 'Sorry no more coin for change 😔'
		}));
	}

	makeSouvenir() {
		this.setState(({ totalSouvenirs, messageToDisplay }) => ({
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
			restPocket,
			restPocketSum: sumRestPocket()
		};
	}

	isRest() {
		const { charge, totalCoins, coinsForChange } = this.state;
		let rest = totalCoins - charge;

		const { availableCoins, restPocket, restPocketSum } = this.getRest(coinsForChange, rest);

		if (restPocketSum === rest) {
			this.setState(({ rest, coinsForChange }) => ({
				rest: restPocket,
				coinsForChange: availableCoins
			}));
			this.makeSouvenir();
		} else return this.returnRest();
	}

	isCharge() {
		const { totalCoins, charge } = this.state;

		if (totalCoins === charge) return this.makeSouvenir();
		if (totalCoins > charge) return this.isRest();
		else {
			this.setState(({ messageToDisplay, totalCoins, rest }) => ({
				messageToDisplay: `Total paid for now: ${totalCoins} 💰`,
				rest: null
			}));
		}
	}

	acceptCoins() {
		const loaded = this.state.inputCoin;
		let coin = parseFloat(loaded);

		if (this.state.acceptedCoins.some(acceptedCoin => acceptedCoin === coin)) {
			this.setState(
				({ totalCoins, coinsForChange, inputCoin }) => ({
					totalCoins: totalCoins + coin,
					coinsForChange: [...coinsForChange, coin],
					rest: null,
					inputCoin: ''
				}),
				() => this.isCharge()
			);
		} else {
			this.setState(({ messageToDisplay, rest }) => ({
				messageToDisplay: `⚠️ Sorry ${loaded} is not accept. Please put in correct value`,
				rest: null
			}));
		}
	}

	inputCoinsHandler(e) {
		this.setState({ inputCoin: e.target.value });
	}

	render() {
		const {
			messageToDisplay,
			availableSouvenirs,
			totalSouvenirs,
			totalCoins,
			rest,
			charge,
			acceptedCoins,
			inputCoin
		} = this.state;

		let isSouvenir = availableSouvenirs - totalSouvenirs > 0;
		let isInputDisable = !isSouvenir || totalCoins >= 2;

		// if (!messageToDisplay) this.setState({ messageToDisplay: 'Please, put in a coin 💰' });
		// if (!isSouvenir) displayMessage = 'Sorry no more souvenirs 😔';

		return this.props.render(this.state, isInputDisable, this.inputCoinsHandler, this.acceptCoins);
	}
}
