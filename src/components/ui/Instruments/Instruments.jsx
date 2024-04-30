import React, { useState } from 'react';
import Phone from './Phone';
import Calendar from './Calendar';
import Map from './Map';

import styles from './Instruments.module.css';
import RightArrow from '@assets/UI/Icons/right_arrow.svg?react';
import LeftArrow from '@assets/UI/Icons/left_arrow.svg?react';

function Instruments({ isActive, setActive }) {
	const toggleActive = () => setActive(!isActive);

	return (
		<div className={`${styles.instruments} ${isActive ? styles.active : ''}`}>
			<ul>
				<li>
					<Phone />
				</li>
				<li>
					<Calendar />
				</li>
				<li className={styles.map}>
					<Map />
				</li>
			</ul>
			<button onClick={toggleActive}>{isActive ? <LeftArrow /> : <RightArrow />}</button>
		</div>
	);
}

export default Instruments;
