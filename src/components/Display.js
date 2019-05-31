import React from 'react';
import styled from 'styled-components';

const LCDDisplay = styled.div`
	background: grey;
	padding: 0.5rem;
	margin: 1rem 0;
`;

const Display = ({ messageToDisplay, charge }) => {
	return (
		<div>
			<h1>Commemorative coin only PLN {charge}</h1>
			<LCDDisplay>{messageToDisplay}</LCDDisplay>
		</div>
	);
};

export default Display;
