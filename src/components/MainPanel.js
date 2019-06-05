import React from 'react';
import Level from './shared/Level';
import InputCoins from './InputCoins';
import Button from './shared/Button';

const MainPanel = ({ isInputDisable, acceptedCoins, inputCoin, inputCoinsHandler, acceptCoins }) => {
	return (
		<div>
			<Level>
				<p>Put coins hear and press Accept:</p>
				<InputCoins
					disabled={isInputDisable}
					coins={acceptedCoins}
					value={inputCoin}
					onChange={inputCoinsHandler}
				/>
			</Level>
			<Button text='Accept' disabled={isInputDisable} onClick={acceptCoins} />
		</div>
	);
};

export default MainPanel;
