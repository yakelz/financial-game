import React, { useState } from 'react';
import styles from './Gamebar.module.css';
import { isMobile } from 'react-device-detect';

import Character from '../Character/Character';
import Clock from '../Clock/Clock';
import Instruments from '../Instruments/Instruments';
import VolumeButton from '../Buttons/VolumeButton/VolumeButton';
import Settings from '@scenes/Settings/Settings';

function Gamebar() {
	const [isActive, setActive] = useState(!isMobile);
	return (
		<>
			<Settings />
			<VolumeButton />
			<Character />
			<div className={`${styles.gamebar} ${isActive ? styles.active : ''}`}>
				<Clock />
			</div>
			<Instruments isActive={isActive} setActive={setActive} />
		</>
	);
}

export default Gamebar;
