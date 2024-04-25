import React, { useEffect, useRef } from 'react';
import grandmother from '@assets/UI/MinorCharacters/Grandmother/grandmother.svg';
import styles from './Grandmother.module.css';

function Grandmother({ svgRef }) {
	const imgRef = useRef(null);
	useEffect(() => {
		const updatePosition = () => {
			if (svgRef.current && imgRef.current) {
				const chair = svgRef.current.getElementById('chair');
				const chairRect = chair.getBoundingClientRect();

				const imgHeight = imgRef.current.offsetHeight;

				// установка верха изображения на нижнюю границу стула минус высота изображения
				const top = chairRect.bottom - imgHeight;
				const left = chairRect.left; // левый край стула

				imgRef.current.style.left = `${left - 20}px`;
				imgRef.current.style.top = `${top}px`;
				imgRef.current.style.visibility = 'visible';
			}
		};
		imgRef.current.onload = updatePosition;

		// слушатель на изменение размера окна
		window.addEventListener('resize', updatePosition);

		return () => {
			if (imgRef) {
				imgRef.onload = null;
			}
			window.removeEventListener('resize', updatePosition);
		};
	}, []);
	return <img ref={imgRef} className={styles.grandmother} src={grandmother} alt='Бабушка' />;
}

export default Grandmother;
