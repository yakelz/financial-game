import React from 'react';
import styles from './MessageScreen.module.css';
import BackIcon from '@assets/Phone/back.svg?react';
function MessageScreen({ message, onClose }) {
	return (
		<>
			{/* <button className={styles.close} onClick={onClose}>
				<BackIcon style={{ stroke: 'black' }} />
			</button> */}
			<main className={styles.message}>
				<div className={styles.title}>
					<span className={styles.theme}>{message.theme}</span>
					<span>От: {message.from}</span>
				</div>
				<p className={styles.text}>{message.text}</p>
			</main>
		</>
	);
}

export default MessageScreen;
