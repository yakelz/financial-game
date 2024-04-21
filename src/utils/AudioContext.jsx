import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
	const [musicSrc, setMusicSrc] = useState('');
	const [effectSrc, setEffectSrc] = useState('');
	const [voiceSrc, setVoiceSrc] = useState('');

	const [isMuted, setIsMuted] = useState(false);

	const [musicVolume, setMusicVolume] = useState(localStorage.getItem('musicVolume') || 0.2); // Громкость музыки
	const [effectsVolume, setEffectsVolume] = useState(localStorage.getItem('effectsVolume') || 0.2); // Громкость эффектов
	const [voiceVolume, setVoiceVolume] = useState(localStorage.getItem('voiceVolume') || 0.2); // Громкость голоса

	const musicRef = useRef(new Audio());
	const effectRef = useRef(new Audio());
	const voiceRef = useRef(new Audio());

	useEffect(() => {
		// Сохраняю громкость в local storage при их изменении
		localStorage.setItem('musicVolume', musicVolume.toString());
		localStorage.setItem('effectsVolume', effectsVolume.toString());
		localStorage.setItem('voiceVolume', voiceVolume.toString());

		musicRef.current.volume = musicVolume;
		effectRef.current.volume = effectsVolume;
		voiceRef.current.volume = voiceVolume;
	}, [musicVolume, effectsVolume, voiceVolume]);

	useEffect(() => {
		if (musicSrc) {
			musicRef.current.src = musicSrc;
			musicRef.current.play().catch((error) => console.error('Error playing music:', error));
		}
	}, [musicSrc]);

	useEffect(() => {
		if (effectSrc) {
			effectRef.current.src = effectSrc;
			effectRef.current.play().catch((error) => console.error('Error playing effect:', error));
		}
	}, [effectSrc]);

	useEffect(() => {
		if (voiceSrc) {
			voiceRef.current.src = voiceSrc;
			voiceRef.current.play().catch((error) => console.error('Error playing voice:', error));
		}
	}, [voiceSrc]);

	useEffect(() => {
		const musicPlayer = musicRef.current;

		const handleMusicEnd = () => {
			setMusicSrc(null);
		};

		if (musicPlayer) {
			musicPlayer.addEventListener('ended', handleMusicEnd);
		}

		return () => {
			if (musicPlayer) {
				musicPlayer.removeEventListener('ended', handleMusicEnd);
			}
		};
	}, []);

	const playEffectSound = (soundPath) => {
		console.log(effectsVolume);
		const audio = new Audio(soundPath);
		audio.volume = effectsVolume;
		audio.play().catch((error) => console.error('Error playing effect sound:', error));
	};

	// Логика выключения всего звука
	const toggleMute = () => {
		setIsMuted((currentIsMuted) => {
			const newIsMuted = !currentIsMuted;
			localStorage.setItem('isMuted', JSON.stringify(newIsMuted));

			if (newIsMuted) {
				// Сохраняем текущие значения громкости в localStorage перед мутом
				localStorage.setItem('prevMusicVolume', musicVolume.toString());
				localStorage.setItem('prevEffectsVolume', effectsVolume.toString());
				localStorage.setItem('prevVoiceVolume', voiceVolume.toString());

				// Устанавливаем громкость на 0
				setMusicVolume(0);
				setEffectsVolume(0);
				setVoiceVolume(0);
			} else {
				// Восстанавливаем значения громкости из localStorage
				const musicVol = parseFloat(localStorage.getItem('prevMusicVolume') || '0.2');
				const effectsVol = parseFloat(localStorage.getItem('prevEffectsVolume') || '0.2');
				const voiceVol = parseFloat(localStorage.getItem('prevVoiceVolume') || '0.2');

				setMusicVolume(musicVol);
				setEffectsVolume(effectsVol);
				setVoiceVolume(voiceVol);
			}

			return newIsMuted;
		});
	};

	// При первом заходе проверяю состояние звука
	useEffect(() => {
		const savedIsMuted = localStorage.getItem('isMuted') === 'true';
		setIsMuted(savedIsMuted);

		if (!savedIsMuted) {
			const savedMusicVolume = parseFloat(localStorage.getItem('musicVolume') || '0.2');
			const savedEffectsVolume = parseFloat(localStorage.getItem('effectsVolume') || '0.2');
			const savedVoiceVolume = parseFloat(localStorage.getItem('voiceVolume') || '0.2');

			setMusicVolume(savedMusicVolume);
			setEffectsVolume(savedEffectsVolume);
			setVoiceVolume(savedVoiceVolume);
		}
	}, []);

	return (
		<AudioContext.Provider
			value={{
				// Music controls
				playMusic: () => musicRef.current.play(),
				pauseMusic: () => musicRef.current.pause(),
				setMusicSource: (src) => setMusicSrc(src),
				setMusicVolume,

				// Effect controls
				playEffect: () => effectRef.current.play(),
				pauseEffect: () => effectRef.current.pause(),
				setEffectSource: (src) => setEffectSrc(src),
				setEffectsVolume,

				// Voice controls
				playVoice: () => voiceRef.current.play(),
				pauseVoice: () => voiceRef.current.pause(),
				setVoiceSource: (src) => setVoiceSrc(src),
				setVoiceVolume,

				// Volume (for settings)
				musicVolume,
				effectsVolume,
				voiceVolume,

				playEffectSound,

				isMuted,
				toggleMute,
				currentTrack: musicSrc,
			}}
		>
			{children}
		</AudioContext.Provider>
	);
};
