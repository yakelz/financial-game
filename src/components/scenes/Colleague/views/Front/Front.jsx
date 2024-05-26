import useViewStore from '@core/store/useViewStore';
import React from 'react';
import Background from '@ui/Background/Background';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';

import backView from '@assets/Colleague/front.svg';
import DoorArrow from '@assets/UI/Buttons/Arrows/arrow_1.svg?react';
import TableArrow from '@assets/UI/Buttons/Arrows/arrow_2.svg?react';

function Front() {
	const { setColleagueSubView } = useViewStore();

	return (
		<>
			<ArrowButton
				position={{ bottom: '35%', left: '40%' }}
				onClick={() => setColleagueSubView('table')}
			>
				<TableArrow />
			</ArrowButton>
			<ArrowButton
				position={{ bottom: '10%', left: '60%' }}
				onClick={() => setColleagueSubView('door')}
			>
				<DoorArrow />
			</ArrowButton>

			<Background src={backView} />
		</>
	);
}

export default Front;
