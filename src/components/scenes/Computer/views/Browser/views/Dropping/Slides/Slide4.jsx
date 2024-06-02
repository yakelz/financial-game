import React from 'react';
import slide from '@assets/Computer/Dropping/Slides/4.svg';
import styles from './Slide.module.css';

function Slide4() {
	return (
		<div className={styles.page}>
			<h2>Кто идет в дропы? </h2>
			<img src={slide} alt='Четвертый слайд' />
		</div>
	);
}

export default Slide4;
