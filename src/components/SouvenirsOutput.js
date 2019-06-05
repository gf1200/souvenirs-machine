import React from 'react';
import Button from './shared/Button';

const SouvenirsOutput = ({ isMade }) =>
	isMade && (
		<h2>
			Your souvenir is here: <span>📀</span>
			<Button text={`I'm taking it now`} />
		</h2>
	);

export default SouvenirsOutput;
