import React from 'react';
import styled from 'styled-components';

const LCDDisplay = styled.div`
	background: #003300;
	color: white;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	padding: 0.5rem;
	margin: 1rem 0;
`;

const Display = ({ message }) => {
	return (
		<article>
			<LCDDisplay>{message}</LCDDisplay>
		</article>
	);
};

export default Display;
