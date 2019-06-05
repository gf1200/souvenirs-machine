import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
	width: 100%;
	padding: 0.75rem;
	border: 1px solid grey;
	:disabled {
		background: #adad85;
		color: #4d4d33;
	}
`;

const Button = ({ text, onClick, disabled }) => (
	<ButtonStyled onClick={onClick} disabled={disabled}>
		{text}
	</ButtonStyled>
);

export default Button;
