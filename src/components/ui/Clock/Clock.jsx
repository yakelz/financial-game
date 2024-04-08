import React from 'react';

import clock from '@assets/UI/Icons/clock.svg';

import styles from './Clock.module.css';

function Clock() {
	return (
		<>
			<img className={styles.clock} src={clock} alt='Часы' />
		</>
	);
}

export default Clock;
