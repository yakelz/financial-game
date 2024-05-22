import React, { useEffect, useState } from 'react';
import styles from './SettingsModal.module.css';
import CloseButton from '@ui/Buttons/CloseButton/CloseButton';
import { useAudio } from '@core/audio/AudioContext';

import SettingsMute from '@assets/UI/Icons/settings_mute.svg?react';
import SettingsMusic from '@assets/UI/Icons/settings_music.svg?react';
import SettingsSound from '@assets/UI/Icons/settings_sound.svg?react';
import SettingsVoice from '@assets/UI/Icons/settings_voice.svg?react';

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

	useEffect(() => {
		const ranges = document.querySelectorAll('input[type="range"]');
		ranges.forEach((range) => {
			range.style.setProperty('--value', `${range.value * 100}%`);
			range.addEventListener('input', (e) => {
				e.target.style.setProperty('--value', `${e.target.value * 100}%`);
			});
		});
	}, []);

	return (
		<div className={styles.modalBackground}>
			<div className={styles.modal}>
				<h2>Настройки</h2>

				{/* <div>
					<SettingsMute />
					<input type='checkbox' checked={isMuted} onChange={toggleMute} />
				</div> */}
				<div>
					<SettingsMusic />
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
					<SettingsSound />
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
					<SettingsVoice />
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
				<CloseButton className={styles.close} onClick={onClose} />
			</div>
		</div>
	);
};

export default SettingsModal;
