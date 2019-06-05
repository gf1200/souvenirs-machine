import React from 'react';
import Button from './shared/Button';

const SouvenirsOutput = ({ isMade, takeSouvenir, takeBackRest, rest }) => (
	<div>
		{isMade && (
			<div>
				<h2>
					Your souvenir is here: <span>📀</span>
				</h2>
				<Button text={`I'm taking it now`} onClick={takeSouvenir} />
			</div>
		)}

		{rest && <Button text='Take rest' onClick={takeBackRest} />}
	</div>
);

export default SouvenirsOutput;
