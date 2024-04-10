// import React from 'react';
// import styles from './Background.module.css';

// function Background({ src }) {
// 	return <div className={styles.background} style={{ backgroundImage: `url(${src})` }}></div>;
// }

// export default Background;

import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Background.module.css';

function Background({ src }) {
	const fading = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
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
