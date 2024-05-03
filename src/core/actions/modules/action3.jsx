import React, { useEffect } from 'react';

import { useNotification } from '@core/notification/useNotification';
import useGameStore from '@core/store/useGameStore';
import useViewStore from '@core/store/useViewStore';
import messages from '@core/data/messages';

const GameComponent = () => {
	const { setPulseRef } = useViewStore();

	useEffect(() => {
		setPulseRef('browser');
	}, []);

	return null;
};

export default {
	Game: {
		component: GameComponent,
	},
};
