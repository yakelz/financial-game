import React from 'react';

import styles from './AnimatedBackground.module.css';

import buildings from '@assets/Menu/buildings.svg';
import clouds from '@assets/Menu/clouds.svg';
import grass from '@assets/Menu/grass.svg';

function AnimatedBackground() {
	return (
		<div
			style={{
				position: 'relative',
				width: '100%',
				height: '100vh',
				overflow: 'hidden',
				zIndex: '-1000',
				filter: 'blur(2px)',
			}}
		>
			<div
				className={`${styles.movingBackground} ${styles.buildings}`}
				style={{
					backgroundImage: `url(${buildings})`,
				}}
			/>
			<div
				className={`${styles.movingBackground} ${styles.clouds}`}
				style={{
					backgroundImage: `url(${clouds})`,
				}}
			/>
			<div
				className={`${styles.movingBackground} ${styles.grass}`}
				style={{
					backgroundImage: `url(${grass})`,
				}}
			/>
		</div>
	);
}

export default AnimatedBackground;
