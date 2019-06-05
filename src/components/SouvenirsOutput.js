import React from 'react';
import Button from './shared/Button';

const SouvenirsOutput = ({ isMade, takeSouvenir }) =>
	isMade && (
		<div>
			<h2>
				Your souvenir is here: <span>📀</span>
			</h2>
			<Button text={`I'm taking it now`} onClick={takeSouvenir} />
		</div>
	);

export default SouvenirsOutput;
