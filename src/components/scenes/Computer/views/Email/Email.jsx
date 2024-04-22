import React, { useState, useEffect } from 'react';
import Mail from '@assets/Computer/email.svg?react';
import styles from './Email.module.css';
import MessageModal from './MessageModal/MessageModal';
import useGameStore from '@core/store/useGameStore';

function Email() {
	const { emails, setEmailRead } = useGameStore();
	const [isModalOpen, setModalOpen] = useState(false);
	const [currentMessage, setCurrentMessage] = useState(null);

	const openModal = (message, index) => {
		setEmailRead(index);
		setCurrentMessage(message);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<Mail />
				<h2>Почта</h2>
			</header>
			<div className={styles.inbox}>Входящие {emails.length}</div>
			<main>
				{emails.map((email, index) => (
					<div
						key={index}
						className={`${styles.message} ${email.read ? '' : styles.unread}`}
						onClick={() => openModal(email.text, index)}
					>
						<span className={styles.from}>{email.from}</span>
						<span className={styles.theme}>{email.theme}</span>
						<span className={styles.text}>{email.text}</span>
					</div>
				))}
			</main>
			{isModalOpen && <MessageModal message={currentMessage} onClose={closeModal} />}
		</div>
	);
}

export default Email;
