import React from 'react';

const RestOutput = ({ rest }) => {
	return (
		<>
			{rest && (
				<>
					Take Your rest pleas:
					{rest.map((rest, i) => (
						<span key={i}> {rest}zł</span>
					))}
					💰
				</>
			)}
		</>
	);
};

export default RestOutput;
