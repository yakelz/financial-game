import React from 'react';
import styles from './Protocol.module.css';
import ProtocolIco from '@assets/Computer/protocol.svg?react';

function Protocol() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<ProtocolIco />
				<h2>Proтокол</h2>
			</header>
			<main>
				<div
					className={styles.message}
					onClick={() => openModal('Здравствуй, Алексей. В системе появилось новое сообщение...')}
				>
					<span className={styles.from}>Федоров С.С</span>
					<span className={styles.theme}>Новое дело</span>
					<span className={styles.text}>
						Здравствуй, Алексей. В системе появилось новое сообщение
					</span>
				</div>
			</main>
		</div>
	);
}

export default Protocol;
