import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Background from '@ui/Background/Background';
import ViewContext from '@utils/ViewContext';

import backView from '@assets/Office/table.svg';
import BackArrow from '@assets/Office/arrow_1.svg?react';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';
import ComputerArrow from '@assets/Office/arrow_2.svg?react';

function Table() {
	const { setCurrentView } = useContext(ViewContext);
	const navigate = useNavigate();
	return (
		<>
			<ArrowButton position={{ bottom: '20%', left: '20%' }} onClick={() => navigate('/computer')}>
				<ComputerArrow />
			</ArrowButton>
			<ArrowButton position={{ bottom: '5%', left: '50%' }} onClick={() => setCurrentView('front')}>
				<BackArrow />
			</ArrowButton>
			<Background src={backView} />
		</>
	);
}

export default Table;
