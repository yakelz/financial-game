import React, { useEffect, useState } from 'react';
import styles from './SettingsModal.module.css';

import { useAudio } from '@core/audio/AudioContext';

const SettingsModal = ({ onClose }) => {
	const {
		musicVolume,
		setMusicVolume,
		effectsVolume,
		setEffectsVolume,
		voiceVolume,
		setVoiceVolume,
		isMuted,
		toggleMute,
	} = useAudio();

	return (
		<div className={styles.modalBackground}>
			<div className={styles.modal}>
				<h2>Настройки</h2>

				<div>
					<label>Mute All Sounds:</label>
					<input type='checkbox' checked={isMuted} onChange={toggleMute} />
				</div>
				<div>
					<label>Music Volume:</label>
					<input
						type='range'
						min='0'
						max='1'
						step='0.01'
						value={musicVolume}
						onChange={(e) => setMusicVolume(parseFloat(e.target.value))}
						disabled={isMuted}
					/>
				</div>
				<div>
					<label>Effects Volume:</label>
					<input
						type='range'
						min='0'
						max='1'
						step='0.01'
						value={effectsVolume}
						onChange={(e) => setEffectsVolume(parseFloat(e.target.value))}
						disabled={isMuted}
					/>
				</div>
				<div>
					<label>Voice Volume:</label>
					<input
						type='range'
						min='0'
						max='1'
						step='0.01'
						value={voiceVolume}
						onChange={(e) => setVoiceVolume(parseFloat(e.target.value))}
						disabled={isMuted}
					/>
				</div>

				<button onClick={onClose}>Закрыть</button>
			</div>
		</div>
	);
};

export default SettingsModal;
