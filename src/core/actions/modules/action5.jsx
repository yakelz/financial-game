import React, { useEffect } from 'react';
import styles from './action5.module.css';
import Grandmother from '@ui/MinorCharacters/Grandmother/Grandmother';
import Dialog from '@scenes/Dialog/Dialog';
import useViewStore from '@core/store/useViewStore';
import { useNotification } from '@core/notification/useNotification';
import { useAudio } from '@core/audio/AudioContext';

const GameComponent = () => {
	const { setView, setPulseRef } = useViewStore();
	const { setMusicSource } = useAudio();
	const showNotification = useNotification();
	useEffect(() => {
		setView('map');
		setMusicSource('./Audio/Music/Stationary Sign - Confused Mind.mp3');

		const timer = setTimeout(() => {
			showNotification('Сегодня предстоит насыщенный день. Отправляйся на работу');
			setPulseRef('office');
		}, 2000);

		return () => clearTimeout(timer);
	}, []);
};

const OfficeComponent = () => {
	const showNotification = useNotification();
	useEffect(() => {
		const timer = setTimeout(() => {
			showNotification('В твоём рабочем календаре появилось мероприятие. Проверь время встречи');
		}, 2000);

		return () => clearTimeout(timer);
	}, []);
};

const TableOfficeComponent = ({ svgRef }) => {
	return (
		<>
			<Dialog />
			<Grandmother svgRef={svgRef} />
			<div className={styles.overlay}></div>
		</>
	);
};

export default {
	Game: {
		component: GameComponent,
	},
	Office: {
		component: OfficeComponent,
	},
	Table: {
		component: TableOfficeComponent,
	},
};
