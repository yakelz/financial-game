import React from 'react';
import { useSpring, animated } from 'react-spring';

import PlayIcon from '@assets/UI/Buttons/play.svg?react';
import styles from './PlayButton.module.css';

function PlayButton({ onClick }) {
	const buttonAnimation = useSpring({
		from: { transform: 'translateX(180%)' },
		to: { transform: 'translateX(0)' },
		delay: 2000,
	});

	return (
		<animated.div style={buttonAnimation} className={styles.button}>
			<button onClick={onClick}>
				<PlayIcon />
			</button>
		</animated.div>
	);
}

export default PlayButton;
