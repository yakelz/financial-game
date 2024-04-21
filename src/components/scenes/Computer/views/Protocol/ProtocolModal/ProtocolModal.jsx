import React, { useState, useEffect } from 'react';
import styles from './ProtocolModal.module.css';

import { useSpring, animated } from 'react-spring';
import { useAudio } from '@utils/AudioContext';
import CloseButton from '@ui/Buttons/CloseButton/CloseButton';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';

import Arrow from '@assets/UI/Buttons/Arrows/arrow_5.svg?react';

function ProtocolModal({ onClose }) {
	const { playEffectSound } = useAudio();

	const containerSpring = useSpring({
		from: { transform: 'translateY(100%)' },
		to: { transform: 'translateY(0)' },
		config: { tension: 120, friction: 14 },
	});

	useEffect(() => {
		playEffectSound('./Audio/Sounds/fast_whoosh_02.wav');
	}, []);

	return (
		<div className={styles.modalBackground}>
			<div className={styles.modal}>
				<CloseButton className={styles.close} onClick={onClose} />
				<animated.div style={containerSpring} className={styles.caseContainer}>
					<span className={styles.number}>
						Дело №<u>1150</u>
					</span>
					<span className={styles.title}>
						<u>Телефонное мошенничество</u>
					</span>
					<span className={styles.year}>
						<u>2024 год</u>
					</span>
				</animated.div>
				<ArrowButton position={{ bottom: '10%', right: '30%' }}>
					<Arrow />
				</ArrowButton>
			</div>
		</div>
	);
}

export default ProtocolModal;
