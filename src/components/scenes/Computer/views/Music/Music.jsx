import React from 'react';
import styles from './Music.module.css';
import MusicIco from '@assets/Computer/music.svg?react';
import MusicButton from '@ui/Buttons/MusicButton/MusicButton';

function Music() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<MusicIco />
				<h2>Музыка</h2>
			</header>
			<main>
				<div className={styles.track} onClick={() => {}}>
					<MusicButton musicSrc='./Audio/Music/bi2.mp3' />
					<span className={styles.title}>Би 2</span>
				</div>
				<div className={styles.track} onClick={() => {}}>
					<MusicButton musicSrc='./Audio/Music/losyash.mp3' />
					<span className={styles.title}>Тема Лосяша</span>
				</div>
			</main>
		</div>
	);
}

export default Music;
