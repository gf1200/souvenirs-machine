import React from 'react';
import styled from 'styled-components';

const InputSyled = styled.input`
	padding: 0.75rem;
`;

const InputCoins = ({ disabled, coins, onChange, value }) => {
	coins = coins.join(', ');
	return (
		<>
			<InputSyled
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
