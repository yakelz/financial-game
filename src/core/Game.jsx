import React from 'react';
import useViewStore from '@core/store/useViewStore';
import Office from '@scenes/Office/Office';
import Computer from '@scenes/Computer/Computer';
import Map from '@scenes/Map/Map';

function Game() {
	const { view, setView } = useViewStore();

	const renderView = () => {
		switch (view) {
			case 'office':
				return <Office />;
			case 'computer':
				return <Computer />;
			case 'map':
				return <Map />;
			default:
				return null;
		}
	};

	return <>{renderView()}</>;
}

export default Game;
