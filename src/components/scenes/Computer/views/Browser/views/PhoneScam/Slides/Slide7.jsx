import React from 'react';
import slide from '@assets/Computer/PhoneScam/Slides/7.svg';
import styles from './Slide.module.css';

function Slide7() {
	return (
		<div className={styles.page}>
			<h2>Схема телефонного мошенничества</h2>
			<img src={slide} alt='Седьмой слайд' />
		</div>
	);
}

export default Slide7;
