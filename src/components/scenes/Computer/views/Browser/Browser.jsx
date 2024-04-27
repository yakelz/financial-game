import React from 'react';
import useViewStore from '@core/store/useViewStore';

import styles from './Browser.module.css';
import BrowserIco from '@assets/Computer/browser.svg?react';
import Lock from '@assets/UI/Icons/lock_choice.svg?react';

import Search from './views/Search/Search';
import PhoneScam from './views/PhoneScam/PhoneScam';

function Browser() {
	const { browserSubView, setBrowserSubView } = useViewStore();

	const renderView = () => {
		switch (browserSubView) {
			case 'search':
				return <Search />;
			case 'phone_scam':
				return <PhoneScam />;
			default:
				return <Search />;
		}
	};

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div
					className={`${styles.tab} ${browserSubView === 'search' ? styles.active : ''}`}
					onClick={() => {
						setBrowserSubView('search');
					}}
				>
					<BrowserIco />
					<h2>Поиск</h2>
				</div>
				<div
					className={`${styles.tab} ${browserSubView === 'phone_scam' ? styles.active : ''}`}
					onClick={() => {
						setBrowserSubView('phone_scam');
					}}
				>
					<span>Телефонное мошенничество</span>
				</div>
				<div className={styles.tab}>
					<span>
						<Lock />
					</span>
				</div>
			</header>
			<main>{renderView()}</main>
		</div>
	);
}

export default Browser;
