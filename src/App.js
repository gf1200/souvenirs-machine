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
	availableSouvenirs: 20,
	coinsForChange: {
		one: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		two: [2, 2, 2, 2, 2],
		five: []
	}
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE, totalSouvenirs: 0, totalCoins: 0, messageToDisplay: '' };

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

	isCharge() {
		if (this.state.totalCoins === this.state.charge) return this.makeSouvenir();
		console.log('Czy możliwa reszta?');
	}

	acceptCoins() {
		const loaded = this.textInput.current.value;
		let coin = parseFloat(loaded);

		if (coin === 1 || coin === 2 || coin === 5) {
			this.setState(
				({ totalCoins }) => ({ totalCoins: totalCoins + coin }),
				() => (this.state.totalCoins >= this.state.charge ? this.isCharge() : null)
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
			</>
		);
	}
}

export default App;
