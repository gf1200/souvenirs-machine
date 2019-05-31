import React from 'react';

const SouvenirsOutput = ({ souvenirs }) => {
	const finishedSouvenirs = [];
	for (let i = 0; i < souvenirs; i++) {
		finishedSouvenirs.push('📀');
	}

	return (
		<>
			{!!souvenirs && <h2>Your souvenirs:</h2>}
			<p>
				{finishedSouvenirs.map((souvenir, index) => (
					<span key={index}>{souvenir}</span>
				))}
			</p>
		</>
	);
};

export default SouvenirsOutput;
