import React from 'react';

import PlayIcon from '@assets/UI/Buttons/play.svg?react';
import styles from './PlayButton.module.css';

function PlayButton({ onClick }) {
	return (
		<button className={styles.button} onClick={onClick}>
			<PlayIcon />
		</button>
	);
}

export default PlayButton;
