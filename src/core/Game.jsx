import React, { useEffect } from 'react';
import useViewStore from '@core/store/useViewStore';
import getAction from '@core/actions/getAction';
import { useAudio } from '@core/audio/AudioContext';

import Office from '@scenes/Office/Office';
import Computer from '@scenes/Computer/Computer';
import Map from '@scenes/Map/Map';

function Game() {
	const { view, setView } = useViewStore();
	const { component: ActionComponent } = getAction('Game');
	const { setMusicSource } = useAudio();

	useEffect(() => {
		setMusicSource('./Audio/Music/Etienne Roussel - A Thief in the Night.mp3');
	}, []);

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

	return (
		<>
			<ActionComponent />
			{renderView()}
		</>
	);
}

export default Game;
