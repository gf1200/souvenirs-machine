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
	totalSouvenirs: 20,
	coinsForChange: {
		one: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		two: [2, 2, 2, 2, 2],
		five: []
	}
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE, totalCoins: 0, messageToDisplay: '' };

		this.textInput = React.createRef();
		this.acceptCoins = this.acceptCoins.bind(this);
	}

	acceptCoins() {
		const loaded = this.textInput.current.value;
		let coin = parseFloat(loaded);

		if (coin === 1 || coin === 2 || coin === 5) {
			this.setState(({ totalCoins }) => ({ totalCoins: totalCoins + coin }));
		} else {
			this.setState(({ messageToDisplay }) => ({
				messageToDisplay: `Sorry ${loaded} is not accept. Please put in correct value`
			}));
		}
	}

	render() {
		const { messageToDisplay, totalSouvenirs, totalCoins } = this.state;

		let displayMessage = messageToDisplay;
		if (!messageToDisplay) displayMessage = 'Please, put in a coin';

		// if (!totalSouvenirs) messageToDisplay = 'The machine is closed, no souvenirs inside. Sorry.';

		console.log(this.state);
		return (
			<>
				<h1>Commemorative coin only PLN 2</h1>

				<Display>{displayMessage}</Display>
				<Level>
					<p>Put coins hear and press START:</p>
					<input
						type='text'
						ref={this.textInput}
						disabled={!totalSouvenirs || totalCoins >= 2}
						placeholder='PLN: 1,2 or 5'
					/>
					<button onClick={this.acceptCoins}>START</button>
				</Level>
			</>
		);
	}
}

export default App;
