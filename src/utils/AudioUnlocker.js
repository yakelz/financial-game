import { useContext, useRef, useEffect } from 'react';
import { useAudio } from '@utils/AudioContext';

export const useAudioUnlocker = () => {
	const hasAudioBeenUnlocked = useRef(false);
	const { setMusicSource } = useAudio();

	useEffect(() => {
		const unlockAudio = () => {
			if (!hasAudioBeenUnlocked.current) {
				setMusicSource('./Audio/Music/bi2.mp3');
				document.removeEventListener('click', unlockAudio);
				hasAudioBeenUnlocked.current = true;
			}
		};

		document.addEventListener('click', unlockAudio);

		return () => {
			document.removeEventListener('click', unlockAudio);
		};
	}, [setMusicSource]);
};
