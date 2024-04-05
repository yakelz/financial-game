import React, { useEffect } from 'react';
import styles from './SettingsModal.module.css';

import { useAudio } from '@utils/AudioContext';

const SettingsModal = ({ onClose }) => {
	const {
		musicVolume,
		setMusicVolume,
		effectsVolume,
		setEffectsVolume,
		voiceVolume,
		setVoiceVolume,
	} = useAudio();

	// Сохранение в localStorage при изменении громкости
	useEffect(() => {
		localStorage.setItem('musicVolume', musicVolume.toString());
		localStorage.setItem('effectsVolume', effectsVolume.toString());
		localStorage.setItem('voiceVolume', voiceVolume.toString());
	}, [musicVolume, effectsVolume, voiceVolume]);

	return (
		<div className={styles.modalBackground}>
			<div className={styles.modal}>
				<h2>Настройки</h2>

				<div>
					<label>Music Volume:</label>
					<input
						type='range'
						min='0'
						max='1'
						step='0.01'
						value={musicVolume}
						onChange={(e) => setMusicVolume(parseFloat(e.target.value))}
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
					/>
				</div>

				<button onClick={onClose}>Закрыть</button>
			</div>
		</div>
	);
};

export default SettingsModal;
