import React, { useEffect } from 'react';

import { useNotification } from '@core/notification/useNotification';
import useGameStore from '@core/store/useGameStore';
import messages from '@core/data/messages';

const OfficeComponent = () => {
	const showNotification = useNotification();
	const { nextAction, emails, addEmail } = useGameStore();

	useEffect(() => {
		const timer = setTimeout(() => {
			showNotification('Новое сообщение');
		}, 5000);
		if (emails.length === 1) {
			addEmail(messages[1]);
		}
		return () => clearTimeout(timer);
	}, []);

	return null;
};

export default {
	Office: {
		component: OfficeComponent,
	},
};
