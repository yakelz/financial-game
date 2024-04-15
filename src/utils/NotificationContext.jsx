import React, { createContext, useState, useCallback, useEffect } from 'react';
import Notification from '@ui/Notification/Notification';
import { useAudio } from '@utils/AudioContext';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
	const [notification, setNotification] = useState(null);
	const [isVisible, setIsVisible] = useState(false);
	const { playEffectSound } = useAudio();

	const hideNotification = useCallback(() => {
		setIsVisible(false);
		setTimeout(() => setNotification(null), 300);
	}, []);

	const showNotification = useCallback(
		(message) => {
			setNotification(message);
			playEffectSound('./Audio/Sounds/notice.wav');
			setIsVisible(true);
			setTimeout(hideNotification, 10000); //10sec
		},
		[hideNotification]
	);

	return (
		<NotificationContext.Provider value={showNotification}>
			{children}
			{notification && (
				<Notification onClick={hideNotification} isVisible={isVisible}>
					{notification}
				</Notification>
			)}
		</NotificationContext.Provider>
	);
};
