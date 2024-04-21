import React from 'react';
import Close from '@assets/UI/Icons/close.svg?react';

import styles from './CloseButton.module.css';

function CloseButton({ className, onClick }) {
	return (
		<button onClick={onClick} className={`${styles.closeButton} ${className}`}>
			<Close />
		</button>
	);
}

export default CloseButton;
