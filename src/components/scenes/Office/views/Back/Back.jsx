import React, { useContext } from 'react';
import ViewContext from '@utils/ViewContext';

import Background from '@ui/Background/Background';

import backView from '@assets/Office/back.svg';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';
import TableArrow from '@assets/Office/arrow_4.svg?react';
import BackArrow from '@assets/Office/arrow_1.svg?react';
import DoorArrow from '@assets/Office/arrow_2.svg?react';

function Back() {
	const { setCurrentView } = useContext(ViewContext);
	return (
		<>
			<ArrowButton
				position={{ bottom: '30%', right: '45%' }}
				onClick={() => setCurrentView('table')}
			>
				<TableArrow />
			</ArrowButton>
			{/* <ArrowButton position={{ top: '45%', right: '38%' }} onClick={() => setCurrentView('front')}>
				<TableArrow />
			</ArrowButton> */}
			<ArrowButton position={{ bottom: '5%', left: '50%' }} onClick={() => setCurrentView('front')}>
				<BackArrow />
			</ArrowButton>
			<ArrowButton position={{ bottom: '40%', left: '30%' }} onClick={() => setCurrentView('door')}>
				<DoorArrow />
			</ArrowButton>
			<Background src={backView} />
		</>
	);
}

export default Back;
