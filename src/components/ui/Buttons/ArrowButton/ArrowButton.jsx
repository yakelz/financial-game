import React, { useContext } from 'react';
import { useAudio } from '@utils/AudioContext';

function ArrowButton({ position, onClick, children }) {
	const { playEffectSound } = useAudio();

	const handleClick = () => {
		playEffectSound('./Audio/Sounds/dig_click_02.wav');
		onClick();
	};

	return (
		<button style={{ position: 'fixed', ...position }} onClick={handleClick}>
			{children}
		</button>
	);
}

export default ArrowButton;
