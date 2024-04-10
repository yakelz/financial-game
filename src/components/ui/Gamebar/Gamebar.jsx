import React from 'react';
import styles from './Gamebar.module.css';

import Character from '../Character/Character';
import Clock from '../Clock/Clock';
import Instruments from '../Instruments/Instruments';
import VolumeButton from '../Buttons/VolumeButton/VolumeButton';
import Settings from '@scenes/Settings/Settings';

function Gamebar() {
	return (
		<>
			<Settings />
			<VolumeButton />
			<Character />
			<div className={styles.gamebar}>
				<Clock />
				<Instruments />
			</div>
		</>
	);
}

export default Gamebar;
