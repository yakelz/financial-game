import FrontView from './views/Front/Front';
import BackView from './views/Back/Back';
import TableView from './views/Table/Table';
import DoorView from './views/Door/Door';
import Computer from '../Computer/Computer';

import useViewStore from '@core/store/useViewStore';
import getAction from '@core/actions/getAction';

function Office() {
	const { officeSubView, setView } = useViewStore();

	const { component: ActionComponent } = getAction('Office');

	const renderView = () => {
		switch (officeSubView) {
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
		<main>
			<ActionComponent />
			{renderView()}
		</main>
	);
}

export default Office;
