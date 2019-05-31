import React from 'react';

const RestOutput = ({ rest }) => {
	return (
		<>
			{rest && (
				<p>
					Take Your rest pleas:{' '}
					{rest.map((rest, i) => (
						<span key={i}>{rest}zł </span>
					))}
					💰
				</p>
			)}
		</>
	);
};

export default RestOutput;
