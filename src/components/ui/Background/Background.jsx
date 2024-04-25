// import React from 'react';
// import styles from './Background.module.css';

// function Background({ src }) {
// 	return <div className={styles.background} style={{ backgroundImage: `url(${src})` }}></div>;
// }

// export default Background;

import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Background.module.css';

function Background({ src, children }) {
	const fading = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: {
			friction: 10,
			tension: 50,
		},
	});

	return (
		<animated.div
			className={styles.background}
			style={{
				...fading,
				backgroundImage: `url(${src})`,
			}}
		>
			{children}
		</animated.div>
	);
}

export default Background;
