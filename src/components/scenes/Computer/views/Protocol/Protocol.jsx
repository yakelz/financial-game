import React, { useState } from 'react';
import styles from './Protocol.module.css';
import ProtocolIco from '@assets/Computer/protocol.svg?react';
import ProtocolModal from './ProtocolModal/ProtocolModal';

import useGameStore from '@core/store/useGameStore';

function Protocol() {
	const [isModalOpen, setModalOpen] = useState(false);
	const { caseItems, setCaseRead } = useGameStore();

	const openModal = (index) => {
		setCaseRead(index);
		console.log(caseItems);
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
				{caseItems.map((caseItem, index) => (
					<div
						key={index}
						className={styles.case}
						onClick={() => {
							openModal(index);
						}}
					>
						<span className={styles.number}>{caseItem.number}</span>
						<span className={styles.title}>{caseItem.title}</span>
					</div>
				))}
			</main>
			{isModalOpen && <ProtocolModal onClose={closeModal} />}
		</div>
	);
}

export default Protocol;
