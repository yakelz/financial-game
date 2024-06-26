import React, { useEffect } from 'react';

import { useNotification } from '@core/notification/useNotification';
import useGameStore from '@core/store/useGameStore';
import useViewStore from '@core/store/useViewStore';

import cases from '@core/data/cases';

const GameComponent = () => {
	const showNotification = useNotification();
	const { setPulseRef } = useViewStore();
	const { nextAction, caseItems, addCaseItem } = useGameStore();

	useEffect(() => {
		setPulseRef('protocol');
		console.log(caseItems);
		if (caseItems.length === 0) {
			addCaseItem(cases[0]);
		}
	}, []);

	useEffect(() => {
		// первое письмо про "новое дело"
		if (caseItems.length > 0 && caseItems[0].read) {
			nextAction();
		}
	}, [caseItems]);
};

export default {
	Game: {
		component: GameComponent,
	},
};
