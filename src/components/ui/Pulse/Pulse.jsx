import React from 'react';
import styles from './Pulse.module.css';

function Pulse({ top, left }) {
	const style = {
		top: `${top}vh`,
		left: `${left}vw`,
	};
	return (
		<div className={styles.pulse} style={style}>
			<div className={styles.pulsating}></div>
		</div>
	);
}

export default Pulse;
