import React, { useState } from 'react';
import useViewStore from '@core/store/useViewStore';
import phone from '@assets/UI/Icons/phone.svg';

function Phone() {
	const { isPhoneOpen, setPhoneSubView, setPhoneOpen } = useViewStore();
	return (
		<>
			<img
				src={phone}
				alt='Телефон'
				onClick={() => {
					setPhoneSubView('home');
					setPhoneOpen(!isPhoneOpen);
				}}
			/>
		</>
	);
}

export default Phone;
