import { useAudio } from '@core/audio/AudioContext';
import useViewStore from '@core/store/useViewStore';
import { useEffect } from 'react';
import { useNotification } from '@core/notification/useNotification';

const GameComponent = () => {
	const { playEffectSound, setVoiceSource } = useAudio();
	const { setView, setOfficeSubView, setPulseRef } = useViewStore();
	const showNotification = useNotification();

	useEffect(() => {
		playEffectSound('./Audio/Sounds/door_close.mp3');
		setView('office');
		setOfficeSubView('front');

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
