import { useAudio } from '@core/audio/AudioContext';
import useViewStore from '@core/store/useViewStore';
import { useEffect } from 'react';
import { useNotification } from '@core/notification/useNotification';

import remindersList from '@core/data/reminders';
import useGameStore from '@core/store/useGameStore';

const GameComponent = () => {
	useEffect(() => {}, []);
};

export default {
	Game: {
		component: GameComponent,
	},
};
