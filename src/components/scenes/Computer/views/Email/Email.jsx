import React from 'react';
import Mail from '@assets/Computer/email.svg?react';
import styles from './Email.module.css';

function Email() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<Mail />
				<h2>Почта</h2>
			</header>
			<div className={styles.inbox}>Входящие 1</div>
			<main>
				<div className={`${styles.message} ${styles.unread}`}>
					<span className={styles.from}>Федоров С.С</span>
					<span className={styles.theme}>Новое делоНовое делоНовое дело</span>
					<span className={styles.text}>
						Здравствуй, Алексей. В системе появилось новое сообщениеЗдравствуй, Алексей. В системе
						появилось новое сообщениеЗдравствуй, Алексей. В системе появилось новое сообщение
					</span>
				</div>
				<div className={`${styles.message} ${styles.unread}`}>
					<span className={styles.from}>Федоров С.С</span>
					<span className={styles.theme}>Новое делоНовое делоНовое дело</span>
					<span className={styles.text}>
						Здравствуй, Алексей. В системе появилось новое сообщениеЗдравствуй, Алексей. В системе
						появилось новое сообщениеЗдравствуй, Алексей. В системе появилось новое сообщение
					</span>
				</div>
				<div className={`${styles.message} ${styles.unread}`}>
					<span className={styles.from}>Федоров С.С</span>
					<span className={styles.theme}>Новое делоНовое делоНовое дело</span>
					<span className={styles.text}>
						Здравствуй, Алексей. В системе появилось новое сообщениеЗдравствуй, Алексей. В системе
						появилось новое сообщениеЗдравствуй, Алексей. В системе появилось новое сообщение
					</span>
				</div>
				<div className={`${styles.message} ${styles.unread}`}>
					<span className={styles.from}>Федоров С.С</span>
					<span className={styles.theme}>Новое делоНовое делоНовое дело</span>
					<span className={styles.text}>
						Здравствуй, Алексей. В системе появилось новое сообщениеЗдравствуй, Алексей. В системе
						появилось новое сообщениеЗдравствуй, Алексей. В системе появилось новое сообщение
					</span>
				</div>
				<div className={`${styles.message} ${styles.unread}`}>
					<span className={styles.from}>Федоров С.С</span>
					<span className={styles.theme}>Новое делоНовое делоНовое дело</span>
					<span className={styles.text}>
						Здравствуй, Алексей. В системе появилось новое сообщениеЗдравствуй, Алексей. В системе
						появилось новое сообщениеЗдравствуй, Алексей. В системе появилось новое сообщение
					</span>
				</div>
				<div className={`${styles.message} ${styles.unread}`}>
					<span className={styles.from}>Федоров С.С</span>
					<span className={styles.theme}>Новое делоНовое делоНовое дело</span>
					<span className={styles.text}>
						Здравствуй, Алексей. В системе появилось новое сообщениеЗдравствуй, Алексей. В системе
						появилось новое сообщениеЗдравствуй, Алексей. В системе появилось новое сообщение
					</span>
				</div>
				<div className={`${styles.message} ${styles.unread}`}>
					<span className={styles.from}>Федоров С.С</span>
					<span className={styles.theme}>Новое делоНовое делоНовое дело</span>
					<span className={styles.text}>
						Здравствуй, Алексей. В системе появилось новое сообщениеЗдравствуй, Алексей. В системе
						появилось новое сообщениеЗдравствуй, Алексей. В системе появилось новое сообщение
					</span>
				</div>
				<div className={`${styles.message} ${styles.unread}`}>
					<span className={styles.from}>Федоров С.С</span>
					<span className={styles.theme}>Новое делоНовое делоНовое дело</span>
					<span className={styles.text}>
						Здравствуй, Алексей. В системе появилось новое сообщениеЗдравствуй, Алексей. В системе
						появилось новое сообщениеЗдравствуй, Алексей. В системе появилось новое сообщение
					</span>
				</div>

				<div className={styles.message}>
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

export default Email;
