import React from 'react';
import Close from '@assets/UI/Icons/close.svg?react';

function CloseButton({ className, onClick }) {
	return (
		<button onClick={onClick} className={className}>
			<Close />
		</button>
	);
}

export default CloseButton;
