import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import RotateScreen from '@assets/UI/Icons/rotate-screen.svg?react';

const FullScreenPrompt = () => {
	const [showPrompt, setShowPrompt] = useState(false);
	const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
	const [promptMessage, setPromptMessage] = useState('');
	useEffect(() => {
		const checkOrientationAndFullscreen = () => {
			const currentIsLandscape = window.innerWidth > window.innerHeight;
			setIsLandscape(currentIsLandscape);
			const isFullscreen = document.fullscreenElement != null;

			if (document.fullscreenEnabled) {
				if (isMobile) {
					if (!currentIsLandscape && !isFullscreen) {
						setShowPrompt(true);
						setPromptMessage(
							'Для лучшего игрового опыта, пожалуйста, откройте на полный экран и поверните устройство горизонтально.'
						);
					} else if (!currentIsLandscape) {
						setShowPrompt(true);
						setPromptMessage('Пожалуйста, поверните устройство горизонтально.');
					} else if (!isFullscreen) {
						setShowPrompt(true);
						setPromptMessage('Для лучшего игрового опыта, пожалуйста, откройте на полный экран.');
					} else {
						setShowPrompt(false);
					}
				} else {
					setShowPrompt(!currentIsLandscape);
					setPromptMessage('Пожалуйста, поверните устройство горизонтально.');
				}
			} else {
				setShowPrompt(!currentIsLandscape);
				setPromptMessage('Пожалуйста, поверните устройство горизонтально.');
			}
		};

		checkOrientationAndFullscreen();
		window.addEventListener('resize', checkOrientationAndFullscreen);
		document.addEventListener('fullscreenchange', checkOrientationAndFullscreen);

		return () => {
			window.removeEventListener('resize', checkOrientationAndFullscreen);
			document.removeEventListener('fullscreenchange', checkOrientationAndFullscreen);
		};
	}, []);

	const requestFullscreen = () => {
		try {
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				/* Firefox */
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
				/* Chrome, Safari & Opera */
				document.documentElement.webkitRequestFullscreen();
			} else if (document.documentElement.msRequestFullscreen) {
				/* IE/Edge */
				document.documentElement.msRequestFullscreen();
			}
		} catch (err) {
			console.error('Не удалось войти в полноэкранный режим: ', err);
			alert(
				'Ошибка при попытке входа в полноэкранный режим. Проверьте настройки браузера и разрешения.'
			);
		}
	};

	if (!showPrompt) {
		return null;
	}

	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				backgroundColor: isLandscape ? 'rgba(0,0,0,0.9)' : 'black',
				color: 'white',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 1000,
			}}
		>
			<div style={{ textAlign: 'center', fontSize: '20px' }}>
				<RotateScreen style={{ height: '100px', width: '100px' }} />
				<p>{promptMessage}</p>
				<button
					style={{
						padding: '10px',
						backgroundColor: 'white',
						borderRadius: '10px',
						fontWeight: 700,
						color: 'black',
						marginTop: '20px',
					}}
					onClick={requestFullscreen}
				>
					Открыть на полный экран
				</button>
			</div>
		</div>
	);
};

export default FullScreenPrompt;
