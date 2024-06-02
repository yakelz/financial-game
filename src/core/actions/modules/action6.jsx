import styles from './action6.module.css';
import { useAudio } from '@core/audio/AudioContext';
import useViewStore from '@core/store/useViewStore';
import Grandmother from '@ui/MinorCharacters/Grandmother/Grandmother';
import Dialog from '@scenes/Dialog/Dialog';
import { useEffect } from 'react';
import useDialogStore from '@core/store/useDialogStore';
import useGameStore from '@core/store/useGameStore';
import { useNotification } from '@core/notification/useNotification';
import grandmother from '@core/data/dialogues/grandmother';

const GameComponent = () => {
	const { setView, setOfficeSubView } = useViewStore();
	const { setVoiceSource, playEffectSound } = useAudio();
	const { setDialog } = useDialogStore();
	useEffect(() => {
		setDialog(grandmother);
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
	const { currentDialogId } = useDialogStore();
	const { caseProgress, nextCaseProgress } = useGameStore();
	const showNotification = useNotification();

	useEffect(() => {
		console.log(currentDialogId + ' ' + caseProgress);
		if (currentDialogId === 7) {
			const timer = setTimeout(() => {
				showNotification('Открыта новая деталь: Значительный ущерб');
				nextCaseProgress();
			}, 5000);
			return () => clearTimeout(timer);
		}
		if (currentDialogId === 11) {
			const timer = setTimeout(() => {
				showNotification('Открыта новая деталь: Плохие отзывы');
				nextCaseProgress();
			}, 500);
			return () => clearTimeout(timer);
		}
		if (currentDialogId === 9 || currentDialogId === 13) {
			const timer = setTimeout(() => {
				showNotification('Открыта новая деталь: Дата поступления звонка');
				nextCaseProgress();
			}, 4000);
			return () => clearTimeout(timer);
		}
		if (currentDialogId === 14) {
			const timer = setTimeout(() => {
				showNotification('Открыта новая деталь: Номер счета');
				nextCaseProgress();
			}, 12000);
			return () => clearTimeout(timer);
		}
	}, [currentDialogId]);

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
