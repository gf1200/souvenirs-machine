import React from 'react';
import Level from './shared/Level';
import InputCoins from './InputCoins';
import Button from './shared/Button';

const MainPanel = ({
	isInputDisable,
	acceptedCoins,
	inputCoin,
	inputCoinsHandler,
	acceptCoins,
	takeBackRest,
	rest
}) => {
	return (
		<Level>
			<p>Put coins hear and press START:</p>
			<InputCoins
				disabled={isInputDisable}
				coins={acceptedCoins}
				value={inputCoin}
				onChange={inputCoinsHandler}
			/>

			{!rest ? (
				<Button text='Accept' disabled={isInputDisable} onClick={acceptCoins} />
			) : (
				<Button text='Take rest' onClick={takeBackRest} />
			)}
		</Level>
	);
};

export default MainPanel;
