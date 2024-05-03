import React from 'react';
import slide from '@assets/Computer/PhoneScam/Slides/8.svg';
import styles from './Slide.module.css';

function Slide8() {
	return (
		<div className={styles.page}>
			<h2>Схема телефонного мошенничества</h2>
			<img src={slide} alt='Восьмой слайд' />
		</div>
	);
}

export default Slide8;
