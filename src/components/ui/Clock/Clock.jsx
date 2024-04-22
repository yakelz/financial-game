import React from 'react';

import clock from '@assets/UI/Icons/clock.svg';
import useGameStore from '@core/store/useGameStore';
import styles from './Clock.module.css';

function Clock() {
	const { actions, currentActionIndex } = useGameStore();
	const currentAction = actions[currentActionIndex];

	return (
		<>
			<div className={styles.clockContainer}>
				<span className={styles.clockText}>{currentAction.time}</span>
				<img className={styles.clock} src={clock} alt='Часы' />
			</div>
		</>
	);
}

export default Clock;
