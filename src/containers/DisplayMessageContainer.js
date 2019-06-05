import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RestOutput from '../components/RestOutput';

const DisplayMessageContainer = ({ render, error, rest, charge, totalCoins, isMade, availableSouvenirs }) => {
	let messageToDisplay = [
		'Commemorative coin',
		`Available souvenirs: ${availableSouvenirs}`,
		`Only: ${charge} zł`
	];

	if (error) messageToDisplay = [error];
	if (rest) messageToDisplay.push(<RestOutput rest={rest} />);
	if (!availableSouvenirs) messageToDisplay.push(`Sorry no more souvenirs 😔`);
	if (totalCoins && totalCoins < charge) messageToDisplay.push(`Total paid for now: ${totalCoins} 💰`);
	if (isMade) messageToDisplay.push(`The souvenir was released 🌈`);

	const message = messageToDisplay.map((info, i) => <p key={i}>{info}</p>);
	return render(message);
};

DisplayMessageContainer.propTypes = {
	render: PropTypes.func.isRequired,
	error: PropTypes.string
};

export default DisplayMessageContainer;
