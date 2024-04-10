import React, { useState } from 'react';
import Protocol from './views/Protocol/Protocol';
import Home from './views/Home/Home';
import Email from './views/Email/Email';
import ViewContext from '@utils/ViewContext';
import Music from './views/Music/Music';
import Files from './views/Files/Files';
import Browser from './views/Browser/Browser';
import Calendar from '../Calendar/Calendar';

function Computer() {
	const [currentView, setCurrentView] = useState('home');
	const renderView = () => {
		switch (currentView) {
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
	return <ViewContext.Provider value={{ setCurrentView }}>{renderView()}</ViewContext.Provider>;
}

export default Computer;
