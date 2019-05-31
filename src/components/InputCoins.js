import React from 'react';
import styled from 'styled-components';

const InputCoins = ({ disabled, coins, onChange, value }) => {
	coins = coins.join(', ');
	return (
		<>
			<input
				type='text'
				onChange={onChange}
				value={value}
				disabled={disabled}
				placeholder={`PLN: ${coins}`}
			/>
		</>
	);
};

export default InputCoins;
