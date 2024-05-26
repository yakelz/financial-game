import React, { useRef } from 'react';
import useViewStore from '@core/store/useViewStore';
import getAction from '@core/actions/getAction';
import useGameStore from '@core/store/useGameStore';

import Background from '@ui/Background/Background';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';

import BackView from '@assets/Colleague/table.svg?react';
import BackArrow from '@assets/UI/Buttons/Arrows/arrow_1.svg?react';

function Table() {
	const { setColleagueSubView } = useViewStore();
	const { component: ActionComponent } = getAction('Table');
	const svgRef = useRef(null);
	const { currentActionIndex } = useGameStore();

	return (
		<>
			<ActionComponent svgRef={svgRef} />

			<ArrowButton
				position={{ bottom: '10%', left: '60%' }}
				onClick={() => setColleagueSubView('front')}
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
