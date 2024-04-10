import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import { useNavigate, Link } from 'react-router-dom';
import IntroVideo from '../Intro/IntroVideo';

import { useAudio } from '@utils/AudioContext';

import VolumeButton from '@ui/Buttons/VolumeButton/VolumeButton';
import PlayButton from '@ui/Buttons/PlayButton/PlayButton';
import Character from '@ui/Character/Character';

import styles from './Menu.module.css';
import AnimatedBackground from '@ui/AnimatedBackground/AnimatedBackground';
import Settings from '@scenes/Settings/Settings';

function Menu() {
	const [playVideo, setPlayVideo] = useState(false);
	const navigate = useNavigate();
	const { pauseMusic } = useAudio();

	const handlePlayGame = () => {
		pauseMusic();
		setPlayVideo(true);
	};

	const videoEnded = () => {
		navigate('/office');
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
			{playVideo ? (
				<>
					<VolumeButton />
					<IntroVideo onSkip={videoEnded} />
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
