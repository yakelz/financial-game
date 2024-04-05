import React, { useState } from 'react';
import SettingsModal from '@scenes/Settings/SettingsModal';
import SettingsIcon from '@assets/UI/Buttons/settings.svg?react';
import styles from './SettingsButton.module.css';

function SettingsButton() {
	const [isModalOpen, setModalOpen] = useState(false);
	const toggleModal = () => setModalOpen(!isModalOpen);
	return (
		<>
			{isModalOpen && <SettingsModal onClose={toggleModal} />}
			<button className={styles.button} onClick={toggleModal}>
				<SettingsIcon />
			</button>
		</>
	);
}

export default SettingsButton;
