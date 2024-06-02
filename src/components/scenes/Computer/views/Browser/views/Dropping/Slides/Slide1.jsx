import React from 'react';
import styles from './Slide.module.css';
import slide from '@assets/Computer/Dropping/Slides/1.svg';

function Slide1() {
	return (
		<div className={styles.page}>
			<h2>Дроппинг</h2>
			<img style={{ maxHeight: '80vh' }} src={slide} alt='Первый слайд' />
		</div>
	);
}

export default Slide1;
