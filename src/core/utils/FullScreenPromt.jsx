import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

const FullScreenPrompt = () => {
	const [showPrompt, setShowPrompt] = useState(false);

	useEffect(() => {
		const checkOrientationAndFullscreen = () => {
			const isLandscape = window.innerWidth > window.innerHeight;
			const isFullscreen = document.fullscreenElement != null;
			// Показываем призыв к полноэкранному режиму только на мобильных устройствах
			if (isMobile) {
				setShowPrompt(!isLandscape || !isFullscreen);
			} else {
				setShowPrompt(!isLandscape);
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
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				color: 'white',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 1000,
			}}
		>
			<div style={{ textAlign: 'center', fontSize: '20px' }}>
				<p>
					Для лучшего игрового опыта, пожалуйста, откройте на полный экран и поверните устройство
					горизонтально.
				</p>
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
