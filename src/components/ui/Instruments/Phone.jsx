import React from 'react';

import phone from '@assets/UI/Icons/phone.svg';
import useViewStore from '@core/store/useViewStore';

function Phone() {
	const { setView } = useViewStore();
	return (
		<>
			<img
				src={phone}
				alt='Телефон'
				onClick={() => {
					setView('computer');
				}}
			/>
		</>
	);
}

export default Phone;
