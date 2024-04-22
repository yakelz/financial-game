import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { AudioProvider } from '@utils/AudioContext';
import { NotificationProvider } from '@utils/NotificationContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<AudioProvider>
		<NotificationProvider>
			<App />
		</NotificationProvider>
	</AudioProvider>
);
