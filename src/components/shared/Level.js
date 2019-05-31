import React from 'react';
import styled from 'styled-components';

const StyledLevel = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Level = ({ children }) => {
	return <StyledLevel>{children}</StyledLevel>;
};

export default Level;
