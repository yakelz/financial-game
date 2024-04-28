import React, { useEffect, useRef, useState } from 'react';
import GrandmotherImg from '@assets/UI/MinorCharacters/Grandmother/grandmother.svg?react';
import styles from './Grandmother.module.css';
import useDialogStore from '@core/store/useDialogStore';
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

function Grandmother({ svgRef }) {
	const { answerPhonemes } = useDialogStore();

	const imgRef = useRef(null);
	const mouthRef = useRef(null);
	const [currentMouth, setCurrentMouth] = useState(mouths[0]);
	const [isSpeaking, setIsSpeaking] = useState(false);

	useEffect(() => {
		const updatePosition = () => {
			if (svgRef.current && imgRef.current && mouthRef.current) {
				const chair = svgRef.current.getElementById('chair');
				const chairRect = chair.getBoundingClientRect();

				const imgRect = imgRef.current.getBoundingClientRect();
				const imgHeight = imgRect.height;

				// установка верха изображения на нижнюю границу стула минус высота изображения
				const top = chairRect.bottom - imgHeight;
				const left = chairRect.left; // левый край стула

				imgRef.current.style.left = `${left - 20}px`;
				imgRef.current.style.top = `${top}px`;
				imgRef.current.style.visibility = 'visible';

				const mouthGroup = imgRef.current.getElementById('mouth');
				const mouthRect = mouthGroup.getBoundingClientRect();
				const leftMouth = mouthRect.left;
				const topMouth = mouthRect.top;
				mouthRef.current.style.left = `${leftMouth - 2}px`;
				mouthRef.current.style.top = `${topMouth - 10}px`;
				mouthRef.current.style.visibility = 'visible';
			}
		};
		updatePosition();

		// слушатель на изменение размера окна
		window.addEventListener('resize', updatePosition);

		return () => {
			if (imgRef) {
				imgRef.onload = null;
			}
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
			<img ref={mouthRef} src={currentMouth} alt='Рот бабушки' className={styles.mouth} />
			<GrandmotherImg ref={imgRef} className={styles.grandmother} />
		</>
	);
}

export default Grandmother;
