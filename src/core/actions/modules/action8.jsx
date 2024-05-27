import { useAudio } from '@core/audio/AudioContext';
import useViewStore from '@core/store/useViewStore';
import { useEffect } from 'react';
import { useNotification } from '@core/notification/useNotification';
import useDialogStore from '@core/store/useDialogStore';
import colleague from '@core/data/dialogues/colleague';

const GameComponent = () => {
	const { playEffectSound, setVoiceSource } = useAudio();
	const { setView, setOfficeSubView, setPulseRef } = useViewStore();
	const { resetDialog } = useDialogStore();
	const showNotification = useNotification();
	useEffect(() => {
		setPulseRef('');
		playEffectSound('./Audio/Sounds/door_close.mp3');
		setView('office');
		setOfficeSubView('front');
		resetDialog();
		const timer = setTimeout(() => {
			showNotification('Второй рабочий день подошёл к концу');
		}, 2000);

		return () => clearTimeout(timer);
	}, []);
};

export default {
	Game: {
		component: GameComponent,
	},
};
