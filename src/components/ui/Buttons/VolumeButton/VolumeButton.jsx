import React, { useState } from 'react';

import VolumeOn from '@assets/UI/Buttons/volume_on.svg?react';
import VolumeOff from '@assets/UI/Buttons/volume_off.svg?react';
import styles from './VolumeButton.module.css';

import { useAudio } from '@utils/AudioContext';

function VolumeButton() {
	const { isMuted, toggleMute } = useAudio();

	return (
		<>
			<button className={styles.button} onClick={toggleMute}>
				{isMuted ? <VolumeOff /> : <VolumeOn />}
			</button>
		</>
	);
}

export default VolumeButton;
