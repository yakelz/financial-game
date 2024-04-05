import React from 'react';
import styles from './Gamebar.module.css';

import Character from '../Character/Character';
import Clock from '../Clock/Clock';
import Instruments from '../Instruments/Instruments';
import SettingsButton from '../Buttons/SettingsButton/SettingsButton';

function Gamebar() {
	return (
		<>
			<SettingsButton />
			<Character />
			<div className={styles.gamebar}>
				<Clock />
				<Instruments />
			</div>
		</>
	);
}

export default Gamebar;
