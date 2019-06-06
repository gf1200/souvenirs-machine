import React, { Component } from 'react';
import INITIAL_STATE from '../initialState';
import { isSome, catFromPocket } from '../helpers/getRest';

export default class SouvenirsMachineContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...INITIAL_STATE
		};
		this.acceptCoins = this.acceptCoins.bind(this);
		this.inputCoinsHandler = this.inputCoinsHandler.bind(this);
		this.onTakeBackRest = this.onTakeBackRest.bind(this);
		this.onTakeSouvenirHandler = this.onTakeSouvenirHandler.bind(this);
	}

	returnRest() {
		const { coinsForChange, rest } = this.getRest(this.state.coinsForChange, this.state.totalCoins);
		this.setState({
			coinsForChange,
			rest,
			error: 'Sorry no more coin for change 😔'
		});
	}

	makeSouvenir() {
		this.setState(({ availableSouvenirs, isMade }) => ({
			totalCoins: 0,
			availableSouvenirs: availableSouvenirs - 1,
			isMade: !isMade
		}));
	}

	getRest(pocket, rest) {
		let forRelease = rest,
			restPocket = [],
			sumRestPocket = () => restPocket.reduce((acc, next) => acc + next, 0);

		for (forRelease; forRelease > 0; forRelease--) {
			while (isSome(forRelease, pocket)) {
				const index = pocket.indexOf(forRelease);
				pocket = catFromPocket(index, pocket);
				restPocket.push(forRelease);
				forRelease = rest - sumRestPocket();
			}
		}
		if (sumRestPocket() === rest) {
			return {
				coinsForChange: pocket,
				rest: restPocket
			};
		} else return false;
	}

	isRest() {
		const { charge, totalCoins, coinsForChange } = this.state;
		let rest = totalCoins - charge;
		const isRest = this.getRest(coinsForChange, rest);

		if (isRest) {
			this.setState({
				rest: isRest.rest,
				coinsForChange: isRest.coinsForChange
			});
			this.makeSouvenir();
		} else return this.returnRest();
	}

	isCharge() {
		const { totalCoins, charge } = this.state;
		if (totalCoins === charge) return this.makeSouvenir();
		if (totalCoins > charge) return this.isRest();
	}

	acceptCoins() {
		const loaded = this.state.inputCoin;
		let coin = parseFloat(loaded);

		if (isSome(coin, this.state.acceptedCoins)) {
			this.setState(
				({ totalCoins, coinsForChange }) => ({
					totalCoins: totalCoins + coin,
					coinsForChange: [...coinsForChange, coin],
					inputCoin: '',
					error: null
				}),
				() => this.isCharge()
			);
		} else {
			this.setState({
				error: `⚠️ Sorry ${loaded} is not accept. Please put in correct value`
			});
		}
	}

	inputCoinsHandler(e) {
		this.setState({ inputCoin: e.target.value });
	}

	onTakeBackRest() {
		this.setState({ totalCoins: 0, error: null, rest: null });
	}

	onTakeSouvenirHandler() {
		this.setState({ isMade: false });
	}

	render() {
		const { state, inputCoinsHandler, acceptCoins, onTakeBackRest, onTakeSouvenirHandler } = this;

		const { availableSouvenirs, isMade, rest } = state;
		let isInputDisable = !availableSouvenirs || isMade || rest ? true : false;

		return this.props.render({
			state,
			isInputDisable,
			inputCoinsHandler,
			acceptCoins,
			onTakeBackRest,
			onTakeSouvenirHandler
		});
	}
}
