import React, { useContext } from 'react';
import ViewContext from '@utils/ViewContext';

import Background from '@ui/Background/Background';
import doorView from '@assets/Office/door.svg';

import DoorArrow from '@assets/Office/arrow_1.svg?react';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';

function Door() {
	const { setCurrentView } = useContext(ViewContext);
	return (
		<>
			<ArrowButton position={{ bottom: '5%', left: '50%' }} onClick={() => setCurrentView('front')}>
				<DoorArrow />
			</ArrowButton>
			<Background src={doorView} />
		</>
	);
}

export default Door;
