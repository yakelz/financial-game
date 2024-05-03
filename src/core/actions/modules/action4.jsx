import React, { useEffect } from 'react';

import useViewStore from '@core/store/useViewStore';
import { useNotification } from '@core/notification/useNotification';

const GameComponent = () => {
	const { setPulseRef } = useViewStore();
	const showNotification = useNotification();
	useEffect(() => {
		setPulseRef('map');
		const timer = setTimeout(() => {
			showNotification('Первый рабочий день подошёл к концу. Отправляйся домой');
		}, 5000);
		return () => clearTimeout(timer);
	}, []);

	return null;
};

const MapComponent = () => {
	const { setPulseRef } = useViewStore();

	useEffect(() => {
		setPulseRef('home');
	}, []);

	return null;
};

export default {
	Game: {
		component: GameComponent,
	},
	Map: {
		component: MapComponent,
	},
};
