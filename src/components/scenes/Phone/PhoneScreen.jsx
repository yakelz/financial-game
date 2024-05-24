import React, { useEffect } from 'react';
import useViewStore from '@core/store/useViewStore';
import { useAudio } from '@core/audio/AudioContext';

import Home from './views/Home/Home';
import Email from './views/Email/Email';
import Music from './views/Music/Music';
import Browser from './views/Browser/Browser';
import Calendar from './views/Calendar/Calendar';
import styles from './PhoneScreen.module.css';

function PhoneScreen() {
	const { playEffectSound } = useAudio();
	const { phoneSubView, setPhoneSubView } = useViewStore();
	const { isPhoneOpen, setPhoneOpen } = useViewStore();

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
				<div className={styles.screen}>
					<header>
						<span>10:00</span>
						<img src='' alt='Верхняя строка уведомлений в телефоне' />
					</header>
					{renderView()}
					<footer>
						<button> Home </button>
						<button> Back </button>
					</footer>
				</div>
			</div>
		</div>
	);
}

export default PhoneScreen;
