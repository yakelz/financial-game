import React, { useEffect } from 'react';
import Pulse from '@ui/Pulse/Pulse';
import { useNotification } from '@utils/useNotification';
import useGameStore from '@core/store/useGameStore';

const OfficeComponent = () => {
	const showNotification = useNotification();
	const { nextAction } = useGameStore();

	useEffect(() => {}, []);

	return null;
};

export default {
	Office: {
		component: OfficeComponent,
	},
};
