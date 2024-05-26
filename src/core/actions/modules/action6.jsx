import styles from './action6.module.css';
import { useAudio } from '@core/audio/AudioContext';
import useViewStore from '@core/store/useViewStore';
import Grandmother from '@ui/MinorCharacters/Grandmother/Grandmother';
import Dialog from '@scenes/Dialog/Dialog';
import { useEffect } from 'react';

const GameComponent = () => {
	const { setView, setOfficeSubView } = useViewStore();
	const { setVoiceSource, playEffectSound } = useAudio();
	useEffect(() => {
		playEffectSound('./Audio/Sounds/door_knock.mp3');
		const timer = setTimeout(() => {
			setVoiceSource('./Audio/Voices/Grandmother/0.mp3');
			setView('office');
			setOfficeSubView('table');
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
	Table: {
		component: TableOfficeComponent,
	},
};
