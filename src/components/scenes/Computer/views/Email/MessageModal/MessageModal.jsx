import React, { useState, useEffect } from 'react';
import styles from './MessageModal.module.css';
import { useSpring, animated } from 'react-spring';
import { useAudio } from '@core/audio/AudioContext';
import CloseButton from '@ui/Buttons/CloseButton/CloseButton';
import MessageFront from '@assets/Computer/message_front.svg?react';
import MessageBack from '@assets/Computer/message_back.svg?react';

function MessageModal({ message, onClose }) {
	const { playEffectSound } = useAudio();

	const containerSpring = useSpring({
		from: { transform: 'translateY(100%)' },
		to: { transform: 'translateY(0)' },
		config: { tension: 120, friction: 14 },
	});

	useEffect(() => {
		playEffectSound('./Audio/Sounds/fast_whoosh_02.wav');
	}, []);

	const [isRaised, setIsRaised] = useState(false);
	const [isAbove, setIsAbove] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const handleTextClick = () => {
		if (!isClicked) {
			setIsClicked(true);
			playEffectSound('./Audio/Sounds/fast_whoosh_05.wav');
			setIsRaised(true);
			setTimeout(() => {
				setIsAbove(true);
			}, 200);
		}
	};

	// const handleTransitionEnd = () => {
	// 	if (!isRaised && !isAbove) {
	// 		setIsAbove(false);
	// 	}
	// };

	return (
		<div className={styles.modalBackground}>
			<div className={styles.modal}>
				<CloseButton className={styles.close} onClick={onClose} />
				<animated.div style={containerSpring} className={styles.messageContainer}>
					<span
						className={`${styles.text} ${isRaised ? styles.raised : ''} ${
							isAbove ? styles.above : ''
						}`}
						onClick={handleTextClick}
						// onTransitionEnd={handleTransitionEnd}
					>
						{message}
					</span>
					<MessageBack className={styles.messageBack} />
					{!isRaised && !isAbove && <MessageFront className={styles.messageFront} />}
				</animated.div>
			</div>
		</div>
	);
}

export default MessageModal;
