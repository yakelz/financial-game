import React from 'react';
import styles from './Home.module.css';
import { useAudio } from '@core/audio/AudioContext';
import useViewStore from '@core/store/useViewStore';
import Calendar from '@assets/UI/Icons/calendar.svg?react';
import Mail from '@assets/Computer/email.svg?react';
import Browser from '@assets/Computer/browser.svg?react';
import Music from '@assets/Computer/music.svg?react';

function Home() {
	const { playEffectSound } = useAudio();
	const { setPhoneSubView } = useViewStore();
	return (
		<>
			<div className={styles.applications}>
				<div className={styles.container}>
					<button className={styles.calendar} onClick={() => setPhoneSubView('calendar')}>
						<Calendar />
						<span>Календарь</span>
					</button>
					<button className={styles.email} onClick={() => setPhoneSubView('email')}>
						<Mail />
						<span>Почта</span>
					</button>

					<button className={styles.browser} onClick={() => setPhoneSubView('browser')}>
						<Browser />
						<span>Браузер</span>
					</button>
					<button className={styles.music} onClick={() => setPhoneSubView('music')}>
						<Music />
						<span>Музыка</span>
					</button>
				</div>
			</div>
		</>
	);
}

export default Home;
