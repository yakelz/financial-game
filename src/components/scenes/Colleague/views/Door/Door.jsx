import useViewStore from '@core/store/useViewStore';

import Background from '@ui/Background/Background';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';

import backView from '@assets/Colleague/door.svg';

import BackArrow from '@assets//UI/Buttons/Arrows/arrow_1.svg?react';
import DoorArrow from '@assets/UI/Buttons/Arrows/arrow_2.svg?react';

function Door() {
	const { setColleagueSubView, setOfficeSubView, setView } = useViewStore();
	return (
		<>
			<ArrowButton
				position={{ bottom: '30%', right: '50%' }}
				onClick={() => {
					setView('office');
					setOfficeSubView('front');
				}}
			>
				<DoorArrow />
			</ArrowButton>

			<ArrowButton
				position={{ bottom: '10%', left: '60%' }}
				onClick={() => setColleagueSubView('front')}
			>
				<BackArrow />
			</ArrowButton>

			<Background src={backView} />
		</>
	);
}

export default Door;
