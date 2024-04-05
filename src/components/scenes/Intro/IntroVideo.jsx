import React, { useEffect, useRef } from 'react';

import { useAudio } from '@utils/AudioContext';

function IntroVideo({ onSkip }) {
	const videoRef = useRef(null);
	const { musicVolume } = useAudio();

	useEffect(() => {
		// Попытка автоматически воспроизвести видео при загрузке компонента
		if (videoRef.current) {
			videoRef.current.play().catch((error) => {
				// Обработка ошибки, если автовоспроизведение не удалось
				console.error('Ошибка воспроизведения видео: ', error);
			});
			videoRef.current.volume = musicVolume;
		}
	}, []);

	return (
		<div
			style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000 }}
		>
			<video ref={videoRef} width='100%' height='100%' autoPlay onEnded={onSkip}>
				<source src='./Video/intro.mp4' type='video/mp4' />
				Ваш браузер не поддерживает видеотег.
			</video>
			<button
				onClick={onSkip}
				style={{ position: 'absolute', left: '50%', bottom: '20%', zIndex: 1001 }}
			>
				Пропустить
			</button>
		</div>
	);
}

export default IntroVideo;
