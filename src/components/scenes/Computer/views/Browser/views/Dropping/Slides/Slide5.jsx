import React from 'react';
import slide from '@assets/Computer/Dropping/Slides/5.svg';
import styles from './Slide.module.css';

function Slide5() {
	return (
		<div className={styles.page}>
			<h2>Ответственность</h2>
			<img src={slide} alt='Пятый слайд' />
		</div>
	);
}

export default Slide5;
