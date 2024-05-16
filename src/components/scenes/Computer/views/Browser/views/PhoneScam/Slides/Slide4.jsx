import React from 'react';
import slide from '@assets/Computer/PhoneScam/Slides/4.svg';
import styles from './Slide.module.css';

function Slide4() {
	return (
		<div className={styles.page}>
			<h2>Психологические приёмы мошенников</h2>
			<img src={slide} alt='Четвертый слайд' />
		</div>
	);
}

export default Slide4;
