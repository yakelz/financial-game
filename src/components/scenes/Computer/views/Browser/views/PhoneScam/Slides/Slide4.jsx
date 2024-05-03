import React from 'react';
import slide from '@assets/Computer/PhoneScam/Slides/4.svg';
import styles from './Slide.module.css';

function Slide4() {
	return (
		<div className={styles.page}>
			<img src={slide} alt='Четвертый слайд' />
		</div>
	);
}

export default Slide4;
