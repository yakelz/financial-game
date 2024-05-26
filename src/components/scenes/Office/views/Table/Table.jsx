import React, { useRef } from 'react';
import useViewStore from '@core/store/useViewStore';
import getAction from '@core/actions/getAction';
import useGameStore from '@core/store/useGameStore';

import Background from '@ui/Background/Background';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';

import BackView from '@assets/Office/table.svg?react';
import BackArrow from '@assets/UI/Buttons/Arrows/arrow_1.svg?react';
import ComputerArrow from '@assets/UI/Buttons/Arrows/arrow_1.svg?react';

function Table() {
	const { setView, setOfficeSubView } = useViewStore();
	const { component: ActionComponent } = getAction('Table');
	const svgRef = useRef(null);
	const { currentActionIndex } = useGameStore();

	return (
		<>
			<ActionComponent svgRef={svgRef} />
			<ArrowButton
				position={{ bottom: '65%', left: '30%' }}
				onClick={() => {
					setView('computer');
				}}
			>
				<ComputerArrow />
			</ArrowButton>

			{currentActionIndex !== 6 && (
				<ArrowButton
					position={{ bottom: '5%', left: '60%' }}
					onClick={() => setOfficeSubView('front')}
				>
					<BackArrow />
				</ArrowButton>
			)}

			<Background>
				<BackView ref={svgRef} />
			</Background>
		</>
	);
}

export default Table;
