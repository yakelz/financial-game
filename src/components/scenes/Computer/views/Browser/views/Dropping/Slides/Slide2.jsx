import React from 'react';
import slide from '@assets/Computer/Dropping/Slides/2.svg';
import styles from './Slide.module.css';

function Slide2() {
	return (
		<div className={styles.page}>
			<h2>Дроп</h2>
			<img style={{ maxHeight: '80vh' }} src={slide} alt='Второй слайд' />
		</div>
	);
}

export default Slide2;
