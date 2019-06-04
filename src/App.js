import React from 'react';
import SouvenirsMachineContainer from './containers/SouvenirsMachineContainer';

import Display from './components/Display';
import MainPanel from './components/MainPanel';
import SouvenirsOutput from './components/SouvenirsOutput';
import RestOutput from './components/RestOutput';

const App = () => {
	return (
		<>
			<SouvenirsMachineContainer
				render={(state, isInputDisable, inputCoinsHandler, acceptCoins) => (
					<>
						<Display
							messageToDisplay={state.messageToDisplay}
							charge={state.charge}
						/>
						<MainPanel
							isInputDisable={isInputDisable}
							acceptedCoins={state.acceptedCoins}
							inputCoin={state.inputCoin}
							inputCoinsHandler={inputCoinsHandler}
							acceptCoins={acceptCoins}
						/>
						<SouvenirsOutput souvenirs={state.totalSouvenirs} />
						<RestOutput rest={state.rest} />
					</>
				)}
			/>
		</>
	);
};

export default App;
