import React, { useEffect } from 'react';

import useViewStore from '@core/store/useViewStore';
import { useNotification } from '@core/notification/useNotification';
import { useAudio } from '@core/audio/AudioContext';
import useGameStore from '@core/store/useGameStore';
import useDialogStore from '@core/store/useDialogStore';
import remindersList from '@core/data/reminders';
import grandmother from '@core/data/dialogues/grandmother';

const GameComponent = () => {
	const { setView, setPulseRef, setOfficeSubView } = useViewStore();
	const { setMusicSource } = useAudio();
	const showNotification = useNotification();

	const { reminders, addReminder } = useGameStore();

	const { setDialog, resetDialog } = useDialogStore();

	useEffect(() => {
		if (reminders.length === 0) {
			addReminder(remindersList[0]);
		}
		resetDialog();
		setDialog(grandmother);

		setView('map');
		setOfficeSubView('front');
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

export default {
	Game: {
		component: GameComponent,
	},
	Office: {
		component: OfficeComponent,
	},
};
