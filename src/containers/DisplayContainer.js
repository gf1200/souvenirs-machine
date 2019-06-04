import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RestOutput from '../components/RestOutput';

// w zalezności od stanu >>  przekaż info >> do wyświetlenia

const DisplayContainer = ({ render, error, rest, charge, totalCoins, availableSouvenirs, acceptedCoins }) => {
	let messageToDisplay = ['Commemorative coin', `Only PLN ${charge}`];

	if (error) messageToDisplay = [error];
	if (rest) messageToDisplay.push(<RestOutput rest={rest} />);
	if (totalCoins && totalCoins < charge) messageToDisplay.push(`Total paid for now: ${totalCoins} 💰`);

	return render(messageToDisplay.map(info => <p>{info}</p>));
};

DisplayContainer.propTypes = {
	render: PropTypes.func.isRequired,
	error: PropTypes.string
};

export default DisplayContainer;
