import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Notification.module.css';

function Notification({ onClick, children, isVisible }) {
	const fade = useSpring({
		to: {
			opacity: isVisible ? 1 : 0,
			transform: isVisible ? 'translateY(0)' : 'translateY(-50%)',
		},
		from: {
			opacity: 0,
			transform: 'translateY(-50%)',
		},
		config: { duration: 300 },
	});

	return (
		<div className={styles.container} onClick={onClick}>
			<animated.div style={fade} className={styles.notification}>
				{children}
			</animated.div>
		</div>
	);
}

export default Notification;
