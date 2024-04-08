import React, { useState } from 'react';
import SettingsModal from '@scenes/Settings/SettingsModal';
import SettingsIcon from '@assets/UI/Buttons/settings.svg?react';
import styles from './SettingsButton.module.css';

import { useSpring, animated } from 'react-spring';

function SettingsButton() {
	const [isModalOpen, setModalOpen] = useState(false);
	const toggleModal = () => setModalOpen(!isModalOpen);

	const buttonAnimation = useSpring({
		from: { transform: 'translateX(-100%)' },
		to: { transform: 'translateX(0)' },
		delay: 1300,
	});

	return (
		<>
			{isModalOpen && <SettingsModal onClose={toggleModal} />}
			<animated.div style={buttonAnimation}>
				<button className={styles.button} onClick={toggleModal}>
					<SettingsIcon />
				</button>
			</animated.div>
		</>
	);
}

export default SettingsButton;
