import React, { useState } from 'react';
import styles from './Protocol.module.css';
import ProtocolIco from '@assets/Computer/protocol.svg?react';
import ProtocolModal from './ProtocolModal/ProtocolModal';

function Protocol() {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<ProtocolIco />
				<h2>Proтокол</h2>
			</header>
			<div className={styles.tab}>Мои дела</div>
			<main>
				<div className={styles.case} onClick={openModal}>
					<span className={styles.number}>№1150</span>
					<span className={styles.title}>Телефонное мошенничество</span>
				</div>
				<div className={styles.case} onClick={openModal}>
					<span className={styles.number}>№1150</span>
					<span className={styles.title}>Телефонное мошенничество</span>
				</div>
			</main>
			{isModalOpen && <ProtocolModal onClose={closeModal} />}
		</div>
	);
}

export default Protocol;
