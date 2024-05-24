import React from 'react';
import styles from './Music.module.css';
import MusicButton from '@ui/Buttons/MusicButton/MusicButton';

function Music() {
	return (
		<div className={styles.container}>
			<main>
				<div className={styles.track} onClick={() => {}}>
					<MusicButton musicSrc='./Audio/Music/Etienne Roussel - A Thief in the Night.mp3' />
					<span className={styles.title}>Etienne Roussel - A Thief in the Night</span>
				</div>
				<div className={styles.track} onClick={() => {}}>
					<MusicButton musicSrc='./Audio/Music/Lennon Hutton - Thieving Thimbles.mp3' />
					<span className={styles.title}>Lennon Hutton - Thieving Thimbles</span>
				</div>
				<div className={styles.track} onClick={() => {}}>
					<MusicButton musicSrc='./Audio/Music/Stationary Sign - Confused Mind.mp3' />
					<span className={styles.title}>Stationary Sign - Confused Mind</span>
				</div>
				<div className={styles.track} onClick={() => {}}>
					<MusicButton musicSrc='./Audio/Music/Stationary Sign - Wiggle Your Way Through.mp3' />
					<span className={styles.title}>Stationary Sign - Wiggle Your Way Through</span>
				</div>
				<div className={styles.track} onClick={() => {}}>
					<MusicButton musicSrc='./Audio/Music/The Fly Guy Five - A Walk in Marais.mp3' />
					<span className={styles.title}>The Fly Guy Five - A Walk in Marais</span>
				</div>
				<div className={styles.track} onClick={() => {}}>
					<MusicButton musicSrc='./Audio/Music/View Points - Silly Me.mp3' />
					<span className={styles.title}>View Points - Silly Me</span>
				</div>
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
