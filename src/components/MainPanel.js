import React from 'react';
import Level from './shared/Level';
import InputCoins from './InputCoins';
import Button from './shared/Button';

const MainPanel = ({ isInputDisable, acceptedCoins, inputCoin, inputCoinsHandler, acceptCoins }) => {
	return (
		<Level>
			<p>Put coins hear and press START:</p>
			<InputCoins
				disabled={isInputDisable}
				coins={acceptedCoins}
				value={inputCoin}
				onChange={inputCoinsHandler}
			/>
			<Button text='Accept' disabled={isInputDisable} onClick={acceptCoins} />
		</Level>
	);
};

export default MainPanel;
