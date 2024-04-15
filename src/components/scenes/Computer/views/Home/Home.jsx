import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ViewContext from '@utils/ViewContext';
import styles from './Home.module.css';

import Calendar from '@assets/UI/Icons/calendar.svg?react';
import Protocol from '@assets/Computer/protocol.svg?react';
import Mail from '@assets/Computer/email.svg?react';
import Files from '@assets/Computer/files.svg?react';
import Browser from '@assets/Computer/browser.svg?react';
import Music from '@assets/Computer/music.svg?react';
import Exit from '@assets/Computer/exit.svg?react';

function Home() {
	const { setCurrentView } = useContext(ViewContext);
	const navigate = useNavigate();
	return (
		<>
			<button
				className={styles.exit}
				onClick={() => navigate('/office', { state: { view: 'table' } })}
			>
				<Exit />
			</button>
			<div className={styles.applications}>
				<div className={styles.container}>
					<button
						className={`${styles.calendar} ${styles.pulse}`}
						onClick={() => setCurrentView('calendar')}
					>
						<Calendar />
					</button>
					<button className={styles.protocol} onClick={() => setCurrentView('protocol')}>
						<Protocol />
					</button>
					<button className={styles.email} onClick={() => setCurrentView('email')}>
						<Mail />
					</button>
					<button className={styles.files} onClick={() => setCurrentView('files')}>
						<Files />
					</button>
					<button className={styles.browser} onClick={() => setCurrentView('browser')}>
						<Browser />
					</button>
					<button className={styles.music} onClick={() => setCurrentView('music')}>
						<Music />
					</button>
				</div>
			</div>
		</>
	);
}

export default Home;
