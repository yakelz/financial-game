import useViewStore from '@core/store/useViewStore';

import Background from '@ui/Background/Background';
import ArrowButton from '@ui/Buttons/ArrowButton/ArrowButton';

import doorView from '@assets/Office/door.svg';
import DoorArrow from '@assets/UI/Buttons/Arrows/arrow_1.svg?react';

function Door() {
	const { setOfficeSubView } = useViewStore();
	return (
		<>
			<ArrowButton
				position={{ bottom: '5%', left: '50%' }}
				onClick={() => setOfficeSubView('front')}
			>
				<DoorArrow />
			</ArrowButton>
			<Background src={doorView} />
		</>
	);
}

export default Door;
