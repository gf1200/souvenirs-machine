import React from 'react';
import SouvenirsMachineContainer from './containers/SouvenirsMachineContainer';

import DisplayContainer from './containers/DisplayContainer';
import Display from './components/Display';
import MainPanel from './components/MainPanel';
import SouvenirsOutput from './components/SouvenirsOutput';

const App = () => {
	return (
		<>
			<SouvenirsMachineContainer
				render={(
					state,
					isInputDisable,
					inputCoinsHandler,
					acceptCoins,
					onTakeBackRest,
					onTakeSouvenirHandler
				) => (
					<>
						<DisplayContainer
							{...state}
							render={message => <Display message={message} />}
						/>

						<MainPanel
							isInputDisable={isInputDisable}
							acceptedCoins={state.acceptedCoins}
							inputCoin={state.inputCoin}
							inputCoinsHandler={inputCoinsHandler}
							acceptCoins={acceptCoins}
							takeBackRest={onTakeBackRest}
							rest={state.rest}
						/>
						<SouvenirsOutput
							isMade={state.isMade}
							takeSouvenir={onTakeSouvenirHandler}
						/>
					</>
				)}
			/>
		</>
	);
};

export default App;
