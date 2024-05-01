import React, { useRef } from 'react';
import Clear from '@assets/Cases/Case1/clear.svg?react';
import styles from './Case.module.css';

function Case1() {
	const caseRef = useRef(null);

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
			<Clear />
		</div>
	);
}

export default Case1;
