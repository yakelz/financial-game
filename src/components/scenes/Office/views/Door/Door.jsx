import useViewStore from '@core/store/useViewStore';
import React, { useRef } from 'react';
import Background from '@ui/Background/Background';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';
import useGameStore from '@core/store/useGameStore';
import doorView from '@assets/Office/door.svg';
import DoorArrow from '@assets/UI/Buttons/Arrows/arrow_1.svg?react';
import ColleagueArrow from '@assets/UI/Buttons/Arrows/arrow_2.svg?react';
import Pulse from '@ui/Pulse/Pulse';
function Door() {
	const { setOfficeSubView, setColleagueSubView, setView, pulseRef } = useViewStore();
	const { currentActionIndex } = useGameStore();

	const doorRef = useRef(null);
	const getCurrentRef = () => {
		switch (pulseRef) {
			case 'door':
				return doorRef;
			default:
				return null;
		}
	};
	return (
		<>
			{pulseRef && getCurrentRef() && <Pulse targetRef={getCurrentRef()} />}
			{currentActionIndex === 7 && (
				<ArrowButton
					position={{ bottom: '50%', left: '45%' }}
					onClick={() => {
						setView('colleague');
						setColleagueSubView('front');
					}}
				>
					<ColleagueArrow ref={doorRef} />
				</ArrowButton>
			)}
			<ArrowButton
				position={{ bottom: '10%', left: '60%' }}
				onClick={() => setOfficeSubView('front')}
			>
				<DoorArrow />
			</ArrowButton>
			<Background src={doorView} />
		</>
	);
}

export default Door;
