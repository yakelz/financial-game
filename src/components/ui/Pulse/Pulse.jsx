import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Pulse.module.css';

function Pulse({ targetRef, animate }) {
	const [position, setPosition] = useState({ top: 0, left: 0 });

	useEffect(() => {
		const updatePosition = () => {
			if (targetRef.current) {
				const rect = targetRef.current.getBoundingClientRect();
				setPosition({
					top: rect.top + rect.height / 2 + window.scrollY,
					left: rect.left + rect.width / 2 + window.scrollX,
				});
			}
		};
		// Добавляем небольшую задержку
		const timeoutId = setTimeout(updatePosition, 10);

		// слушатель на изменение размера окна
		window.addEventListener('resize', updatePosition);

		return () => {
			clearTimeout(timeoutId);
			window.removeEventListener('resize', updatePosition);
		};
	}, [targetRef]);

	return ReactDOM.createPortal(
		<div
			className={styles.pulse}
			style={{
				top: `${position.top}px`,
				left: `${position.left}px`,
				transform: 'translate(-50%, -50%)',
				transition: animate ? 'all 0.3s ease' : 'none',
			}}
		>
			<div className={styles.pulsating}></div>
		</div>,
		document.getElementById('pulse-container') // Указываем, куда рендерить
	);
}

export default Pulse;
