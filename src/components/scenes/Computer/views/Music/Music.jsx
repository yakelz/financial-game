import React from 'react';
import styles from './Music.module.css';
import MusicIco from '@assets/Computer/music.svg?react';
import MusicButton from '@ui/Buttons/MusicButton/MusicButton';
import music from '@core/data/music';

function Music() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<MusicIco />
				<h2>Музыка</h2>
			</header>
			<main>
				<div>
					{music.map((track) => (
						<div key={track.id} className={styles.track} onClick={() => {}}>
							<MusicButton musicSrc={track.src} />
							<span className={styles.title}>{track.title}</span>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default Music;
