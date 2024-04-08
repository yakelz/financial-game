import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Background.module.css';

function Background({ src }) {
	const fading = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		reset: true,
	});

	return (
		<animated.div
			className={styles.background}
			style={{
				...fading,
				backgroundImage: `url(${src})`,
			}}
		></animated.div>
	);
}

export default Background;
