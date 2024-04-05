import React, { useContext } from 'react';
import ViewContext from '@utils/ViewContext';

import Background from '@ui/Background/Background';
import backView from '@assets/Office/front.svg';

import DoorArrow from '@assets/Office/arrow_1.svg?react';
import TableArrow from '@assets/Office/arrow_2.svg?react';
import BackArrow from '@assets/Office/arrow_3.svg?react';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';

function Front() {
	const { setCurrentView } = useContext(ViewContext);

	return (
		<>
			<ArrowButton
				position={{ bottom: '35%', left: '40%' }}
				onClick={() => setCurrentView('table')}
			>
				<TableArrow />
			</ArrowButton>
			<ArrowButton position={{ bottom: '5%', left: '50%' }} onClick={() => setCurrentView('door')}>
				<DoorArrow />
			</ArrowButton>
			<ArrowButton position={{ top: '30%', right: '40%' }} onClick={() => setCurrentView('back')}>
				<BackArrow />
			</ArrowButton>
			<Background src={backView} />
		</>
	);
}

export default Front;
