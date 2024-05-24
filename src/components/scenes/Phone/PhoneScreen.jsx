import React, { useEffect, useState } from 'react';
import useViewStore from '@core/store/useViewStore';
import { useAudio } from '@core/audio/AudioContext';
import { useSpring, animated } from 'react-spring';
import Home from './views/Home/Home';
import Email from './views/Email/Email';
import Music from './views/Music/Music';
import Browser from './views/Browser/Browser';
import Calendar from './views/Calendar/Calendar';
import styles from './PhoneScreen.module.css';

import HomeIcon from '@assets/Phone/home.svg?react';
import BackIcon from '@assets/Phone/back.svg?react';

import WifiLightIcon from '@assets/Phone/wifi_light.svg?react';
import WifiDarkIcon from '@assets/Phone/wifi_dark.svg?react';

function PhoneScreen() {
	const { playEffectSound } = useAudio();
	const { phoneSubView, setPhoneSubView } = useViewStore();
	const { isPhoneOpen, setPhoneOpen } = useViewStore();

	const containerSpring = useSpring({
		from: { transform: 'translateY(100%)' },
		to: { transform: 'translateY(0)' },
		config: { tension: 120, friction: 14 },
	});

	useEffect(() => {
		playEffectSound('./Audio/Sounds/computer_on.wav');
	}, []);

	const renderView = () => {
		switch (phoneSubView) {
			case 'home':
				return <Home />;
			case 'calendar':
				return <Calendar />;
			case 'email':
				return <Email />;
			case 'browser':
				return <Browser />;
			case 'music':
				return <Music />;
			default:
				return <Home />;
		}
	};

	const handleOverlayClick = () => {
		setPhoneOpen(!isPhoneOpen);
	};

	return (
		<div className={styles.modalBackground} onClick={handleOverlayClick}>
			<div
				className={styles.modal}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<animated.div style={containerSpring} className={styles.screen}>
					<header style={phoneSubView !== 'home' ? { color: 'black' } : {}}>
						<span>10:00</span>
						{phoneSubView !== 'home' ? <WifiDarkIcon /> : <WifiLightIcon />}
					</header>
					{renderView()}
					<footer>
						<button
							className={styles.homeIcon}
							onClick={() => {
								setPhoneSubView('home');
							}}
						>
							<HomeIcon style={{ stroke: phoneSubView !== 'home' ? 'black' : 'white' }} />
						</button>
						<button
							className={styles.backIcon}
							onClick={() => {
								setPhoneSubView('home');
							}}
						>
							<BackIcon style={{ stroke: phoneSubView !== 'home' ? 'black' : 'white' }} />
						</button>
					</footer>
				</animated.div>
			</div>
		</div>
	);
}

export default PhoneScreen;
