import React from 'react';
import FrontView from './views/Front/Front';
import BackView from './views/Door/Door';
import TableView from './views/Table/Table';
import DoorView from './views/Door/Door';

import useViewStore from '@core/store/useViewStore';

function Colleague() {
	const { colleagueSubView } = useViewStore();

	const renderView = () => {
		switch (colleagueSubView) {
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

	return <main>{renderView()}</main>;
}

export default Colleague;
