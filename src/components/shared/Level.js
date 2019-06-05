import React from 'react';
import styled from 'styled-components';

const StyledLevel = styled.div`
	margin: 1rem 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	background: #999966;
	padding: 1rem;
`;

const Level = ({ children }) => {
	return <StyledLevel>{children}</StyledLevel>;
};

export default Level;
