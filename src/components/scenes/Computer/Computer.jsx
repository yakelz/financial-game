import React, { useState } from 'react';
import Protocol from './views/Protocol/Protocol';
import Home from './views/Home/Home';
import Email from './views/Email/Email';
import ViewContext from '@utils/ViewContext';

function Computer() {
	const [currentView, setCurrentView] = useState('home');
	const renderView = () => {
		switch (currentView) {
			case 'home':
				return <Home />;
			case 'email':
				return <Email />;
			case 'back':
				return <Protocol />;
			default:
				return <Home />;
		}
	};
	return <ViewContext.Provider value={{ setCurrentView }}>{renderView()}</ViewContext.Provider>;
}

export default Computer;
