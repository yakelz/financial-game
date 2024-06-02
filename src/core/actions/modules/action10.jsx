import styles from './action6.module.css';
import { useAudio } from '@core/audio/AudioContext';
import useViewStore from '@core/store/useViewStore';
import Teenager from '@ui/MinorCharacters/Teenager/Teenager';
import Dialog from '@scenes/Dialog/Dialog';
import { useEffect } from 'react';
import useDialogStore from '@core/store/useDialogStore';

import teenagerDialog from '@core/data/dialogues/teenager';

const GameComponent = () => {
	const { setView, setOfficeSubView } = useViewStore();
	const { playEffectSound } = useAudio();
	const { setDialog, resetDialog } = useDialogStore();

	useEffect(() => {
		resetDialog();
		setDialog(teenagerDialog);
		playEffectSound('./Audio/Sounds/door_knock.mp3');
		const timer = setTimeout(() => {
			setView('office');
			setOfficeSubView('table');
		}, 2000);
		return () => clearTimeout(timer);
	}, []);
};

const TableOfficeComponent = ({ svgRef }) => {
	const { currentDialogId } = useDialogStore();

	useEffect(() => {}, [currentDialogId]);

	return (
		<>
			<Dialog />
			<Teenager svgRef={svgRef} />
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
