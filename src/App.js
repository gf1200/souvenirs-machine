import React from 'react';
import SouvenirsMachineContainer from './containers/SouvenirsMachineContainer';

import DisplayMessageContainer from './containers/DisplayMessageContainer';
import Display from './components/Display';
import MainPanel from './components/MainPanel';
import SouvenirsOutput from './components/SouvenirsOutput';
import GlobalStyle from './components/globalStyle';
import AppWrapper from './components/AppWraper';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<AppWrapper>
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
							<DisplayMessageContainer
								{...state}
								render={message => <Display message={message} />}
							/>
							<MainPanel
								isInputDisable={isInputDisable}
								acceptedCoins={state.acceptedCoins}
								inputCoin={state.inputCoin}
								inputCoinsHandler={inputCoinsHandler}
								acceptCoins={acceptCoins}
								rest={state.rest}
							/>
							<SouvenirsOutput
								isMade={state.isMade}
								takeSouvenir={onTakeSouvenirHandler}
								takeBackRest={onTakeBackRest}
								rest={state.rest}
							/>
						</>
					)}
				/>
			</AppWrapper>
		</>
	);
};

export default App;
