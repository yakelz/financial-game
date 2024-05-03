import React from 'react';
import slide from '@assets/Computer/PhoneScam/Slides/9.svg';
import styles from './Slide.module.css';

function Slide9() {
	return (
		<div className={styles.page}>
			<h2>Схема телефонного мошенничества</h2>
			<img src={slide} alt='Девятый слайд' />
		</div>
	);
}

export default Slide9;
