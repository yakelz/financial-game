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
			<div className={styles.tab}>Мои дела</div>
			<main>
				<div className={styles.case} onClick={() => {}}>
					<span className={styles.number}>№1150</span>
					<span className={styles.title}>Телефонное мошенничество</span>
				</div>
				<div className={styles.case} onClick={() => {}}>
					<span className={styles.number}>№1150</span>
					<span className={styles.title}>Телефонное мошенничество</span>
				</div>
				<div className={styles.case} onClick={() => {}}>
					<span className={styles.number}>№1150</span>
					<span className={styles.title}>Телефонное мошенничество</span>
				</div>
				<div className={styles.case} onClick={() => {}}>
					<span className={styles.number}>№1150</span>
					<span className={styles.title}>Телефонное мошенничество</span>
				</div>
				<div className={styles.case} onClick={() => {}}>
					<span className={styles.number}>№1150</span>
					<span className={styles.title}>Телефонное мошенничество</span>
				</div>
				<div className={styles.case} onClick={() => {}}>
					<span className={styles.number}>№1150</span>
					<span className={styles.title}>Телефонное мошенничество</span>
				</div>
				<div className={styles.case} onClick={() => {}}>
					<span className={styles.number}>№1150</span>
					<span className={styles.title}>Телефонное мошенничество</span>
				</div>
			</main>
		</div>
	);
}

export default Protocol;
