import React, { useState, useEffect } from 'react';
import FrontView from './views/Front/Front';
import BackView from './views/Back/Back';
import TableView from './views/Table/Table';
import DoorView from './views/Door/Door';

import ViewContext from '@utils/ViewContext';
import { useAudio } from '@utils/AudioContext';

function Office() {
	const [currentView, setCurrentView] = useState('front');
	const { setMusicSource, setEffectSource, setVoiceSource } = useAudio();

	useEffect(() => {
		setMusicSource('./Audio/Music/losyash.mp3');
		return () => setMusicSource('');
	}, [setMusicSource]);

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
				<div style={{ placeItems: 'center', display: 'flex' }}>
					<button onClick={() => setCurrentView('front')}>Front</button>
					<button onClick={() => setCurrentView('back')}>Back</button>
					<button onClick={() => setCurrentView('table')}>Table</button>
				</div>
				{renderView()}
			</main>
		</ViewContext.Provider>
	);
}

export default Office;
