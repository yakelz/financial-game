import React from 'react';
import slide from '@assets/Computer/Dropping/Slides/3.svg';
import styles from './Slide.module.css';

function Slide3() {
	return (
		<div className={styles.page}>
			<h2>Кто идет в дропы? </h2>
			<img src={slide} alt='Третий слайд' />
		</div>
	);
}

export default Slide3;
