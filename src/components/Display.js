import React from 'react';
import styled from 'styled-components';

const LCDDisplay = styled.div`
	background: #003300;
	border-radius: 0.5rem;
	color: white;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	padding: 1rem;
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
