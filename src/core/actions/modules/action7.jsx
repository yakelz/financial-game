import { useAudio } from '@core/audio/AudioContext';
import useViewStore from '@core/store/useViewStore';
import { useEffect } from 'react';
import { useNotification } from '@core/notification/useNotification';
import useDialogStore from '@core/store/useDialogStore';
import colleague from '@core/data/dialogues/colleague';

const GameComponent = () => {
	const { playEffectSound, setVoiceSource } = useAudio();
	const { setView, setOfficeSubView, setPulseRef } = useViewStore();
	const showNotification = useNotification();
	const { setDialog, resetDialog } = useDialogStore();
	useEffect(() => {
		playEffectSound('./Audio/Sounds/door_close.mp3');
		setView('office');
		setOfficeSubView('front');

		resetDialog();
		setDialog(colleague);

		const timer = setTimeout(() => {
			setPulseRef('door');
			showNotification(
				'Для раскрытия дела ещё не хватает много деталей. Хорошо, что можно посоветоваться с коллегой'
			);
			setVoiceSource('./Audio/Voices/Grandmother/after.mp3');
		}, 2000);

		return () => clearTimeout(timer);
	}, []);
};

export default {
	Game: {
		component: GameComponent,
	},
};
