import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import { useNavigate, Link } from 'react-router-dom';
import Cutscene from '../Cutscene/Cutscene';

import { useAudio } from '@core/audio/AudioContext';

import VolumeButton from '@ui/Buttons/VolumeButton/VolumeButton';
import PlayButton from '@ui/Buttons/PlayButton/PlayButton';
import Character from '@ui/Character/Character';
import useGameStore from '@core/store/useGameStore';
import styles from './Menu.module.css';
import AnimatedBackground from '@ui/AnimatedBackground/AnimatedBackground';
import Settings from '@scenes/Settings/Settings';

function Menu() {
	const [playVideo, setPlayVideo] = useState(false);
	const { currentActionIndex } = useGameStore();
	const navigate = useNavigate();
	const { pauseMusic } = useAudio();

	const handlePlayGame = () => {
		pauseMusic();
		if (currentActionIndex === 0) {
			setPlayVideo(true);
		} else {
			navigate('/game');
		}
	};

	const videoEnded = () => {
		navigate('/game');
	};

	// Анимация для заголовка
	const titleAnimation = useSpring({
		from: { transform: 'translateX(180%)' },
		to: { transform: 'translateX(0)' },
		delay: 800,
	});

	return (
		<main>
			<Settings />
			<VolumeButton />
			{playVideo ? (
				<>
					<Cutscene videoSrc={'./Video/intro.mp4'} onSkip={videoEnded} />
				</>
			) : (
				<>
					<Character onMenu={true} />

					<animated.h1 style={titleAnimation} className={styles.title}>
						След в сети
					</animated.h1>

					<PlayButton onClick={handlePlayGame} />

					<AnimatedBackground />
				</>
			)}
		</main>
	);
}

export default Menu;
