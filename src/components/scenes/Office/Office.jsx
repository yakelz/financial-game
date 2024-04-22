import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import FrontView from './views/Front/Front';
import BackView from './views/Back/Back';
import TableView from './views/Table/Table';
import DoorView from './views/Door/Door';

import ViewContext from '@utils/ViewContext';
import { useAudio } from '@utils/AudioContext';

import getAction from '@core/actions/getAction';

function Office() {
	const location = useLocation();
	const initialView = location.state?.view || 'front';
	const [currentView, setCurrentView] = useState(initialView);

	const { component: ActionComponent } = getAction('Office');

	const renderView = () => {
		switch (currentView) {
			case 'front':
				return <FrontView />;
			case 'back':
				return <BackView />;
			case 'table':
				return <TableView />;
			case 'door':
				return <DoorView />;
			default:
				return <FrontView />;
		}
	};

	return (
		<ViewContext.Provider value={{ setCurrentView }}>
			<main>
				<ActionComponent />
				{renderView()}
			</main>
		</ViewContext.Provider>
	);
}

export default Office;
