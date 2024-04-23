import React, { useEffect, useRef } from 'react';
import styles from './Home.module.css';

import getAction from '@core/actions/getAction';
import useViewStore from '@core/store/useViewStore';

import Calendar from '@assets/UI/Icons/calendar.svg?react';
import Protocol from '@assets/Computer/protocol.svg?react';
import Mail from '@assets/Computer/email.svg?react';
import Files from '@assets/Computer/files.svg?react';
import Browser from '@assets/Computer/browser.svg?react';
import Music from '@assets/Computer/music.svg?react';
import Exit from '@assets/Computer/exit.svg?react';

import Pulse from '@ui/Pulse/Pulse';

function Home() {
	const { setComputerSubView, setOfficeSubView, setView, pulseRef } = useViewStore();

	const { component: ActionComponent } = getAction('Home');

	const emailRef = useRef(null);
	const protocolRef = useRef(null);

	const getCurrentRef = () => {
		switch (pulseRef) {
			case 'email':
				return emailRef;
			case 'protocol':
				return protocolRef;
			default:
				return null;
		}
	};

	return (
		<>
			{pulseRef && <Pulse targetRef={getCurrentRef()} />}
			<button
				className={styles.exit}
				onClick={() => {
					setView('office');
					setOfficeSubView('table');
				}}
			>
				<Exit />
			</button>
			<div className={styles.applications}>
				<div className={styles.container}>
					<button
						className={`${styles.calendar} ${styles.pulse}`}
						onClick={() => setComputerSubView('calendar')}
					>
						<Calendar />
						<span>Календарь</span>
					</button>
					<button
						ref={protocolRef}
						className={styles.protocol}
						onClick={() => setComputerSubView('protocol')}
					>
						<Protocol />
						<span>Proтокол</span>
					</button>
					<button
						ref={emailRef}
						className={styles.email}
						onClick={() => setComputerSubView('email')}
					>
						<Mail />
						<span>Email</span>
					</button>
					<button className={styles.files} onClick={() => setComputerSubView('files')}>
						<Files />
						<span>Файлы</span>
					</button>
					<button className={styles.browser} onClick={() => setComputerSubView('browser')}>
						<Browser />
						<span>Браузер</span>
					</button>
					<button className={styles.music} onClick={() => setComputerSubView('music')}>
						<Music />
						<span>Музыка</span>
					</button>
				</div>
			</div>
		</>
	);
}

export default Home;
