import React, { useState, useEffect } from 'react';
import dialog from '@core/data/dialogues/grandmother';
import useDialogStore from '@core/store/useDialogStore';
import styles from './Dialog.module.css';
import TypeText from './TypeText';

function Dialog() {
	const [showQuestion, setShowQuestion] = useState(false);
	const [showAnswer, setShowAnswer] = useState(false);
	const [showChoices, setShowChoices] = useState(true);

	const handleChoice = (choice) => {
		setShowChoices(false);
		setShowQuestion(true);
	};

	return (
		<div className={styles.dialog}>
			{showQuestion && (
				<div className={styles.question}>
					<TypeText
						text={
							'Здравствуйте, Валентина Павловна. Я начал расследовать ваше дело. Мне очень жаль, но кажется Вы столкнулись с мошенниками.'
						}
						audio={'./Audio/Voices/Grandmother/1-1.mp3'}
						onFinished={() => {
							setShowAnswer(true);
						}}
					/>
				</div>
			)}

			{showAnswer && (
				<div className={styles.answer}>
					<span className={styles.name}>Валентина Павловна</span>
					<span className={styles.speech}>
						<TypeText
							text={'Почему? С чего вы взяли?'}
							audio={'./Audio/Voices/Grandmother/res1-1.mp3'}
							onFinished={() => {
								setShowChoices(true);
							}}
						/>
					</span>
				</div>
			)}

			{showChoices && (
				<div className={styles.choices}>
					<button
						className={styles.choice}
						onClick={() => {
							handleChoice();
						}}
					>
						Здравствуйте, Валентина Павловна. Я начал расследовать ваше дело. Мне очень жаль, но
						кажется Вы столкнулись с мошенниками.
					</button>
					<button
						className={styles.choice}
						onClick={() => {
							handleChoice();
						}}
					>
						Сколько вам лет?
					</button>
				</div>
			)}
		</div>
	);
}

export default Dialog;
