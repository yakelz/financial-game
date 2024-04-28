import React, { useEffect } from 'react';
import Pulse from '@ui/Pulse/Pulse';
import { useNotification } from '@core/notification/useNotification';
import useGameStore from '@core/store/useGameStore';
import useViewStore from '@core/store/useViewStore';

import messages from '@core/data/messages';

const OfficeComponent = () => {
	const showNotification = useNotification();
	const { emails, addEmail } = useGameStore();
	const { setPulseRef } = useViewStore();

	useEffect(() => {
		const timer = setTimeout(() => {
			showNotification('Это офис. Здесь твоё рабочее место. Проверь электронную почту.');
		}, 5000);
		setPulseRef('email');
		if (emails.length === 0) {
			addEmail(messages[0]);
		}
		return () => clearTimeout(timer);
	}, []);
};

const GameComponent = () => {
	const { nextAction, emails } = useGameStore();
	useEffect(() => {
		console.log(emails);
		// первое письмо про "новое дело"
		if (emails.length > 0 && emails[0].read) {
			nextAction();
		}
	}, [emails]);
};

export default {
	Office: {
		component: OfficeComponent,
	},
	Game: { component: GameComponent },
};
