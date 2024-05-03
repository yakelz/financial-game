import React from 'react';
import slide from '@assets/Computer/PhoneScam/Slides/6.svg';
import styles from './Slide.module.css';

function Slide6() {
	return (
		<div className={styles.page}>
			<p>
				Злоумышленники с помощью технологий делают так, что на экране телефона высвечивается
				официальный номер банка, а в мессенджерах в качестве аватара используют логотипы банков и
				эмблемы правоохранительных органов.
			</p>
			<img style={{ maxWidth: '35vw' }} src={slide} alt='Шестой слайд' />
		</div>
	);
}

export default Slide6;
