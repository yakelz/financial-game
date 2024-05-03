import React from 'react';
import slide from '@assets/Computer/PhoneScam/Slides/2.svg';
import styles from './Slide.module.css';

function Slide2() {
	return (
		<div className={styles.page}>
			<img style={{ maxHeight: '80vh' }} src={slide} alt='Второй слайд' />
		</div>
	);
}

export default Slide2;
