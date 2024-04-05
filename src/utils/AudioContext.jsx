import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
	const [musicSrc, setMusicSrc] = useState('');
	const [effectSrc, setEffectSrc] = useState('');
	const [voiceSrc, setVoiceSrc] = useState('');

	const [musicVolume, setMusicVolume] = useState(localStorage.getItem('musicVolume') || 0.1); // Громкость музыки
	const [effectsVolume, setEffectsVolume] = useState(localStorage.getItem('effectsVolume') || 0.1); // Громкость эффектов
	const [voiceVolume, setVoiceVolume] = useState(localStorage.getItem('voiceVolume') || 0.1); // Громкость голоса

	const musicRef = useRef(new Audio());
	const effectRef = useRef(new Audio());
	const voiceRef = useRef(new Audio());

	useEffect(() => {
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

	const playEffectSound = (soundPath) => {
		const audio = new Audio(soundPath);
		audio.volume = effectsVolume;
		audio.play().catch((error) => console.error('Error playing effect sound:', error));
	};

	const playMusic = () => musicRef.current.play();
	const pauseMusic = () => musicRef.current.pause();
	const setMusicSource = (src) => setMusicSrc(src);

	const playEffect = () => effectRef.current.play();
	const pauseEffect = () => effectRef.current.pause();
	const setEffectSource = (src) => setEffectSrc(src);

	const playVoice = () => voiceRef.current.play();
	const pauseVoice = () => voiceRef.current.pause();
	const setVoiceSource = (src) => setVoiceSrc(src);

	return (
		<AudioContext.Provider
			value={{
				// Music controls
				playMusic,
				pauseMusic,
				setMusicSource,
				setMusicVolume,

				// Effect controls
				playEffect,
				pauseEffect,
				setEffectSource,
				setEffectsVolume,

				// Voice controls
				playVoice,
				pauseVoice,
				setVoiceSource,
				setVoiceVolume,

				// Volume (for settings)
				musicVolume,
				effectsVolume,
				voiceVolume,

				playEffectSound,
			}}
		>
			{children}
		</AudioContext.Provider>
	);
};
