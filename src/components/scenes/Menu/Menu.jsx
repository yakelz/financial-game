import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import { useNavigate, Link } from 'react-router-dom';
import IntroVideo from '../Intro/IntroVideo';

import Background from '@ui/Background/Background';
import bg from '@assets/Menu/bg.svg';
import { useAudio } from '@utils/AudioContext';

import PlayButton from '@ui/Buttons/PlayButton/PlayButton';
import SettingsButton from '@ui/Buttons/SettingsButton/SettingsButton';
import Character from '@ui/Character/Character';

import styles from './Menu.module.css';

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
		delay: 800, // Задержка, чтобы заголовок начал анимироваться после персонажа
	});

	return (
		<main>
			{playVideo ? (
				<IntroVideo onSkip={videoEnded} />
			) : (
				<>
					{/* <Character onMenu={true} />
					<h1 className={styles.title}>След в сети</h1>
					<SettingsButton />
					<PlayButton onClick={handlePlayGame} />
					<Background src={bg} /> */}

					<Character onMenu={true} />

					<animated.h1 style={titleAnimation} className={styles.title}>
						След в сети
					</animated.h1>

					<SettingsButton />

					<PlayButton onClick={handlePlayGame} />

					<Background src={bg} />
				</>
			)}
		</main>
	);
}

export default Menu;
