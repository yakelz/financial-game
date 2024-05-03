import React, { useEffect } from 'react';

import { useNotification } from '@core/notification/useNotification';
import useGameStore from '@core/store/useGameStore';
import useViewStore from '@core/store/useViewStore';
import messages from '@core/data/messages';

const GameComponent = () => {
	const showNotification = useNotification();
	const { setPulseRef } = useViewStore();
	const { nextAction, emails, addEmail } = useGameStore();

	useEffect(() => {
		const timer = setTimeout(() => {
			showNotification('Новое сообщение');
			setPulseRef('email');
		}, 5000);

		if (emails.length === 1) {
			addEmail(messages[1]);
		}
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		// первое письмо про "новое дело"
		if (emails.length > 1 && emails[1].read) {
			nextAction();
		}
	}, [emails]);

	return null;
};

export default {
	Game: {
		component: GameComponent,
	},
};
