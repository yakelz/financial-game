import React, { useEffect, useRef } from 'react';

import styles from './IntroVideo.module.css';
import { useAudio } from '@core/audio/AudioContext';

function IntroVideo({ onSkip }) {
	const videoRef = useRef(null);
	const { musicVolume } = useAudio();

	useEffect(() => {
		// Autoplay при загрузке компонента
		if (videoRef.current) {
			videoRef.current.play().catch((error) => {
				// Если autoplay не сработал
				console.error('Ошибка воспроизведения видео: ', error);
			});
			videoRef.current.volume = musicVolume;
		}
	}, [musicVolume]);

	return (
		<div className={styles.video}>
			<video ref={videoRef} width='100%' height='100%' autoPlay onEnded={onSkip} playsInline>
				<source src='./Video/intro.mp4' type='video/mp4' />
				Ваш браузер не поддерживает видеотег.
			</video>
			<button onClick={onSkip} className={styles.button}>
				Пропустить
			</button>
		</div>
	);
}

export default IntroVideo;
