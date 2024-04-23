import React, { useContext } from 'react';
import { useAudio } from '@core/audio/AudioContext';

import styles from './ArrowButton.module.css';

function ArrowButton({ position, onClick, children }) {
	const { playEffectSound } = useAudio();

	const handleClick = () => {
		playEffectSound('./Audio/Sounds/dig_click_02.wav');
		onClick();
	};

	return (
		<button
			className={styles.button}
			style={{ position: 'fixed', ...position }}
			onClick={handleClick}
		>
			{children}
		</button>
	);
}

export default ArrowButton;
