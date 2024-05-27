import React, { useRef, useState, useEffect } from 'react';
import useViewStore from '@core/store/useViewStore';
import Dialog from '@scenes/Dialog/Dialog';
import useGameStore from '@core/store/useGameStore';

import Background from '@ui/Background/Background';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';
import useDialogStore from '@core/store/useDialogStore';
import BackView from '@assets/Colleague/table.svg?react';
import BackArrow from '@assets/UI/Buttons/Arrows/arrow_1.svg?react';

import Mouth1 from '@assets/UI/MinorCharacters/Grandmother/mouth1.svg';
import Mouth2 from '@assets/UI/MinorCharacters/Grandmother/mouth2.svg';
import Mouth3 from '@assets/UI/MinorCharacters/Grandmother/mouth3.svg';
import Mouth4 from '@assets/UI/MinorCharacters/Grandmother/mouth4.svg';
import Mouth5 from '@assets/UI/MinorCharacters/Grandmother/mouth5.svg';
import Mouth6 from '@assets/UI/MinorCharacters/Grandmother/mouth6.svg';
import Mouth7 from '@assets/UI/MinorCharacters/Grandmother/mouth7.svg';
import Mouth8 from '@assets/UI/MinorCharacters/Grandmother/mouth8.svg';
import Mouth9 from '@assets/UI/MinorCharacters/Grandmother/mouth9.svg';
import Mouth10 from '@assets/UI/MinorCharacters/Grandmother/mouth10.svg';
const mouths = [Mouth1, Mouth2, Mouth3, Mouth4, Mouth5, Mouth6, Mouth7, Mouth8, Mouth9, Mouth10];

const phonemeToMouthMap = {
	бмп: 0,
	аэия: 1,
	фвй: 2,
	чжшщ: 3,
	л: 4,
	ую: 5,
	ое: 6,
	цдгкнстзх: 7,
	р: 8,
	еы: 9,
};

function Table() {
	const { setColleagueSubView } = useViewStore();
	const { answerPhonemes } = useDialogStore();

	const store = useDialogStore();
	useEffect(() => {
		console.log('Current Store State:', store);
	}, [store]);

	const svgRef = useRef(null);
	const { currentActionIndex } = useGameStore();

	const mouthRef = useRef(null);
	const [currentMouth, setCurrentMouth] = useState(mouths[0]);
	const [isSpeaking, setIsSpeaking] = useState(false);

	useEffect(() => {
		const updatePosition = () => {
			if (svgRef.current && mouthRef.current) {
				const mouthGroup = svgRef.current.getElementById('mouth');
				const mouthRect = mouthGroup.getBoundingClientRect();
				const leftMouth = mouthRect.left;
				const topMouth = mouthRect.top;
				mouthRef.current.style.left = `${leftMouth + 3}px`;
				mouthRef.current.style.top = `${topMouth}px`;
				mouthRef.current.style.visibility = 'visible';
			}
		};
		updatePosition();

		// слушатель на изменение размера окна
		window.addEventListener('resize', updatePosition);

		return () => {
			window.removeEventListener('resize', updatePosition);
		};
	}, []);

	useEffect(() => {
		console.log(answerPhonemes);
		if (!answerPhonemes) {
			setCurrentMouth(mouths[0]);
			setIsSpeaking(false);
			return;
		}
		setIsSpeaking(true);
		let phonemeIndex = 0;
		const interval = setInterval(() => {
			const phoneme = answerPhonemes[phonemeIndex];
			for (const key in phonemeToMouthMap) {
				if (key.includes(phoneme.toLowerCase())) {
					setCurrentMouth(mouths[phonemeToMouthMap[key]]);
					break;
				}
			}
			phonemeIndex = (phonemeIndex + 1) % answerPhonemes.length;
		}, 100); // Период обновления можно настроить

		return () => clearInterval(interval);
	}, [answerPhonemes]);

	return (
		<>
			<img
				ref={mouthRef}
				src={currentMouth}
				alt='Рот персонажа'
				style={{
					visibility: 'hidden',
					position: 'fixed',
					width: '2vw',
					height: '2vh',
					zIndex: '1',
				}}
			/>
			<Dialog />
			{currentActionIndex !== 7 && (
				<ArrowButton
					position={{ bottom: '10%', left: '60%' }}
					onClick={() => setColleagueSubView('front')}
				>
					<BackArrow />
				</ArrowButton>
			)}
			<Background>
				<BackView ref={svgRef} />
			</Background>
		</>
	);
}

export default Table;
