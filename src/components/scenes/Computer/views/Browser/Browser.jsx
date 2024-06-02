import React from 'react';
import useViewStore from '@core/store/useViewStore';
import useGameStore from '@core/store/useGameStore';

import styles from './Browser.module.css';
import BrowserIco from '@assets/Computer/browser.svg?react';
import Lock from '@assets/UI/Icons/lock_choice.svg?react';

import Search from './views/Search/Search';
import PhoneScam from './views/PhoneScam/PhoneScam';
import Dropping from './views/Dropping/Dropping';

function Browser() {
	const { browserSubView, setBrowserSubView } = useViewStore();
	const { currentActionIndex } = useGameStore();

	const renderView = () => {
		switch (browserSubView) {
			case 'search':
				return <Search />;
			case 'phone_scam':
				return <PhoneScam />;
			case 'dropping':
				return <Dropping />;
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
				<div
					className={`${styles.tab} ${browserSubView === 'dropping' ? styles.active : ''}`}
					onClick={() => {
						if (currentActionIndex < 8) {
							return;
						}
						setBrowserSubView('dropping');
					}}
				>
					<span>{currentActionIndex < 8 ? <Lock /> : 'Дроппинг'}</span>
				</div>
			</header>
			{renderView()}
		</div>
	);
}

export default Browser;
