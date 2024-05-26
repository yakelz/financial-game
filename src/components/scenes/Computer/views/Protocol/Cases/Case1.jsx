import React, { useRef } from 'react';
import CasePicture0 from '@assets/Cases/Case1/0.svg?react';
import CasePicture1 from '@assets/Cases/Case1/1.svg?react';
import CasePicture2 from '@assets/Cases/Case1/2.svg?react';
import CasePicture3 from '@assets/Cases/Case1/3.svg?react';
import CasePicture4 from '@assets/Cases/Case1/4.svg?react';
import CasePicture5 from '@assets/Cases/Case1/5.svg?react';
import CasePicture6 from '@assets/Cases/Case1/6.svg?react';
import CasePicture7 from '@assets/Cases/Case1/7.svg?react';

import styles from './Case.module.css';
import useGameStore from '@core/store/useGameStore';

function Case1() {
	const caseRef = useRef(null);
	const { caseProgress } = useGameStore();

	// Массив компонентов SVG
	const casePictures = [
		CasePicture0,
		CasePicture1,
		CasePicture2,
		CasePicture3,
		CasePicture4,
		CasePicture5,
		CasePicture6,
		CasePicture7,
	];

	// Проверка, что caseProgress в пределах допустимого диапазона
	const CurrentCasePicture = casePictures[caseProgress] || casePictures[0];

	const handleDragStart = (startX, scrollLeft) => {
		return (e) => {
			const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
			const deltaX = startX - currentX;
			caseRef.current.scrollLeft = scrollLeft + deltaX;
		};
	};

	const handleDragEnd = (moveHandler) => {
		return () => {
			window.removeEventListener('mousemove', moveHandler);
			window.removeEventListener('mouseup', handleDragEnd(moveHandler));
			window.removeEventListener('touchmove', moveHandler);
			window.removeEventListener('touchend', handleDragEnd(moveHandler));
		};
	};

	const startDrag = (e) => {
		const startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
		const scrollLeft = caseRef.current.scrollLeft;
		const moveHandler = handleDragStart(startX, scrollLeft);

		window.addEventListener('mousemove', moveHandler);
		window.addEventListener('mouseup', handleDragEnd(moveHandler));
		window.addEventListener('touchmove', moveHandler, { passive: false });
		window.addEventListener('touchend', handleDragEnd(moveHandler));

		e.preventDefault();
	};

	return (
		<div ref={caseRef} className={styles.case} onMouseDown={startDrag} onTouchStart={startDrag}>
			<CurrentCasePicture />
		</div>
	);
}

export default Case1;
