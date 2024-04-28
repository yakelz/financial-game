import React, { useEffect } from 'react';
import useViewStore from '@core/store/useViewStore';
import { useAudio } from '@core/audio/AudioContext';

import Protocol from './views/Protocol/Protocol';
import Home from './views/Home/Home';
import Email from './views/Email/Email';
import Music from './views/Music/Music';
import Files from './views/Files/Files';
import Browser from './views/Browser/Browser';
import Calendar from '../Calendar/Calendar';

import CloseButton from '@ui/Buttons/CloseButton/CloseButton';
import styles from './Computer.module.css';

function Computer() {
	const { playEffectSound } = useAudio();
	const { computerSubView, setComputerSubView } = useViewStore();

	useEffect(() => {
		playEffectSound('./Audio/Sounds/computer_on.wav');
	}, []);

	const renderView = () => {
		switch (computerSubView) {
			case 'home':
				return <Home />;
			case 'calendar':
				return <Calendar />;
			case 'protocol':
				return <Protocol />;
			case 'email':
				return <Email />;
			case 'files':
				return <Files />;
			case 'browser':
				return <Browser />;
			case 'music':
				return <Music />;
			default:
				return <Home />;
		}
	};

	return (
		<>
			{computerSubView !== 'home' && (
				<CloseButton onClick={() => setComputerSubView('home')} className={styles.close} />
			)}
			{renderView()}
		</>
	);
}

export default Computer;
