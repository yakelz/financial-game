import React, { useContext } from 'react';
import Background from '@ui/Background/Background';
import ViewContext from '@utils/ViewContext';

import backView from '@assets/Office/table.svg';
import BackArrow from '@assets/Office/arrow_1.svg?react';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';

function Table() {
	const { setCurrentView } = useContext(ViewContext);
	return (
		<>
			<ArrowButton position={{ bottom: '5%', left: '50%' }} onClick={() => setCurrentView('front')}>
				<BackArrow />
			</ArrowButton>
			<Background src={backView} />
		</>
	);
}

export default Table;
