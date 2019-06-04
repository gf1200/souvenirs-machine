import React from 'react';

const RestOutput = ({ rest }) => {
	return (
		<>
			{rest && (
				<p>
					Take Your rest pleas in PLN:
					{rest.map((rest, i) => (
						<span key={i}>{rest} </span>
					))}
					💰
				</p>
			)}
		</>
	);
};

export default RestOutput;
