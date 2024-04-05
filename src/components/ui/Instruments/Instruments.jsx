import React from 'react';
import Phone from './Phone';
import Calendar from './Calendar';
import Map from './Map';

import styles from './Instruments.module.css';

function Instruments() {
	return (
		<ul className={styles.instruments}>
			<li>
				<Phone />
			</li>
			<li>
				<Calendar />
			</li>
			<li>
				<Map />
			</li>
		</ul>
	);
}

export default Instruments;
