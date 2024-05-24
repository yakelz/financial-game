import React, { useState } from 'react';
import useViewStore from '@core/store/useViewStore';
import phone from '@assets/UI/Icons/phone.svg';

function Phone() {
	const { isPhoneOpen, setPhoneOpen } = useViewStore();
	return (
		<>
			<img src={phone} alt='Телефон' onClick={() => setPhoneOpen(!isPhoneOpen)} />
		</>
	);
}

export default Phone;
