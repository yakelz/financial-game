import React, { useRef } from 'react';
import useViewStore from '@core/store/useViewStore';
import getAction from '@core/actions/getAction';

import Background from '@ui/Background/Background';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';

import BackView from '@assets/Office/table.svg?react';
import BackArrow from '@assets/UI/Buttons/Arrows/arrow_1.svg?react';
import ComputerArrow from '@assets/UI/Buttons/Arrows/arrow_2.svg?react';

function Table() {
	const { setView, setOfficeSubView } = useViewStore();
	const { component: ActionComponent } = getAction('Table');
	const svgRef = useRef(null);

	return (
		<>
			<ActionComponent svgRef={svgRef} />
			<ArrowButton
				position={{ bottom: '20%', left: '20%' }}
				onClick={() => {
					setView('computer');
				}}
			>
				<ComputerArrow />
			</ArrowButton>
			<ArrowButton
				position={{ bottom: '5%', left: '60%' }}
				onClick={() => setOfficeSubView('front')}
			>
				<BackArrow />
			</ArrowButton>
			<Background>
				<BackView ref={svgRef} />
			</Background>
		</>
	);
}

export default Table;
