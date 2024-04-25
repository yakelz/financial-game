import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import useDialogStore from '@core/store/useDialogStore';
import { useAudio } from '@core/audio/AudioContext';

import styles from './Dialog.module.css';

function Dialog() {
	const { setVoiceSource } = useAudio();
	const { currentDialogId, dialogues, setCurrentDialogId } = useDialogStore();
	const currentDialog = dialogues[currentDialogId];

	const [showQuestion, setShowQuestion] = useState(false);
	const [showAnswer, setShowAnswer] = useState(false);
	const [showChoices, setShowChoices] = useState(true);

	const [selectedChoice, setSelectedChoice] = useState('');

	const [answerText, setAnswerText] = useState('');
	const [questionText, setQuestionText] = useState('');

	const handleChoice = (choice) => {
		setShowChoices(false);
		setShowQuestion(true);
		setSelectedChoice(choice);
	};

	// Анимация для выезда choices справа налево
	const choicesSpring = useSpring({
		from: { transform: 'translateX(100%)' },
		to: { transform: 'translateX(0%)' },
		config: { tension: 170, friction: 26 },
		reset: showChoices,
	});

	useEffect(() => {
		if (selectedChoice && showQuestion) {
			typeText(selectedChoice.text, setQuestionText, selectedChoice.audio, () => {
				setCurrentDialogId(selectedChoice.responseId);
				setShowAnswer(true);
			});
		}
	}, [selectedChoice, showQuestion]);

	useEffect(() => {
		if (currentDialog.speech && showAnswer) {
			typeText(currentDialog.speech, setAnswerText, currentDialog.audio, () => {
				setShowChoices(true);
			});
		}
	}, [currentDialog, showAnswer]);

	function typeText(text, setText, audio, onFinished) {
		setText(''); // Сбрасываем текст
		setVoiceSource(audio, () => {
			onFinished && onFinished();
		});

		// Установка текста после обнуления
		setText((prev) => {
			let output = prev; // начинаем с пустой строки
			let i = 0;
			const typing = setInterval(() => {
				output += text.charAt(i);
				setText(output); // Обновляем текст
				i++;
				if (i === text.length) {
					clearInterval(typing);
				}
			}, 60);
			return output; // Возвращаем начальное значение output
		});
	}

	return (
		<div className={styles.dialog}>
			{showQuestion && (
				<div className={styles.question}>
					<span>{questionText}</span>
				</div>
			)}

			{showAnswer && (
				<div className={styles.answer}>
					<span className={styles.name}>{currentDialog.name}</span>
					<span className={styles.speech}>{answerText}</span>
				</div>
			)}

			{showChoices && (
				<animated.div style={choicesSpring} className={styles.choices}>
					{currentDialog.choices.map((choice, index) => (
						<button
							key={index}
							className={styles.choice}
							onClick={() => handleChoice(choice)}
							disabled={choice.unlockCondition}
						>
							{choice.text}
						</button>
					))}
				</animated.div>
			)}
		</div>
	);
}

export default Dialog;
