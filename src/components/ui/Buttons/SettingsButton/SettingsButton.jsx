import React, { useState } from 'react';

import SettingsIcon from '@assets/UI/Buttons/settings.svg?react';
import styles from './SettingsButton.module.css';

import { useSpring, animated } from 'react-spring';

function SettingsButton({ onClick }) {
	// const buttonAnimation = useSpring({
	// 	from: { transform: 'translateX(-100%)' },
	// 	to: { transform: 'translateX(0)' },
	// 	delay: 1300,
	// });

	return (
		<>
			{/* <animated.div style={buttonAnimation}> */}
			<button className={styles.button} onClick={onClick}>
				<SettingsIcon />
			</button>
			{/* </animated.div> */}
		</>
	);
}

export default SettingsButton;
