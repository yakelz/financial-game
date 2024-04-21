import React, { useState, useEffect } from 'react';
import { useAudio } from '@utils/AudioContext'; // Убедитесь, что путь указан верно

import MusicPlay from '@assets/UI/Buttons/music_play.svg?react';
import MusicPause from '@assets/UI/Buttons/music_pause.svg?react';

import styles from './MusicButton.module.css';

function MusicButton({ musicSrc }) {
	const { playMusic, pauseMusic, setMusicSource, isMuted, currentTrack } = useAudio();
	const isPlaying = currentTrack === musicSrc;

	console.log('curr' + currentTrack);

	const togglePlay = () => {
		if (isMuted) {
			return;
		}
		if (isPlaying) {
			setMusicSource(null);
			pauseMusic();
		} else {
			setMusicSource(musicSrc);
			playMusic();
		}
	};

	// useEffect(() => {
	// 	if (isMuted && isPlaying) {
	// 		pauseMusic();
	// 	}
	// }, [isMuted, isPlaying, pauseMusic]);

	return (
		<button className={styles.button} onClick={togglePlay}>
			{isMuted ? <MusicPlay /> : isPlaying ? <MusicPause /> : <MusicPlay />}
		</button>
	);
}

export default MusicButton;
