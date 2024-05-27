import { useAudio } from '@core/audio/AudioContext';
import useViewStore from '@core/store/useViewStore';
import { useEffect } from 'react';
import { useNotification } from '@core/notification/useNotification';
import useDialogStore from '@core/store/useDialogStore';
import remindersList from '@core/data/reminders';
import useGameStore from '@core/store/useGameStore';

const GameComponent = () => {
	const { playEffectSound, setVoiceSource } = useAudio();
	const { setView, setOfficeSubView } = useViewStore();
	const { setMusicSource } = useAudio();
	const { reminders, addReminder } = useGameStore();

	const showNotification = useNotification();
	useEffect(() => {
		if (reminders.length === 1) {
			addReminder(remindersList[1]);
		}

		playEffectSound('./Audio/Sounds/door_close.mp3');
		setView('map');
		setOfficeSubView('front');
		setMusicSource('./Audio/Music/Stationary Sign - Confused Mind.mp3');

		const timer = setTimeout(() => {
			showNotification('Не опаздывай на работу, иначе это может повлиять на твою карьеру');
		}, 2000);

		return () => clearTimeout(timer);
	}, []);
};

const OfficeComponent = () => {
	const showNotification = useNotification();

	useEffect(() => {
		const timer = setTimeout(() => {
			showNotification('Новое мероприятие в календаре');
		}, 2000);

		return () => clearTimeout(timer);
	}, []);
};

export default {
	Game: {
		component: GameComponent,
	},
	Office: {
		component: OfficeComponent,
	},
};
