import React from 'react';
import useViewStore from '@core/store/useViewStore';
import calendar from '@assets/UI/Icons/calendar.svg';

function Calendar() {
	const { isPhoneOpen, setPhoneSubView, setPhoneOpen } = useViewStore();
	return (
		<>
			<img
				src={calendar}
				alt='Календарь'
				onClick={() => {
					setPhoneSubView('calendar');
					setPhoneOpen(!isPhoneOpen);
				}}
			/>
		</>
	);
}

export default Calendar;
