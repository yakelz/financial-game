import React, { useState } from 'react';
import SettingsModal from './SettingsModal';
import SettingsButton from '@ui/Buttons/SettingsButton/SettingsButton';

function Settings() {
	const [isModalOpen, setModalOpen] = useState(false);
	const toggleModal = () => setModalOpen(!isModalOpen);

	return (
		<>
			{isModalOpen && <SettingsModal onClose={toggleModal} />}
			<SettingsButton onClick={toggleModal} />
		</>
	);
}

export default Settings;
