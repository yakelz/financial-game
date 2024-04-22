import React, { useEffect } from 'react';
import Pulse from '@ui/Pulse/Pulse';
import { useNotification } from '@utils/useNotification';
import useGameStore from '@core/store/useGameStore';
import { useAudio } from '@utils/AudioContext';

const OfficeComponent = () => {
	const showNotification = useNotification();
	const { nextAction, addEmail } = useGameStore();
	const { setMusicSource, setEffectSource, setVoiceSource } = useAudio();

	useEffect(() => {
		const timer = setTimeout(() => {
			showNotification('Это офис. Здесь твоё рабочее место. Проверь электронную почту.');
		}, 5000);
		addEmail({
			from: 'Федоров С.С',
			theme: 'Новое дело',
			text: 'Здравствуй, Алексей. В системе появилось новое сообщение...',
		});
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		setMusicSource('./Audio/Music/losyash.mp3');
	}, [setMusicSource]);

	return null;
};

const HomeComponent = () => {
	return <Pulse top={28} left={60} />;
};

export default {
	Office: {
		component: OfficeComponent,
	},
	Home: {
		component: HomeComponent,
	},
};
