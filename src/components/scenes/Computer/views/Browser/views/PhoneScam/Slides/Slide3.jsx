import React from 'react';
import slide from '@assets/Computer/PhoneScam/Slides/3.svg';
import styles from './Slide.module.css';

function Slide3() {
	return (
		<div className={styles.page}>
			<h2>5 признаков телефонного мошенничества</h2>
			<img src={slide} alt='Третий слайд' />
		</div>
	);
}

export default Slide3;
