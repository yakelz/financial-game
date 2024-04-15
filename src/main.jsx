import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { AudioProvider } from '@utils/AudioContext';
import { NotificationProvider } from '@utils/NotificationContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<AudioProvider>
				<NotificationProvider>
					<App />
				</NotificationProvider>
			</AudioProvider>
		</Provider>
	</React.StrictMode>
);
