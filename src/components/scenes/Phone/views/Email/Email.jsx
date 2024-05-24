import React, { useState } from 'react';
import styles from './Email.module.css';
import useGameStore from '@core/store/useGameStore';
import MessageScreen from './MessageScreen/MessageScreen';
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
			{isModalOpen ? (
				<MessageScreen message={currentMessage} onClose={closeModal} />
			) : (
				<main className={styles.messages}>
					{emails.map((email, index) => (
						<div
							key={index}
							className={`${styles.message} ${email.read ? '' : styles.unread}`}
							onClick={() => openModal(email, index)}
						>
							<div className={styles.title}>
								<span className={styles.from}>{email.from}</span>
								<span className={styles.theme}>{email.theme}</span>
							</div>
							<span className={styles.text}>{email.text}</span>
						</div>
					))}
				</main>
			)}
		</div>
	);
}

export default Email;
