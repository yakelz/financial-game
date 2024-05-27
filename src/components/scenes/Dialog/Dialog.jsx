import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import useGameStore from '@core/store/useGameStore';
import useDialogStore from '@core/store/useDialogStore';
import { useAudio } from '@core/audio/AudioContext';

import styles from './Dialog.module.css';

function Dialog() {
	const { nextAction } = useGameStore();

	const { setVoiceSource } = useAudio();
	const { currentDialogId, resetDialog, dialogues, setCurrentDialogId, setAnswerPhonemes } =
		useDialogStore();

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

	const typingInterval = useRef(null);

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
				if (!selectedChoice.responseId) {
					// тут логика завершения диалога
					nextAction();

					return;
				}
				setCurrentDialogId(selectedChoice.responseId);
				setShowAnswer(true);
				// Если должно идти сразу два вопроса подряд, тогда speech == null
				if (!dialogues[selectedChoice.responseId].speech) {
					setShowChoices(true);
				}
			});
		}
	}, [selectedChoice, showQuestion]);

	useEffect(() => {
		if (currentDialog.speech && showAnswer) {
			setAnswerPhonemes(currentDialog.phonemes || currentDialog.speech);
			typeText(currentDialog.speech, setAnswerText, currentDialog.audio, () => {
				setShowChoices(true);
				setAnswerPhonemes(null);
			});
		}
	}, [currentDialog, showAnswer]);

	function typeText(text, setText, audio, onFinished) {
		setText(''); // Сбрасываем текст

		// Запускаем воспроизведение аудио сразу и устанавливаем флаги
		let audioFinished = false;
		let typingFinished = false;

		setVoiceSource(audio, () => {
			audioFinished = true;
			checkCompletion();
		});

		// Установка текста после обнуления
		setText((prev) => {
			let output = prev; // начинаем с пустой строки
			let i = 0;
			typingInterval.current = setInterval(() => {
				output += text.charAt(i);
				setText(output); // Обновляем текст
				i++;
				if (i === text.length) {
					clearInterval(typingInterval.current);
					typingFinished = true;
					checkCompletion();
				}
			}, 60);
			return output; // Возвращаем начальное значение output
		});

		function checkCompletion() {
			if (audioFinished && typingFinished) {
				onFinished && onFinished();
			}
		}
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
							disabled={choice.lockCondition ? choice.lockCondition : false}
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
