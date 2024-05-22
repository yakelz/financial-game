import React from 'react';
import slide from '@assets/Computer/PhoneScam/Slides/3.svg';
import styles from './Slide.module.css';

function Slide3() {
	return (
		<div className={styles.page}>
			<img src={slide} alt='Третий слайд' />
		</div>
	);
}

export default Slide3;
